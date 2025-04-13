const reverseString = function(text) {
let splitText = text.split("");
let output = "";
for (i = 0; i < splitText.length;i++) {
output += splitText[splitText.length-1-i];
}
return output
};

console.log(reverseString(""))

// Do not edit below this line
module.exports = reverseString;
