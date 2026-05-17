// 🧩 PART 1: Warm-up (Quick but sharp)
// Find second smallest number
// Count pairs with even sum

// 👉 Do fast, but clean.

// Find second smallest number

// let arr = [43, 25, 98, 65, 45];

// for (let i = 0; i < arr.length; i++) {
//   let smallest = Infinity;
//   let secSmallest = Infinity;
//   let num = arr[i];
//   if (num < smallest) {
//     secSmallest = smallest;
//     smallest = num;
//   } else if (num > smallest && num < secSmallest) {
//     secSmallest = num;
//   }
// }
// console.log(secSmallest);
// .
// .
// .
// .
// .
// .
// .
// .
// arr = [1, 2, 3, 4]
// Valid pairs:
// (1, 3) → 4 ✅ even
// (2, 4) → 6 ✅ even

// 👉 Output:
// 2

// let arr = [1, 2, 3, 4];
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {//to avoid duplicates
//     if ((arr[i] + arr[j]) % 2 === 0) {
//       count++;
//     }
//   }
// }
// console.log(count);
// .
// .
// .
// .
// .
// .
// .
// .
// .
// 💥 PART 2: Core Problems (Important)
// 🔥 Q1: Two Sum (better thinking)
// arr = [2, 7, 11, 15], target = 9
// → [2,7]

// let arr = [2, 7, 11, 15];
// let target = 9;
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] + arr[j] === target) {
//       result.push(arr[i]);
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

// 🔥 Q2: Remove duplicates (in-place if possible)

// 👉 Earlier you used new array
// Now try:
// 👉 Modify original array

// let arr = [56, 89, 32, 56, 32, 32];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       arr.splice(j, 1); //remove element
//       j--; //adjust index
//     }
//   }
// }
// console.log(arr);
// .
// .
// .
// .
// .
// .
// .
// .

// 🔥 Q3: Check if string is palindrome
// "madam" → true
// "hello" → false

// 👉 Don’t use reverse() directly
// 👉 Think from both ends

// let str = "madam";
// let mid = str.length / 2;
// let isPallindrome = false;
// for (let i = 0; i <= mid; i++) {
//   if (str[i] === str[str.length - 1]) {
//     isPallindrome = true;
//   }
// }
// console.log(isPallindrome);
// .
// .
// .
// .
// .
// .
// .
// .

// 🔥 Q4: Capitalize first letter of each word
// "hello world" → "Hello World"

// 👉 Combine:

// string
// loop
// character handling

let str = "hello world";
let result = "";
for (let i = 0; i < str.length; i++) {
  if (i === 0 || str[i - 1] === " ") {
    result += str[i].toUpperCase();
  } else result += str[i];
}
console.log(result);
