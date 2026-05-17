// 🔥 Q1: Move all negatives to left (in-place)
// [3, -2, -5, 6, -1] → [-2, -5, -1, 3, 6]
// 🎯 Rules:
// Don’t create new array ❌
// Modify same array ✔️
// Order doesn’t matter

// let arr = [3, -2, -5, 6, -1];
// let j = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++;
//   } else continue;
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

// 🔥 Q2: Check if two arrays are equal
// [1,2,3] & [3,2,1] → true
// [1,2,2] & [1,2,3] → false

// let arr1 = [1, 2, 2];
// let arr2 = [3, 2, 1];

// if (arr1.length !== arr2.length) {
//   console.log(false);
// } else {
//   let map = {};
//   for (let i = 0; i < arr1.length; i++) {
//     if (map[arr1[i]]) {
//       map[arr1[i]]++;
//     } else {
//       map[arr1[i]] = 1;
//     }
//   }

//   let isEqual = true;

//   for (let i = 0; i < arr2.length; i++) {
//     if (!map[arr2[i]]) {
//       isEqual = false;
//       break;
//     } else map[arr2[i]]--;
//   }

//   console.log(isEqual);
// }

// .
// .
// .
// .
// .
// .
// .
// .

// 🔥 Q3: Find missing number (0 to n)
// [3,0,1] → 2
// [0,1] → 2
// 🎯 Hint direction:

// let arr = [3, 0, 1, 5, 2];
// for (let i = 0; i < arr.length; i++) {
//   if (!arr.includes(arr[i] - 1)) {
//     let start = arr[i];
//     if (!arr.includes(arr[i] + 1)) {
//       console.log(arr[i] - 1);
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

// 🔥 Q4: Reverse words in a string
// "hello world here" → "here world hello"

// let string = "hello world here";
// let arr = string.split(" ");
// let result = []

// for (let i = arr.length - 1; i >= 0; i--) {
//    result.push(arr[i]);
// }
// result = result.join(' ')
// console.log(result);

// .
// .
// .
// .
// .
// .
// .
// .

// 🔥 Q5: First non-repeating character
// "swiss" → "w"

// let string = "swiss";
// let map = {};

// for (const ch of string) {
//   if (map[ch]) {
//     map[ch]++;
//   } else {
//     map[ch] = 1;
//   }
// }

// for (const ch of string) {
//   if (map[ch] === 1) {
//     console.log(ch);
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
// .

// 🧠 Q6 (Thinking Level – Step Up)
// Longest Subarray with Sum = K
// arr = [1,2,3,1,1,1,1,4,2,3]
// k = 3

// 👉 Output:
// 3   (subarray: [1,1,1])

let arr = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3];
let k = 3;
let max = 0;

for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for (let j = i; j < arr.length; j++) {
    sum += arr[j];

    if (sum === k) {
      let length = j - i + 1;
      if (length > max) {
        max = length;
      }
    }
  }
}
console.log(max);

