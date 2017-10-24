export class WeakauraCompressor {
    b64decode(s: string) {
        let map = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, q: 16, r: 17, s: 18, t: 19, u: 20, v: 21, w: 22, x: 23, y: 24, z: 25, A: 26, B: 27, C: 28, D: 29, E: 30, F: 31, G: 32, H: 33, I: 34, J: 35, K: 36, L: 37, M: 38, N: 39, O: 40, P: 41, Q: 42, R: 43, S: 44, T: 45, U: 46, V: 47, W: 48, X: 49, Y: 50, Z: 51, 0: 52, 1: 53, 2: 54, 3: 55, 4: 56, 5: 57, 6: 58, 7: 59, 8: 60, 9: 61, "(": 62, ")": 63 }
        let arr = s.replace(/[^a-zA-Z0-9()]/g, "").split("");
        let ret = new Uint8Array(Math.ceil(s.length / 4 * 3));
        let i = 0; let o = 0;
        while (i < s.length) {
            let threeBytes = (map[arr[i++]])
                + (map[arr[i++]] << 6)
                + (map[arr[i++]] << 12)
                + (map[arr[i++]] << 18);
            ret[o++] = ((threeBytes) & 0xff);
            ret[o++] = ((threeBytes >> 8) & 0xff);
            ret[o++] = ((threeBytes >> 16) & 0xff);
        }
        return ret;
    }

    decompress(a) {
        if (a[0] == 1) {
            return decodeURIComponent(encodeURI(String.fromCharCode.apply(null, a.slice(1))));
        }
        if (a[0] != 3) { throw ("Decompress: currently only supporting uncompressed or Huffman-compressed strings."); }
        let i = 5; let n = 0;
        let field = 0; let field_len = 0;
        let symbol = null;
        let min_code_len = 1000000; let max_code_len = 0;

        //get map
        let map = {}
        while (n <= a[1]) {
            if (i >= a.length) { throw ("Decompress: failed to decode map") }
            field |= (a[i++] << field_len); field_len += 8;
            if (symbol == null) {
                symbol = field & 255;
                field >>= 8; field_len -= 8;
            } else {
                for (let j = 0; j < field_len - 1; j++) {
                    if (((field >> j) & 3) == 3) {
                        let escaped_code = field & ((0x01 << j) - 1);
                        let code = 0; let len = 0;
                        for (let k = 0; k < j; k++) {
                            if ((escaped_code & (1 << k))) {
                                code |= (1 << (len));
                                k++;
                            }
                            len++;
                        }
                        map[len] = map[len] || {};
                        map[len][code] = symbol;
                        min_code_len = len < min_code_len && len || min_code_len;
                        max_code_len = len > max_code_len && len || max_code_len;
                        symbol = null;
                        field >>= (j + 2); field_len -= (j + 2);
                        n++;
                        break;
                    }
                }
            }
        }

        //decompress
        let test_code_len = min_code_len;
        let ret = "";
        while (i <= a.length) {
            if (field_len < test_code_len) {
                field |= (a[i++] << field_len); field_len += 8;
            } else {
                let test_code = field & ((1 << test_code_len) - 1);
                let symbol = map[test_code_len] && map[test_code_len][test_code];
                if (symbol) {
                    ret += String.fromCharCode(symbol);
                    field >>= test_code_len; field_len -= test_code_len;
                    test_code_len = min_code_len;
                } else {
                    if (++test_code_len > max_code_len) { throw ("Decompress: error"); }
                }
            }
        }
        return decodeURIComponent(encodeURI(ret)); //input string from WoW is UTF-8; decode
    }

    deserialize(s: string) {
        let regex = new RegExp(/(\^.)([^\^]*)/gi);
        regex.exec(s);
        return (function rec(ctl, data) {
            if (!ctl) { let match = regex.exec(s); ctl = match[1]; data = match[2]; }
            if (ctl == "^^") { return null; }
            let ret;

            if (ctl == "^S") {
                ret = data.replace(/~./g, function (escape) {
                    if (escape < "~\x7a") { return String.fromCharCode(escape.charCodeAt(1) - 64); }
                    else if (escape == "~\x7a") { return "\x1e"; }
                    else if (escape == "~\x7b") { return "\x7f"; }
                    else if (escape == "~\x7c") { return "\x7e"; }
                    else if (escape == "~\x7d") { return "\x5e"; }
                })
            } else if (ctl == "^N") {
                ret = parseInt(data);
            } else if (ctl == "^F") {
                let match = regex.exec(s); let ctl2 = match[1]; let data2 = match[2];
                if (ctl2 != "^f") { throw "Deserialize: Expected ^f after ^F"; }
                let m = parseFloat(data);
                let e = parseFloat(data2);
                if (!(m && e)) { throw "Deserialize: Expected mantissa and exponent from ^F and ^f"; }
                ret = m * Math.pow(2, e);
            } else if (ctl == "^B") {
                ret = true;
            } else if (ctl == "^b") {
                ret = false;
            } else if (ctl == "^Z") {
                ret = null;
            } else if (ctl == "^T") {
                ret = {};
                while (true) {
                    let kmatch = regex.exec(s); let kctl = kmatch[1]; let kdata = kmatch[2];
                    if (kctl == "^t") { break; }
                    let k = rec(kctl, kdata);
                    let vmatch = regex.exec(s); let vctl = vmatch[1]; let vdata = vmatch[2];
                    let v = rec(vctl, vdata);
                    ret[k] = v;
                }
            }

            if (!ctl) { rec(); }
            return ret;
        })();
    }
    
    decode(s: string) {
        let decoded = this.b64decode(s);
        let decompressed = this.decompress(decoded);
        let deserialized = this.deserialize(decompressed);
        return deserialized;
    }
}
