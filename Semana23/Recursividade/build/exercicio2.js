"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSumTo = (n, acc = 0) => {
    if (n === 0) {
        return acc;
    }
    return exports.calculateSumTo(n - 1, acc + n);
};
console.log(exports.calculateSumTo(3));
console.log(exports.calculateSumTo(10));
console.log(exports.calculateSumTo(100));
