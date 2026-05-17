// 🔹 Q1 (Warm-up — build confidence)

// Maximum sum of subarray of size K

// Example:

// arr = [2,1,5,1,3,2], k = 3
// output = 9  (subarray [5,1,3])

// let arr = [2, 1, 5, 1, 3, 2];
// let k = 3;
// let maxSum = 0;
// let currSum = 0;

// for (let i = 0; i < k; i++) {
//   currSum += arr[i];
// }
// maxSum = currSum;

//sliding window...
// for (let i = k; i < arr.length; i++) {
//   currSum = currSum - arr[i - k];
//   currSum += arr[i];

//   if (currSum > maxSum) {
//     maxSum = currSum;
//   }
// }

// console.log(maxSum);

// .
// .
// .
// .
// .
// .
// .
// .

// 🧠 Problem:
// Longest Substring Without Repeating Characters
// Input: "abcabcbb"
// Output: 3

// let string = "abcabcbb";
// let map = new Map();
// let result = "";
// let maxLength = 0;
// let left = 0;

// // Alternative Way..

// for (let right = 0; right < string.length; right++) {
//   let ch = string[right];

//   if (map.has(ch) && map.get(ch) >= left) {
//     left = map.get(ch) + 1;
//   }

//   map.set(ch, right);

//   let length = right - left + 1;

//   if (length > maxLength) {
//     maxLength = length;
//   }
// }

// console.log(maxLength);

// for (let i = 0; i < string.length; i++) {
//   let ch = string[i];
//   while (result.includes(ch)) {
//     result = result.slice(1);
//   }
//   result += ch;
//   if (result.length > maxLength) {
//     maxLength = result.length;
//   }
// }

// console.log(maxLength);

// .
// .
// .
// .
// .
// .
// .
// .

// 🔹 Q3 (Important pattern)

// Count number of substrings with at most K distinct characters

// Example:

// s = "eceba", k = 2
// output = 10

// let string = "eceba";
// let k = 2;
// let map = new Map();
// let left = 0;
// let count = 0;

// for (let right = 0; right < string.length; right++) {
//   let ch = string[right];

//   map.set(ch, (map.get(ch) || 0) + 1);

//   while (map.size > k) {
//     let leftChar = string[left];
//     map.set(leftChar, map.get(leftChar) - 1);

//     if (map.get(leftChar) === 0) {
//       map.delete(leftChar);
//     }

//     left++;
//   }

//   count += right - left + 1;
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
// .

// STABILIZING DAY-13

// 👉 Longest Substring Without Repeating Characters
// Input: "pwwkew"
// Output: 3

// let string = "pwwkew";
// let map = new Map();
// let left = 0;
// let maxLength = 0;

// for (let right = 0; right < string.length; right++) {
//   let ch = string[right];

//   if (map.has(ch) && map.get(ch) >= left) {
//     left = map.get(ch) + 1;
//   }

//   map.set(ch, right);

//   let length = right - left + 1;

//   if (length > maxLength) {
//     maxLength = length;
//   }
// }

// console.log(maxLength);

// .
// .
// .
// .
// .
// .
// .
// .
// .

// 🔁 Your task (lock the concept)

// Do this again from scratch (without seeing code):

// 👉 Same question:
// Longest Substring Without Repeating Characters

// let string = "abcabcbb";
// let map = new Map();
// let maxLength = 0;
// let left = 0;

// for (let right = 0; right < string.length; right++) {
//   let ch = string[right];

//   if (map.has(ch) && map.get(ch) >= left) {
//     left = map.get(ch) + 1;
//   }

//   map.set(ch, right);

//   let length = right - left + 1;

//   if (length > maxLength) {
//     maxLength = length;
//   }
// }

// console.log(maxLength);

// .
// .
// .
// .
// .
// .
// .
// .
// .

// 🔥 Next Question (Day 13 – Final)

// 👉 Longest substring with at most K distinct characters

// Example:
// string = "eceba", k = 2
// output = 3   // "ece"

let string = "eceba";
let k = 2;
let map = {};
let left = 0;
let maxLength = 0;

for (let right = 0; right < string.length; right++) {
  let ch = string[right];

  if (map[ch]) {
    map[ch]++;
  } else {
    map[ch] = 1;
  }

  while (Object.keys(map).length > k) {
    let leftChar = string[left];

    map[leftChar]--;

    if (map[leftChar] === 0) {
      delete map[leftChar];
    }

    left++;
  }

  let length = right - left + 1;
  if (length > maxLength) {
    maxLength = length;
  }
}

console.log(maxLength);

