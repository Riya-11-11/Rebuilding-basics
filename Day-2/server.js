// PART 1: Warm-up (MANDATORY)

// Solve these WITHOUT help:

// Sum of all elements in array
// Count numbers greater than 50
// Find smallest number
// Find index of a given number
// .
// .
// .
// .
// .
// .
// Sum of all elements in array
// let arr = [90, 34, 21, 43, 22];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);
// .
// .
// .
// .
// .
// .
// .
// Count numbers greater than 50
// let arr=[34,56,51,32,90,23];
// let count = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]>50) {
//         count++;
//     }

// }
// console.log(count);
// .
// .
// .
// .
// .
// .
// .
// Find smallest number
// let arr = [34, 56, 51, 32, 90, 23];
// let smallest = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < smallest) {
//     smallest = arr[i];
//   }
// }
// console.log(smallest);
// .
// .
// .
// .
// .
// .
// .
// Find index of a given number
// let arr = [90, 34, 21, 43, 22];
// let findNum = 21;

// for (let i = 0; i < arr.length; i++) {
//   if (findNum === arr[i]) {
//     console.log(i);
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
// PART 2: Core Challenges
// 🔥 Q1: Find Second Largest (again)

// let arr = [23, 34, 31, 43, 21];
// let largest = -Infinity;
// let secLargest = -Infinity;
// for (let i = 0; i < arr.length; i++) {
//   let num = arr[i];
//   if (num > largest) {
//     secLargest = largest;
//     largest = num;
//   } else if (num < largest && num > secLargest) {
//     secLargest = num;
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

// 🔥 Q2: Find Second Smallest
// let arr = [23, 34, 31, 13, 52];
// let smallest = Infinity
// let secSmallest = Infinity;
// for (let i = 0; i < arr.length; i++) {
//     let num=arr[i];
//     if (num<smallest) {
//         secSmallest = smallest;
//         smallest=num;
//     }else if (num>smallest &&num<secSmallest) {
//         secSmallest=num
//     }
// }
// console.log(secSmallest);
// .
// .
// .
// .
// .
// .
//.

// 🔥 Q3: Check if Array is Sorted.
// [1, 2, 3, 4] → true
// [1, 3, 2, 4] → false
let arr = [1, 3, 6, 4, 7];
let isSorted = true;
for (let i = 0; i < arr.length-1; i++) {
  if (arr[i] > arr[i + 1]) {
    isSorted = false;
    break;
  }
}
console.log(isSorted);

// .
// .
// .
// .
// .
// .
// .

// 🔥 Q4: Reverse an Array without using reverse function
// let arr = [23, 34, 31, 13, 52];
// let reverseArr = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//   reverseArr.push(arr[i]);
// }
// console.log(reverseArr);
