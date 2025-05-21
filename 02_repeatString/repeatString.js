const repeatString = function(text,num) {
let output = ""
if (num<0) output="ERROR";
for (i = 0;i<num;i++) {
    
    output += text;
}
return output
};

console.log(repeatString("doodoo",-1))

// Do not edit below this line
module.exports = repeatString;
