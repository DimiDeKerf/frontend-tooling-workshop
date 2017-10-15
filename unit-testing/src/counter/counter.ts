export class Counter {

    private count: number;

    public add(value: number) {
        this.count += value;
    }

    public getCount(): number {
        return this.count;
    }

    public reset(): void {
        this.count = 0;
    }

}