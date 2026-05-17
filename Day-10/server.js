// 🔥 Q1: Left Rotate Array by 1 (in-place)
// [1,2,3,4] → [2,3,4,1]
// 🎯 Rules:
// No new array ❌
// Modify same array ✔️

// let arr = [1, 2, 3, 4];
// let n = arr.length;
// let temp = arr[0];
// for (let i = 0; i < n - 1; i++) {
//   arr[i] = arr[i + 1];
// }
// arr[n - 1] = temp;
// console.log(arr);

// .
// .
// .
// .
// .
// .
// .
// .

// 🔥 Q2: Check Palindrome (Number)
// 121 → true
// 123 → false

// let num = 123;
// let original = num;
// let rev = 0;
// let isPallindrome = true;

// while (num > 0) {
//   let val = num % 10;
//   rev = rev * 10 + val;
//   num = Math.floor(num / 10);
// }

// if (rev !== original) {
//   isPallindrome = false;
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

// 🔥 Q3: Find Leaders in Array
// [16,17,4,3,5,2]
// → [17,5,2]
// 🧠 Meaning:

// 👉 Element is leader if:

// no element to right is greater

// let arr = [16, 17, 4, 3, 5, 2];
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//   let isLeader = true;

//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[j] > arr[i]) {
//       isLeader = false;
//       break;
//     }
//   }

//   if (isLeader) {
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

// 🔥 Q4: Remove Duplicates (Sorted Array)
// [1,1,2,2,3] → [1,2,3];

// let arr = [1, 1, 2, 2, 3];

// let map = {};
// for (let i = 0; i < arr.length; i++) {
//   if (map[arr[i]]) {
//     map[arr[i]]++;
//   } else {
//     map[arr[i]] = 1;
//   }
//   if (map[arr[i]] > 1) {
//     arr.splice(i, 1);
//     i--;
//   }
// }

// console.log(arr);

// 2nd method

// let j = 0;
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] !== arr[j]) {
//     j++;
//     arr[j] = arr[i];
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

// 🔥 Q5: Reverse Words (No split method)
// "hello world" → "world hello"

// let string = "hello world";
// let word = "";
// let result = "";

// for (let i = string.length - 1; i >= 0; i--) {
//   let ch = string[i];
//   if (ch !== " ") {
//     word = ch + word;
//   } else {
//     result += word;
//     word = "";
//   }
// }

// result = result + " " + word;
// console.log(result);

// .
// .
// .
// .
// .
// .
// .
// .

// 🧠 Q6 (Thinking Level)
// Maximum Profit (Stock Problem)
// [7,1,5,3,6,4]
// → 5  (buy at 1, sell at 6)

let arr = [7, 1, 5, 3, 6, 4];
let buy = Infinity;
let maxProfit = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < buy) {
    buy = arr[i];
  }

  if (arr[i] - buy > maxProfit) {
    maxProfit = arr[i] - buy;
  }
}

console.log(maxProfit);
