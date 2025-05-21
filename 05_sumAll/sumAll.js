const sumAll = function(a,b) {
if (Number.isInteger(a)!=true||Number.isInteger(b)!=true||a<0||b<0){
    return "ERROR"
};
let startVal;
let endVal;
if (a < b){
    startVal = a;
    endVal = b
} else {
    startVal = b;
    endVal = a;
}

let sum = 0
for (let i = startVal;i<=endVal;i++){
    sum+=i;
}
return sum
};

// Do not edit below this line
module.exports = sumAll;

/*
receive arguments A&B
check if one isn't integer return "ERROR"
check if one is less than 0; return "ERROR"

assign smaller value to startVariable, bigger to endingVariable

let sum = 0
for (i = startingVariable; i <= endingVariable; i++)
{
sum += i
}
return sum
*/
let a = sumAll(-1,5)
console.log(a)