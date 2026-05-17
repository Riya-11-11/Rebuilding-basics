// // 👉 Problem:

// // Longest Substring with EXACTLY K Distinct Characters
// // length of the longest substring that contains EXACTLY k distinct characters
// // 🔍 Example 1
// // string = "aabacbebebe"
// // k = 3

// let string = "aabacbebebe";
// let k = 3;
// let map = {};
// let left = 0;
// let maxLength = 0;

// for (let right = 0; right < string.length; right++) {
//   let ch = string[right];

//   if (map[ch]) {
//     map[ch]++;
//   } else {
//     map[ch] = 1;
//   }

//   while (Object.keys(map).length > k) {
//     let leftChar = string[left];

//     map[leftChar]--;

//     left++;
//     if (map[leftChar] === 0) {
//       delete map[leftChar];
//     }
//   }

//   if (Object.keys(map).length === k) {
//     let length = right - left + 1;

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

// 1️⃣ Revision (important)
// Longest Substring Without Repeating Characters
// "abcabcbb"

// let s = "abcabcbb";
// let map = {};
// let max = 0;
// let l = 0;

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

//     if (map[leftChar] === 0) {
//       delete map[leftChar];
//     }

//     l++;
//   }

//   let length = r - l + 1;

//   if (length > max) {
//     max = length;
//   }
// }

// console.log(max);

// 2️⃣ At Most K Distinct Characters

// (you already did)

// "eceba", k = 2

// let s = "eceba";
// let k = 2;
// let map = {};
// let l = 0;
// let max = 0;

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

//     if (map[leftChar] === 0) {
//       delete map[leftChar];
//     }

//     l++;
//   }

//   let length = r - l + 1;

//   if (length > max) {
//     max = length;
//   }
// }

// console.log(max);

// 👉 Fruit Into Baskets
// arr = [1,2,1,2,3]

// Find:

// longest subarray with at most 2 distinct numbers

// let arr = [1, 2, 1, 2, 3];
// let k = 2;
// let map = {};
// let l = 0;
// let max = 0;

// for (let r = 0; r < arr.length; r++) {
//   if (map[arr[r]]) {
//     map[arr[r]]++;
//   } else {
//     map[arr[r]] = 1;
//   }

//   while (Object.keys(map).length > k) {
//     let leftNum = arr[l];

//     map[leftNum]--;

//     if (map[leftNum] === 0) {
//       delete map[leftNum];
//     }

//     l++;
//   }

//   let length = r - l + 1;

//   if (length > max) {
//     max = length;
//   }
// }

// console.log(max);



// 🚀 Next Questions For You
// 1️⃣ Re-solve WITHOUT HELP

// Tomorrow or later:

// Questions:
// Longest Substring Without Repeating Characters
// let s = "abcabcbb";
// let map = {};
// let max=0;
// let l = 0;

// for (let r = 0; r < s.length; r++) {
//   let ch = s[r];
//   if (map[ch]) {
//     map[ch]++;
//   }else{
//     map[ch]=1;
//   }

//   while (map[ch]>1) {
//     let leftChar = s[l];
//     map[leftChar]--;

//     if (map[leftChar]===0) {
//       delete map[leftChar];
//     }

//     l++;
//   }

//   let length = r-l+1;
//   if (length>max) {
//     max = length
//   }
  
// }

// console.log(max);






// At Most K Distinct Characters
let arr = [1, 2, 1, 2, 3];
let k = 2;
let map = {};
let l = 0;

for (let r = 0; r < arr.length; r++) {
  let ch = arr[r];

  if (map[ch]) {
    map[ch]++;
  }else{
    map[ch]=1;
  }
  
  while (Object.keys(map).length>k) {
    let leftChar = arr[l];
    map[leftChar]--;

    if (leftChar===0) {
      delete map[leftChar]
    }

    l++;
  }

  let length = r-l+1;

  if (length>max) {
    max = length;
  }
}

console.log(length);





// // Exactly K Distinct Characters
