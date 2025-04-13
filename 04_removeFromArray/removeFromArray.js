const removeFromArray = function(inputArray,objRemove) {
const mainArray = inputArray;
const secondaryArray = []

let i = 0
while (arguments[i] != undefined){
    secondaryArray.push(arguments[i]);
    i++
};
console.log("Phase 1 complete")
for (let i of secondaryArray) {
    while (mainArray.includes(i)==true){
        mainArray.splice(mainArray.indexOf(i),1)
    }
    
}
return mainArray
};

// Do not edit below this line
module.exports = removeFromArray;


/*
function (a,b,c,d...) {
save first arguement as main array

let i = 0
while (argument[i] isn't undefined)
{save argument[i] into secondary array}
i++
}

for (i of secondaryArray) {

while object is still in main array
    {obtain index of object in main array;
    splice at index in said array;}

}

*/
