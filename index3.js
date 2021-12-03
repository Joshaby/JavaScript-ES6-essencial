const sum = (a, b) => {
    return a + b;
}

const test = (a) => {
    return a();
}

console.log(test(sum(3, 2)));