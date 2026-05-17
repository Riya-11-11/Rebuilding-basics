// 🧩 PART 1: Warm-up
// Q1: Count consonants
// "hello world" → 7

// let string = "hello world";
// let count = 0;
// for (let i = 0; i < string.length; i++) {
//   let ch = string[i];
//   if (
//     ch === "a" ||
//     ch === "e" ||
//     ch === "i" ||
//     ch === "o" ||
//     ch === "u" ||
//     ch === " "
//   ) {
//     continue;
//   } else count++;
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

// Q2: Sum of even digits
// 123456 → 2 + 4 + 6 = 12

// let num = 1233456;
// let sum = 0;
// while (num > 0) {
//   let val = num % 10;
//   if (val % 2 === 0) {
//     sum += val;
//   }
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
// 💥 PART 2: Core Problems
// 🔥 Q3: Find intersection of two arrays
// [1,2,3], [2,3,4] → [2,3]

// let arr1 = [1, 2, 3];
// let arr2 = [2, 3, 1];
// let result = [];

// for (let i = 0; i < arr1.length; i++) {
//   for (let j = 0; j < arr2.length; j++) {
//     if (arr1[i] === arr2[j]) {
//       result.push(arr1[i]);
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

// 🔥 Q4: Find second largest WITHOUT sorting
// [10, 5, 8, 20] → 10

// let arr = [10, 5, 8, 20];
// let largest = -Infinity;
// let secLargest = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     secLargest = largest;
//     largest = arr[i];
//   } else if (arr[i] < largest && arr[i] > secLargest) {
//     secLargest = arr[i];
//   }
// }
// console.log(secLargest);
// .
// .
// .
// .
// .
// .
// .

// 🔥 Q5: Check if string is rotation of another
// "abcde", "cdeab" → true
// "abc", "acb" → false

// let str1 = "abc";
// let str2 = "acb";
// let result = str1 + str1;
// let isRotate = false;

// for (let i = 0; i < result.length; i++) {
//   if (result.includes(str2)) {
//     isRotate = true;
//   }
// }
// console.log(isRotate);
// .
// .
// .
// .
// .
// .
// .

// 🧠 PART 3: Thinking Challenge
// 🔥 Q6: Longest consecutive sequence
// [100,4,200,1,3,2] → 4
// (sequence: 1,2,3,4)

let arr = [100, 4, 200, 1, 3, 2];
let maxLength = 0;
let length;
for (let i = 0; i < arr.length; i++) {
  if (!arr.includes(arr[i] - 1)) {
    let curr = arr[i];
    length = 1;
    while (arr.includes(curr + 1)) {
      curr = curr + 1;
      length += 1;
    }
    if (length > maxLength) {
      maxLength = length;
    }
  }
}

console.log(maxLength);
