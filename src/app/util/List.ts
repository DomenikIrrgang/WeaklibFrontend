export class List<T> {
    private items: Array<T>;

    constructor() {
        this.items = [];
    }

    size(): number {
        return this.items.length;
    }

    add(value: T): void {
        this.items.push(value);
    }

    get(index: number): T {
        return this.items[index];
    }

    contains(value: T): boolean {
        var i: number;
        for (i = 0; i < this.size(); i++) {
            if (this.get(i) == value) {
                return true;
            }
        }
        return false;
    }

    remove(value: T): void {
        var i: number;
        var assign: number = 0;
        for (i = 0; i < this.size(); i++) {
            if (value == this.get(i)) {
                assign = 1;
            }
            this.items[i] = this.items[i + assign];
        }
        this.items.length = this.items.length - 1;
    }

    toArray(): Array<T> {
        return this.items;
    }
}