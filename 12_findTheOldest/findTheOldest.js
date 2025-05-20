const findTheOldest = function (arr) {
    let ageArr = arr.map((obj) => {
        if ('yearOfDeath' in obj) { endDate = obj.yearOfDeath }
        else { endDate = new Date().getFullYear() }
        return endDate - obj.yearOfBirth;
    });
    // get index of oldest age
    let oldest = 0;
    let oldestIndex = 0
    for (let i = 0; i < ageArr.length; i++) {
        if (oldest < ageArr[i]) { oldest = ageArr[i]; oldestIndex = i };
    }
    return arr[oldestIndex]
};

// Do not edit below this line
module.exports = findTheOldest;
