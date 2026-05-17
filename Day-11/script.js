// 🔥 Q1: Move all negatives to left (in-place)
// [3, -2, -5, 6, -1] → [-2, -5, -1, 6, 3]

// let arr = [3, -2, -5, 6, -1];
// let j = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++;
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

// 🔥 Q2: Check if two strings are anagrams
// "listen" & "silent" → true
// "hello" & "world" → false

// let str1 = "listen";
// let str2 = "silent";
// let map = {};

// if (str1.length === str2.length) {
//   for (const ch of str1) {
//     if (map[ch]) {
//       map[ch]++;
//     } else {
//       map[ch] = 1;
//     }
//   }

//   let isAnagaram = true;

//   for (const ch of str2) {
//     if (!map[ch]) {
//       isAnagaram = false;
//       break;
//     } else {
//       map[ch]--;
//     }
//   }

//   console.log(isAnagaram);
// } else console.log(false);

// .
// .
// .
// .
// .
// .
// .
// .
// .

// 🔥 Q3: Find first repeating element
// [2,5,1,2,3,5] → 2

// let arr = [2, 5, 1, 2, 3, 5];
// let map = {};

// for (let i = 0; i < arr.length; i++) {
//   if (map[arr[i]]) {
//     console.log(arr[i]);
//     break;
//   } else {
//     map[arr[i]] = 1;
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
// .

// 🔥 Q4: Longest subarray with sum = k
// [1,2,3,1,1,1,1,4,2,3], k=3 → 3

// let arr = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3];
// let max = 0;
// let k = 3;

// for (let i = 0; i < arr.length; i++) {
//   let sum = 0;
//   for (let j = i; j < arr.length; j++) {
//     sum += arr[j];
//     if (sum === k) {
//       let length = j - i + 1;
//       if (length > max) {
//         max = length;
//       }
//     }
//   }
// }
// console.log(max);

// .
// .
// .
// .
// .
// .
// .
// .
// .

// 🔥 Q5: Reverse each word (not sentence)
// "hello world" → "olleh dlrow"

// let str = "hello world";
// let word = "";
// let result = "";

// for (let i = 0; i < str.length; i++) {
//   let ch = str[i];
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
// .

// 🧠 Q6 (Thinking Level)
// Find missing number
// [1,2,4,5] → 3

// let arr = [1, 2, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i + 1] !== arr[i] + 1) {
//     console.log(arr[i] + 1);
//     break;
//   }
// }

// 2nd approach USEFULL

let arr = [4, 2, 1, 5];
let expected = 0;
let actualSum = 0;
let n = arr.length + 1;

for (let i = 1; i <= n; i++) {
  expected += i;
}

for (let i = 0; i < arr.length; i++) {
  actualSum += arr[i];
}

console.log(expected - actualSum);
