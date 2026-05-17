// Q1. Longest Substring Without Repeating Characters
// s = "abcabcbb"

// let s = "abcabcbb";
// let map = {};
// let l = 0;
// let maxLength = 0;

// for (let r = 0; r < s.length; r++) {
//   let ch = s[r];
//   if (map[ch]) {
//     map[ch]++;
//   } else {
//     map[ch] = 1;
//   }

//   while (map[ch] > 1) {
//     let leftChar = s[l];
//     map[leftChar]--;
//     l++;

//     if (map[leftChar] === 0) {
//       delete map[leftChar];
//     }
//   }

//   let length = r - l + 1;
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
// .

// Q2. At Most K Distinct Characters
// s = "eceba"
// k = 2

// Find:

// longest substring with at most k distinct chars

// let s = "eceba";
// let k = 2;
// let map = {};
// let maxLength = 0;
// let l = 0;

// for (let r = 0; r < s.length; r++) {
//   let ch = s[r];

//   if (map[ch]) {
//     map[ch]++;
//   } else {
//     map[ch] = 1;
//   }

//   while (Object.keys(map).length > k) {
//     let leftChar = s[l];
//     map[leftChar]--;
//
//  l++;
//     if (map[leftChar] === 0) {
//       delete map[leftChar];
//     }

//   }
//   let length = r - l + 1;
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

// Q4. Exactly K Distinct Characters
// s = "aabacbebebe"
// k = 3

// Find:

// longest substring with exactly k distinct chars

// let s = "aabacbebebe";
// let k = 3;
// let map = {};
// let maxLength = 0;
// let l = 0;

// for (let r = 0; r < s.length; r++) {
//   let ch = s[r];

//   if (map[ch]) {
//     map[ch]++;
//   } else {
//     map[ch] = 1;
//   }

//   while (Object.keys(map).length > k) {
//     let leftChar = s[l];
//     map[leftChar]--;
//     l++;

//     if (map[leftChar] === 0) {
//       delete map[leftChar];
//     }
//   }

//   if (Object.keys(map).length === k) {
//     let length = r - l + 1;

//     if (length > maxLength) {
//       maxLength = length;
//     }
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

// Part 2 — Slightly harder (same pattern)
// Q3. Fruit Into Baskets
// arr = [1,2,3,2,2]

// Find:

// longest subarray with at most 2 distinct numbers

// let arr = [1, 2, 3, 2, 2];
// let k = 2;
// let map = {};
// let maxLength = 0;
// let l = 0;

// for (let r = 0; r < arr.length; r++) {
//   let ch = arr[r];

//   if (map[ch]) {
//     map[ch]++;
//   } else {
//     map[ch] = 1;
//   }

//   while (Object.keys(map).length > k) {
//     let leftChar = arr[l];
//     map[leftChar]--;
//     l++;

//     if (map[leftChar] === 0) {
//       delete map[leftChar];
//     }
//   }

//   let length = r - l + 1;
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

// Part 3 — New but related (only IF energy remains)
// Q5. Maximum Sum Subarray of Size K

// (Fixed window revision)

// arr = [2,1,5,1,3,2]
// k = 3

// Find:

// maximum sum

// let arr = [2,1,5,1,3,2];
// let k = 3;
// let map = {};
// let maxSum = 0;
// let l = 0;


