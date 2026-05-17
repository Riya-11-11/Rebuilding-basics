// ⚡ Bonus (if you’re serious)

// 👉 Rotate array by 1 position
// [1, 2, 3, 4] → [4, 1, 2, 3]

// let arr = [1,2,3,4,5];
// let result = [];
// result.push(arr[arr.length-1])

// for (let i = 0; i <arr.length-1; i++) {
//    result.push(arr[i])
// }

// console.log(result);
// .
// .
// .
// .
// .
// .
// .
// .
// 💥 CORE SET (Must Do)
// 🔥 Q1: Move negatives to one side
// [1, -2, 3, -4, 5] → [-2, -4, 1, 3, 5]
// let arr = [1, -2, 3, -4, 5];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     result.push(arr[i]);
//   }
// }
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] >= 0) {
//     result.push(arr[i]);
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

// 🔥 Q2: Find duplicate element (only one duplicate exists)
// [1, 3, 4, 2, 3] → 3

// let arr = [1, 3, 4, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//   let isDuplicate = false;
//   for (let j = 0; j < i; j++) {
//     if (arr[i] == arr[j]) {
//       isDuplicate = true;
//     }
//   }
//   if (isDuplicate) {
//     console.log(arr[i]);
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
// Q3: Count frequency (again, but better way)

let arr = [1, 2, 4, 2, 3, 4, 3];

for (let i = 0; i < arr.length; i++) {
  let alreadyCounted = false;
  for (let j = 0; j < i; j++) {
    if (arr[i] === arr[j]) {
      alreadyCounted = true;
      break;
    }
  }
  if (alreadyCounted) continue;
  let freq = 0;
  for (let k = 0; k < arr.length; k++) {
    if (arr[i] === arr[k]) {
      freq++;
    }
  }
  console.log(arr[i], freq);
}
// .
// .
// .
// .
// .
// .
// .

// 🔥 Q4: Find first non-repeating element
// [1, 2, 2, 3, 1, 4] → 3

// let arr = [1, 2, 2, 3, 1, 4];
// for (let i = 0; i < arr.length; i++) {
//   let count = 0;
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       count++;
//     }
//   }
//   if (count == 1) {
//     console.log(arr[i]);
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

// 🧠 THINKING LEVEL (Important)
// 🔥 Q5: Check if two arrays are equal
// [1, 2, 3] & [1, 2, 3] → true
// [1, 2, 3] & [3, 2, 1] → false

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];
// let isEqual = true;
// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] !== arr2[i]) {
//     isEqual = false;
//     break;
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

// 🔥 Q6: Find intersection of two arrays
// [1, 2, 3] & [2, 3, 4] → [2, 3]

// let arr1 = [1, 2, 3];
// let arr2 = [2, 3, 4];
// let intersect = [];

// for (let i = 0; i < arr1.length; i++) {
//   for (let j = 0; j < arr2.length; j++) {
//     if (arr1[i] === arr2[j]) {
//       intersect.push(arr1[i]);
//     }
//   }
// }
// console.log(intersect);
// .
// .
// .
// .
// .
// .
// .
// .

// ⚡ BONUS (Only if you push yourself)
// 🔥 Q7: Rotate array by K positions
// [1,2,3,4,5], k=2 → [4,5,1,2,3]

// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// let result = [];
// for (let i = arr.length - k; i < arr.length; i++) {
//   result.push(arr[i]);
// }

// for (let i = 0; i < arr.length - k; i++) {
//   result.push(arr[i]);
// }
// console.log(result);
