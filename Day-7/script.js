// 🧩 PART 1: Warm-up (Don’t skip)
// Q1: Count vowels in a string
// "hello world" → 3

// let string = "hello world";
// let count = 0;
// for (const ch of string) {
//   if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
//     count++;
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

// Q2: Find factorial of a number
// 5 → 120

// let num = 5;
// let fact = 1;
// for (let i = 1; i <= num; i++) {
//   fact *= i;
// }
// console.log(fact);
// .
// .
// .
// .
// .
// .
// .

// 💥 PART 2: Core Problems
// 🔥 Q3: Find missing number
// [1,2,3,5] → 4

// let arr = [1, 2, 3, 5];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i + 1] !== arr[i] + 1) {
//     console.log(arr[i] + 1);
//     break;
//   }
// }
// .
// .
// .
// .
// .
// .
// .
// 🔥 Q4: Check if two arrays are equal
// [1,2,3], [1,2,3] → true
// [1,2,3], [3,2,1] → false

// let arr1 = [1, 2, 3];
// let arr2 = [3, 2, 1];
// let isEqual = true;
// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] !== arr2[i]) {
//     isEqual = false;
//   }
// }

// console.log(isEqual);
// .
// .
// .
// .
// .
// .
// .

// 🔥 Q5: Rotate array by k steps
// [1,2,3,4,5], k=2
// → [4,5,1,2,3]

// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// let result = [];

// for (let i = arr.length - 2; i < arr.length; i++) {
//   result.push(arr[i]);
// }

// for (let i = 0; i < arr.length - k; i++) {
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

// 🧠 PART 3: Thinking Challenge
// 🔥 Q6: Find longest substring without repeating characters
// "abcabcbb" → "abc"

let string = "abcabcbb";
let result = "";
let maxLength = 0;
let longestStr = "";

for (let i = 0; i < string.length; i++) {
  while (result.includes(string[i])) {
    result = result.slice(1);
  }
  result += string[i];

  if (result.length > maxLength) {
    maxLength = result.length;
    longestStr = result;
  }
}
console.log(longestStr);

// if (maxLength) {
//     console.log(result);
// }
// console.log(maxLength);

// for (let i = 0; i < string.length; i++) {
//     let isExists = false;
//    for (let j = i+1; j < string.length; j++) {
//     if (string[i]===string[j]) {
//         isExists=true;
//         string.splice(j,1);
//         j--
//     }
//     if (isExists=true) continue;

//    }

// }
// console.log(string);
