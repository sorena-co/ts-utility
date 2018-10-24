"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(a, b) {
    if (!(typeof a === "number")) {
        try {
            a = +a;
        }
        catch (e) {
            console.error(e);
        }
    }
    if (!(typeof b === "number")) {
        try {
            b = +b;
        }
        catch (e) {
            console.error(e);
        }
    }
    return a + b;
}
exports.sum = sum;
function minus(a, b) {
    if (!(typeof a === "number")) {
        try {
            a = +a;
        }
        catch (e) {
            console.error(e);
        }
    }
    if (!(typeof b === "number")) {
        try {
            b = +b;
        }
        catch (e) {
            console.error(e);
        }
    }
    return a - b;
}
exports.minus = minus;
function multiply(a, b) {
    if (!(typeof a === "number")) {
        try {
            a = +a;
        }
        catch (e) {
            console.error(e);
        }
    }
    if (!(typeof b === "number")) {
        try {
            b = +b;
        }
        catch (e) {
            console.error(e);
        }
    }
    return a * b;
}
exports.multiply = multiply;
function division(a, b) {
    if (!(typeof a === "number")) {
        try {
            a = +a;
        }
        catch (e) {
            console.error(e);
        }
    }
    if (!(typeof b === "number")) {
        try {
            b = +b;
        }
        catch (e) {
            console.error(e);
        }
    }
    return a / b;
}
exports.division = division;
function deleteFromArray(arr, obj) {
    if (arr && arr.length) {
        arr = arr.filter(value => obj !== value);
        return arr;
    }
    return null;
}
exports.deleteFromArray = deleteFromArray;
function random(start, end) {
    return Math.floor(Math.random() * (end - start)) + start;
}
exports.random = random;
