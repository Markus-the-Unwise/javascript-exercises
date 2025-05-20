const fibonacci = function (value) {
    if (value == 0) { return 0 };
    if (value < 0) { return "OOPS" };
    let arr = [1, 1];
    while (arr.length < value) {
        newInput = arr.at(-1) + arr.at(-2);
        arr.push(newInput);
    }
    console.log(arr);
    return arr[value - 1];
};
fibonacci(3)
// Do not edit below this line
module.exports = fibonacci;
