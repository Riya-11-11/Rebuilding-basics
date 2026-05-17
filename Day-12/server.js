// 🔥 Q1: Move all zeros to end (in-place)
// [0,1,0,3,12] → [1,3,12,0,0]

// let arr = [0, 1, 0, 3, 12];
// j = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== 0) {
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

// 🔥 Q2: Valid palindrome (ignore non-alphanumeric)
// "A man, a plan, a canal: Panama" → true
// "race a car" → false

// let str = "A man, a plan, a canal: Panama";
// // let str = "race a car";
// let store = "";

// for (let i = 0; i < str.length; i++) {
//   let ch = str[i];
//   if (
//     (ch >= "a" && ch <= "z") ||
//     (ch >= "A" && ch <= "Z") ||
//     (ch >= "0" && ch <= "9")
//   ) {
//     store += str[i];
//   }
// }

// store = store.toLowerCase();

// let isPallindrome = true;
// let j = store.length - 1;

// for (let i = 0; i < j; i++) {
//   if (store[i] !== store[j]) {
//     isPallindrome = false;
//     break;
//   } else j--;
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
// .

// Longest Substring Without Repeating Characters

// Example:

// "abcabcbb" → 3
// "pwwkew" → 3

// let string = "pwwkew";
// let result = "";
// let longestStr = "";
// let maxLength = 0;

// for (let i = 0; i < string.length; i++) {
//   while (result.includes(string[i])) {
//     result = result.slice(1);
//   }
//   result += string[i];

//   if (result.length > maxLength) {
//     maxLength = result.length;
//     longestStr = result;
//   }
// }
// console.log(maxLength);
// console.log(longestStr);

// .
// .
// .
// .
// .
// .
// .
// .
// .

// Container With Most Water

// Example:

// [1,8,6,2,5,4,8,3,7] → 49

// 👉 Expectation:

// Two pointer optimization
// If you don’t reach optimal → that’s a gap

// 🔍 Simple example

// Take:

// [1,8,6,2,5,4,8,3,7]

// If you pick:

// height 8 (index 1)
// height 7 (index 8)

// 👉 Height = min(8,7) = 7
// 👉 Width = 8 - 1 = 7

// 👉 Water = 7 × 7 = 49

// let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// let height;
// let water = 0;
// let i = 0;
// let j = arr.length - 1;

// while (i < j) {
//   let width = j - i;
//   if (arr[i] < arr[j]) {
//     height = arr[i];
//     i++;
//   } else {
//     height = arr[j];
//     j--;
//   }
//   let calcWater = height * width;

//   if (calcWater > water) {
//     water = calcWater;
//   }
// }

// console.log(water);

// .
// .
// .
// .
// .
// .
// .
// .

// Group Anagrams

// Example:

// ["eat","tea","tan","ate","nat","bat"]
// → [["eat","tea","ate"],["tan","nat"],["bat"]]

let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
let map = {};

for (let i = 0; i < arr.length; i++) {
  let word = arr[i];

  // let newArr = word.split("");
  // newArr.sort();
  // let newStr = newArr.join("");

  let key = word.split("").sort().join("");
  if (!map[key]) {
    map[key] = [];
  }

  map[key].push(word);
}

let result = Object.values(map);
console.log(result);


