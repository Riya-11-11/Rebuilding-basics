// 🧠 Step 1: No notes, no help (VERY IMPORTANT)

// Solve these from scratch:

// Reverse an array
// Find largest number in array
// Count even & odd numbers
// Remove duplicates from array

// 👉 If you get stuck:

// Think 15–20 min minimum
// Write logic in words
// THEN try code
// .
// .
// .
// .
// .
// .
// .

//Reverse an array
// let arr = [45, 34, 23, 76, 90];

// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }
// .
// .
// .
// .
// .
// .
// .
// .

// Find largest number in array
// let arr = [45, 34, 23, 76, 90];
// let largest = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     largest = arr[i];
//   }
// }
// console.log(largest);
// .
// .
// .
// .
// .
// .
// .
// .
// .

// Count even & odd numbers
// let arr = [20, 76, 43, 95, 45];
// let even = 0;
// let odd = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     even++;
//   } else odd++;
// }

// console.log("even", even);
// console.log("odd", odd);
// .
// .
// .
// .
// .
// .
// .
// .

// Remove duplicates from array
// let arr = [90, 90, 76, 42, 67, 76];
// let sortedArr = [];
// for (let i = 0; i < arr.length; i++) {
//   let isDuplicate = false;

//   for (let j = 0; j < i; j++) {
//     if (arr[i] === arr[j]) {
//       isDuplicate = true;
//       break;
//     }
//   }
//   if (!isDuplicate) {
//     sortedArr.push(arr[i]);
//   }
// }
// console.log(sortedArr);
// .
// .
// .
// .
// .
// .
// .

// 💻 Step 3: Mini Challenge (this matters)

// Build this:

// 👉 “Find Second Largest Number in Array”

let arr = [76, 43, 90, 20, 13];
let largest = arr[0];
let secLargest = arr[1];
for (let i = 2; i < arr.length; i++) {
  if (arr[i] > largest) {
    secLargest = largest;
    largest = arr[i];
  }
}
console.log(secLargest);
