// 🧩 PART 1: Warm-up (Quick)
// Find sum of odd numbers
// Count numbers less than 0
// Find max difference (max - min)

// 👉 Do fast. No struggle here.

// Find sum of odd numbers

// let arr = [34,56,11,21,31];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     let num = arr[i]
//     if (num%2!==0) {
//         sum+=num
//     }

// }
// console.log(sum);
// .
// .
// .
// .
// .
// .
// .

// Count numbers less than 0

// let arr = [-21,34,-11,67,98,-79];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     let num= arr[i];
//     if (num<0) {
//         count++
//     }

// }
// console.log(count);
// .
// .
// .
// .
// .
// .
// .
// Find max difference (max - min)

// let arr = [90, 65, 43, 21, 89];
// let max = 0;
// let min = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// let diff = max - min;
// console.log(diff);
// .
// .
// .
// .
// .
// .
// .
// .
// 💥 PART 2: Core Problems
// 🔥 Q1: Remove all duplicates (return new array)

// Example:

// [1,2,2,3,4,3] → [1,2,3,4]

// 👉 You’ve done similar—but now do it clean and efficient
// [1,2,2,3,4,3] → [1,2,3,4]

// let arr = [1, 2, 2, 3, 4, 3];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   let isAppeared = false;
//   for (let j = 0; j < i; j++) {
//     if (arr[i] === arr[j]) {
//       isAppeared = true;
//       break;
//     }
//   }
//   if (isAppeared) continue;
//   result.push(arr[i]);
// }
// console.log(result);
// .
// .
// .
// .
// .
// .
// .
// .

// 🔥 Q2: Find pair with given sum

// Example:

// arr = [2, 7, 11, 15], target = 9
// → [2,7]

// let arr = [2, 7, 11, 15];
// let target = 9;
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//   let num1 = arr[i];
//   for (let j = 0; j < arr.length; j++) {
//     let num2 = arr[j];
//     if (num1 + num2 === target) {
//       result.push(num1);
//     }
//   }
// }
// console.log(result);
// .
// .
// .
// .
// .
// .
// .
// .

// 🔥 Q3: Find longest word in array of strings

// Example:

// ["hi", "hello", "world"] → "hello"

let arr = ["hi", "hello", "world"];
let longest = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > longest.length) {
    longest = arr[i];
  }
}
console.log(longest);

// .
// .
// .
// .
// .
// .
// .
// .
// .

// 🔥 Q4: Reverse each word in a sentence

// Example:

// "hello world" → "olleh dlrow"

// 👉 Combine string + loop thinking

// let string = "hello world";
// let result = "";

// for (let i = string.length - 1; i >= 0; i--) {
//   result += string[i];
// }
// console.log(result);
