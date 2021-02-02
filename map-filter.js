const numbers = [3, 4, 5, 6, 7, 8];
const output = []
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}

function square(element){
    return element * element;
}

const result = numbers.map(function(element){
   return element * element;
});

console.log(result);

const result1 = numbers.map(x => x*x);
console.log(result1);

console.log(output);


const result3 = numbers.filter( x => x > 5);
console.log(result3);

const isThere = numbers.find(x => x > 5);
console.log(isThere);