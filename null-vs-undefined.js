//IF the variable is not defined it's undefined.

let age;
console.log(age);

function addNum(a, b){
    console.log(a + b);
}

// The value of the sum will be undefined as nothing is returned from function.

const sum = addNum(13, 45);
console.log(sum);

function showNum(a, b){
    console.log(a, b);
}

// Here a undefined will be shown after 12 as the value of b is not given.

const result = showNum(12);
console.log(result);