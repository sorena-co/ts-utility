export function sum(a: any, b: any) {
    if (!(typeof a === "number")) {
        try {
            a = +a;
        } catch (e) {
            console.error(e);
        }
    }
    if (!(typeof b === "number")) {
        try {
            b = +b;
        } catch (e) {
            console.error(e);
        }
    }
    return a + b;
}

export function minus(a: any, b: any) {
    if (!(typeof a === "number")) {
        try {
            a = +a;
        } catch (e) {
            console.error(e);
        }
    }
    if (!(typeof b === "number")) {
        try {
            b = +b;
        } catch (e) {
            console.error(e);
        }
    }
    return a - b;
}

export function multiply(a: any, b: any) {
    if (!(typeof a === "number")) {
        try {
            a = +a;
        } catch (e) {
            console.error(e);
        }
    }
    if (!(typeof b === "number")) {
        try {
            b = +b;
        } catch (e) {
            console.error(e);
        }
    }
    return a * b;
}

export function division(a: any, b: any) {
    if (!(typeof a === "number")) {
        try {
            a = +a;
        } catch (e) {
            console.error(e);
        }
    }
    if (!(typeof b === "number")) {
        try {
            b = +b;
        } catch (e) {
            console.error(e);
        }
    }
    return a / b;
}

export function deleteFromArray(arr: any[], obj: any) {
    if (arr && arr.length) {
        arr = arr.filter(value => obj !== value);
        // arr = arr.slice(arr.indexOf(obj), 1);
        return arr;
    }
    return null;
}

export function random(start: number, end: number) {
    return Math.floor(Math.random() * (end - start)) + start;
}