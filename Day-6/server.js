// Before Day 6:

// 👉 Re-solve WITHOUT HELP:

// Capitalize words
// Palindrome
// Remove duplicates

// If you can’t solve again:
// 👉 You didn’t learn properly yet

// Capitalize words

// let string = "riya singh";
// let result = "";
// for (let i = 0; i < string.length; i++) {
//   if (i === 0 || string[i - 1] === " ") {
//     result += string[i].toUpperCase();
//   } else result += string[i];
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
// Palindrome

// let string = "madam";
// let mid = string.length / 2;
// let isPallindrome = true;
// for (let i = 0; i <= mid; i++) {
//   if (string[i] !== string[string.length - 1 - i]) {
//     isPallindrome = false;
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

// Remove duplicates

// let arr = [23, 67, 87, 45, 67, 23, 45, 45];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       arr.splice(j, 1);
//       j--;
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
// .
// 🧩 PART 1: Warm-up
// Q1: Find sum of digits
// 1234 → 10

// let num = 1234;
// let sum = 0;

// while (num > 0) {
//   let val = num % 10;
//   sum += val;
//   num = Math.floor(num / 10);
// }

// console.log(sum);
// .
// .
// .
// .
// .
// .
// .
// .

// Q2: Reverse a number
// 123 → 321

// 👉 Don’t convert to string first (try logic)

// let num = 123;
// let result = "";
// while (num > 0) {
//   val = num % 10;
//   result += val;
//   num = Math.floor(num / 10);
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
// .
// 💥 PART 2: Core Problems
// 🔥 Q3: Check if two strings are anagrams
// "listen", "silent" → true
// "hello", "world" → false

// 👉 Think:

// Same characters
// Same frequency

// let str1 = "hello";
// let str2 = "silent";

// if (str1.length !== str2.length) {
//   console.log(false);
// } else {
//   let map = {};
//   for (const ch of str1) {
//     if (map[ch]) {
//       map[ch]++;
//     } else {
//       map[ch] = 1;
//     }
//   }

//   let isAnagram = true;

//   for (const ch of str2) {
//     if (!map[ch]) {
//       isAnagram = false;
//       break;
//     } else map[ch]--;
//   }
//   console.log(isAnagram);
// }

// .
// .
// .
// .
// .
// .
// .

// 🔥 Q4: Find the first duplicate element
// [2, 5, 1, 3, 5, 2] → 5

// 👉 First element that repeats

// let arr = [2, 5, 1, 3, 5, 2];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 1; j < i; j++) {
//     if (arr[i] === arr[j]) {
//       console.log(arr[i]);
//       break;
//     }
//   }
// }
// .
// .
// .
// .
// .
// .
// .
// .
// 🔥 Q5: Move all zeros to end (in-place)
// [0,1,0,3,12] → [1,3,12,0,0]

// 👉 No new array if possible

// let arr = [0, 1, 0, 3, 12];
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     result.push(arr[i]);
//   }
// }
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 0) {
//     result.push(arr[i]);
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
// .

// 🧠 PART 3: Thinking Challenge
// 🔥 Q6: Find majority element--->n/2
// [3,3,4,2,3,3,5] → 3

let arr = [3, 3, 4, 2, 3, 3, 5];
let n = arr.length - 1;
let max;
for (let i = 0; i < arr.length; i++) {
  let count = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      count++;
    }
  }
  if (count > n / 2) {
    max = arr[i];
  }
}
console.log(max);
