// function func(arr, callback, init) {
//   // Lakukan sesuatu dengan array
//   let acumulator = init;
//   for (let i = 0; i < arr.length; i++) {
//     acumulator = callback(acumulator, arr[i]);
//   }
//   return acumulator;
// }

// const myArray = [1, 2, [3, 4, [5, 6]]];

// const cek = func(
//   myArray,
//   (acc, item) => {
//     return acc + item;
//   },
//   0
// );

// console.log(cek);

// function flatten(arr, depth = 1) {
//   return arr.reduce((acc, item) => {
//     return acc.concat(
//       Array.isArray(item) && depth > 0 ? flatten(item, depth - 1) : [item]
//     );
//   }, []);
// }

// console.log(myArray.flat(0));

// function palindrom(x) {
//   const inputString = x.toString();
//   const reversed = inputString.split("").reverse().join("");

//   return inputString === reversed ? true : false;
// }

// console.log(palindrom(12344));

// var romanToInt = function (s) {
//   let input = s.split("");
//   let counter = 0;
//   let checker = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   for (let i = 0; i < input.length; i++) {
//     if (checker[input[i]] < checker[input[i + 1]]) {
//       counter += checker[input[i + 1]] - checker[input[i]];
//       i++;
//     } else {
//       counter += checker[input[i]];
//     }
//   }

//   return counter;
// };
// console.log(romanToInt("MCMXCIV"));

// function cek1(list1, list2) {
//   return list1.concat(list2).sort((a, b) => a - b);
// }

// console.log(cek1([1, 2, 3, 4], [0, 1, 3, 4, 5]));

// class ListNode {
//   constructor(val = 0, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }

// function mergeTwoLists(list1, list2) {
//   if (!list1) return list2;
//   if (!list2) return list1;

//   if (list1.val < list2.val) {
//     list1.next = mergeTwoLists(list1.next, list2);
//     return list1;
//   } else {
//     list2.next = mergeTwoLists(list1, list2.next);
//     return list2;
//   }
// }

// console.log(mergeTwoLists([1, 2, 3, 4], [2, 3, 4, 5, 6]));

// var removeDuplicates = function (arr1) {
//   const duplicates = [];

//   for (let i = 0; i < arr1.length; i++) {
//     const currentNumber = arr1[i];
//     let count = 0;
//     for (let j = 0; j < arr1.length; j++) {
//       if (arr1[j] === currentNumber) {
//         count++;
//       }
//     }

//     if (count > 1 && !duplicates.includes(currentNumber)) {
//       duplicates.push(currentNumber);
//     }
//   }
//   return duplicates;
// };

// console.log(removeDuplicates([1, 1, 2, 2]));

// var removeDuplicates = function (nums) {
//   let expected = [];

//   let temp = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== temp) {
//       expected.push(nums[i]);
//       temp = nums[i];
//     }
//   }
//   return expected;
// };

// console.log(removeDuplicates([1, 1, 2, 2, 3]));

// var searchInsert = function (nums, target) {
//   let result = nums.indexOf(target);

//   if (result < 0) {
//     for (let i = 0; i < nums.length; i++) {
//       if (target > nums[i] && target < nums[i + 1]) {
//         return (result = i + 1);
//       } else if(target< nums[i]){
//           return result=i
//       }else{
//         result = nums.length;
//       }
//     }
//   }

//   return result;
// };

// console.log(searchInsert([1, 3, 5, 6], 0));

// var plusOne = function (digits) {
//   let str = BigInt(digits.join(""));
//   console.log(str);
//   str += BigInt(1);
//   console.log(str);
//   const arr = str.toString().split("");
//   const cek = arr.map((value) => Number(value));
//   console.log(cek);

//   return cek;
// };

// plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);

// var addBinary = function (a, b) {
//   let num1 = BigInt("0b" + a);
//   let num2 = BigInt("0b" + b);
//   let sum = num1 + num2;
//   console.log(num1);
//   let toBiner = sum.toString(2);
//   let result = toBiner.toString();
//   console.log(result);
// };
// let a =
//   "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101";
// let b =
//   "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";

// addBinary(a, b);

// var merge = function (nums1, m, nums2, n) {
//   let slice1 = nums1.slice(0, m);
//   let slice2 = nums2.slice(0, n);

//   let result = slice1.concat(slice2).sort((a, b) => a - b);
//   return result;
// };

// let nums1 = [1, 2, 3, 0, 0, 0];
// let m = 3;
// let nums2 = [2, 5, 6];
// let n = 3;
// console.log(merge(nums1, m, nums2, n));

// var isValid = function (s) {
//   let temp = true;
//   let result = s.split("").sort();
//   const mapping = {
//     ")": "(",
//     "}": "{",
//     "]": "[",
//   };
//   for (let i = 0; i < result.length; i += 2) {
//     if (result[i] === mapping[result[i + 1]]) {
//       temp = true;
//     } else {
//       temp = false;
//     }
//   }
//   return temp
// };

// var isValid = function (s) {
//   const stack = [];
//   const mapping = {
//     ")": "(",
//     "}": "{",
//     "]": "[",
//   };

//   for (let char of s) {
//     if (char in mapping) {
//       const topElement = stack.length === 0 ? "#" : stack.pop();

//       if (mapping[char] !== topElement) {
//         return false;
//       }
//     } else {
//       stack.push(char);
//     }
//   }

//   return stack.length === 0;
// };
// console.log(isValid("([)]"));

let obj1 = {
  id: 2,
  x: 2,
  y: 3,
  z: 10,
};

let obj2 = {
  id: 2,
  x: 5,
  y: 10,
  h: 12,
  p: 13,
};

console.log({ ...obj1, ...obj2 });
