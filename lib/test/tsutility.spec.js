"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsutility_1 = require("../main/tsutility");
describe("sum", () => {
    it("sum two number.", () => {
        expect(tsutility_1.sum(1, 2)).toEqual(3);
    });
});
describe("sum", () => {
    it("sum two converted string to number.", () => {
        expect(tsutility_1.sum('1', '2')).toEqual(3);
    });
});
describe("minus", () => {
    it("minus two number.", () => {
        expect(tsutility_1.minus(1, 2)).toEqual(-1);
    });
});
describe("minus", () => {
    it("minus two converted string to number.", () => {
        expect(tsutility_1.minus('2', '9')).toEqual(-7);
    });
});
describe("multiply", () => {
    it("multiply two number.", () => {
        expect(tsutility_1.multiply(1, 2)).toEqual(2);
    });
});
describe("multiply", () => {
    it("multiply two converted string to number.", () => {
        expect(tsutility_1.multiply('2', '9')).toEqual(18);
    });
});
describe("division", () => {
    it("division two number.", () => {
        expect(tsutility_1.division(1, 2)).toEqual(0.5);
    });
});
describe("division", () => {
    it("division two converted string to number.", () => {
        expect(tsutility_1.division('90', '9')).toEqual(10);
    });
});
describe("deleteFromArray", () => {
    it("delete obj from array by reference.", () => {
        const arr = [1, 2, 3];
        expect(tsutility_1.deleteFromArray(arr, 1)).toEqual([2, 3]);
    });
});
describe("random", () => {
    it("generate random", () => {
        expect(tsutility_1.random(5, 8)).toBeGreaterThanOrEqual(5);
        expect(tsutility_1.random(5, 8)).toBeLessThanOrEqual(8);
    });
});
