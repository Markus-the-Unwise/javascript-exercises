const palindromes = function (string) {
    let str = string.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g, '').toLowerCase();
    let reverse = str.split("").reverse().join("")
    console.log([str, reverse])
    return str == reverse
};
// palindromes("racec sar")
// Do not edit below this line
module.exports = palindromes;
