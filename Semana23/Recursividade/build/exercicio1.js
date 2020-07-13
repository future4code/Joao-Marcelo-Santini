"use strict";
//a
const printNumbersCres = (n) => {
    if (n >= 0) {
        printNumbersCres(n - 1);
        console.log(n);
    }
};
//b
const printNumbersDesc = (n) => {
    if (n >= 0) {
        console.log(n);
        printNumbersDesc(n - 1);
    }
};
console.log(printNumbersCres(5));
console.log(printNumbersDesc(5));
