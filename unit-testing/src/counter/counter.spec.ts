import { Counter } from './counter';

describe('Counter', () => {

    let counter: Counter;

    beforeAll(() => {
        counter = new Counter();
    })

    beforeEach(() => {
        counter.reset();
    });

    it('should add 2', () => {
        counter.add(2);
        expect(counter.getCount()).toEqual(2);
    })

});