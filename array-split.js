const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const part = nums.slice(2, 5);
console.log(part);

const removed = nums.splice(2, 3, 77, 88);
console.log(removed);
console.log(nums);
const together = nums.join(" ");
console.log(together);

const togetherNumber = parseInt(together);
console.log("togetherNumber:" + togetherNumber);