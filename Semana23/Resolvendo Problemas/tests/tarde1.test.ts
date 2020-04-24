import { checkOneEdit } from "../src/tarde1";

describe("Testing one-edit function", () => {
    it("Should return false for inputs 'banana' and 'bananaaa'", () => {
        expect(checkOneEdit("banana","bananaaa")).toEqual(false)
    });

    it("Should return true for inputs 'banana' and 'banan'", () => {
        expect(checkOneEdit("banana","banan")).toEqual(true)
    });

    it("Should return true for inputs 'banana' and 'bananak'", () => {
        expect(checkOneEdit("banana","bananak")).toEqual(true)
    });

    it("Should return true for inputs 'banana' and 'panana'", () => {
        expect(checkOneEdit("banana","panana")).toEqual(true)
    });
});