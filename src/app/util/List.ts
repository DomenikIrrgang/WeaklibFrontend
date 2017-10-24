export class List<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    public size(): number {
        return this.items.length;
    }

    public add(value: T): void {
        this.items.push(value);
    }

    public get(index: number): T {
        return this.items[index];
    }

    public contains(value: T): boolean {
        let i: number;
        for (i = 0; i < this.size(); i++) {
            if (this.get(i) === value) {
                return true;
            }
        }
        return false;
    }

    public remove(value: T): void {
        let i: number;
        let assign: number = 0;
        for (i = 0; i < this.size(); i++) {
            if (value === this.get(i)) {
                assign = 1;
            }
            this.items[i] = this.items[i + assign];
        }
        this.items.length = this.items.length - 1;
    }

    public toArray(): T[] {
        return this.items;
    }
}