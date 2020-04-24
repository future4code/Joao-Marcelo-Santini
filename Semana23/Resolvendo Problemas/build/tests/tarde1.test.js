"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tarde1_1 = require("../src/tarde1");
describe("Testing one-edit function", () => {
    it("Should return false for inputs 'banana' and 'bananaaa'", () => {
        expect(tarde1_1.checkOneEdit("banana", "bananaaa")).toEqual(false);
    });
    it("Should return true for inputs 'banana' and 'banan'", () => {
        expect(tarde1_1.checkOneEdit("banana", "banan")).toEqual(true);
    });
    it("Should return true for inputs 'banana' and 'bananak'", () => {
        expect(tarde1_1.checkOneEdit("banana", "bananak")).toEqual(true);
    });
    it("Should return true for inputs 'banana' and 'panana'", () => {
        expect(tarde1_1.checkOneEdit("banana", "panana")).toEqual(true);
    });
});
