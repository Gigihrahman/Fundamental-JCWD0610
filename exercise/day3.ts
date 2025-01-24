const input: number = 9;
const limit: number = 10;

for (let i = 0; i < limit; i++) {
  console.log(`${input} X ${i}`);
}
//2.Write a code to check whether a string is a palindrome or not.
let str: string = "madam";
let strReversed: string = "";

for (let i = str.length; i > 0; i--) {
  strReversed += str.charAt(i - 1);
}
let palindrome = str === strReversed ? "palindrome" : "Not palindrom";

console.log(palindrome);
//3.Write a code to convert centimeter to kilometer.
const centimeter: number = 100000;
let kilometer: number = centimeter / 100000;
console.log(`${kilometer} km`);
//4.Write a code to format number as currency (IDR)
let number: number = 1000;
let idr: string = ` ${number.toLocaleString("id-ID", {
  style: "currency",
  currency: "IDR",
})}`;
console.log(idr);

//5.Write a code to remove the first occurrence of a given “search string” from a string
let strHello: string = "Hello world";
let removedStr = strHello.replace("ell", "");
console.log(removedStr);

//6.Write a code to capitalize the first letter of each word in a string
let strHelloW: string = "hello world";
var splitStr = strHelloW.toLowerCase().split(" ");
for (var i = 0; i < splitStr.length; i++) {
  splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
}

console.log(splitStr.join(" "));

//7.Write a code to swap the case of each character from string

let randStr: string = "The QuiCk BrOwN Fox";
let newLetters: string = "";

// for (let i = 0; i < randStr.length; i++) {
//   if (randStr[i] == randStr[i].toLocaleUpperCase()) {
//     newLetters += randStr[i].toLowerCase();
//   } else {
//     newLetters += randStr[i].toUpperCase();
//   }
// }

for (let i = 0; i < randStr.length; i++) {
  if (randStr.charAt(i) == randStr.charAt(i).toLocaleUpperCase()) {
    newLetters += randStr.charAt(i).toLowerCase();
  } else {
    newLetters += randStr.charAt(i).toUpperCase();
  }
}

console.log(newLetters);

//8.Write a code to find the largest of two given integers
let number1: number = 42;
let number2: number = 27;

let result = Math.max(number1, number2);

console.log(result);

// 9.Write a conditional statement to sort three numbers
let number3: number = 18;

let max = Math.max(number1, number2, number3);
let min = Math.min(number1, number2, number3);
let mid = number1 + number2 + number3 - max - min;

console.log(`${min},${mid}, ${max}`);

//10.Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data

let inputting = 10;

if (typeof inputting === "string") {
  console.log(1);
} else if (typeof inputting === "number") {
  console.log(2);
} else {
  console.log(3);
}

//11.Write a code to change every letter a into * from a string of input
let randStr2: string = "An apple a day keeps the doctor away";
console.log(randStr2.toLowerCase().replaceAll("a", "*"));

console.log(randStr2.replaceAll("a", "*").replaceAll("A", "*"));
const lowerRandstr2: string = randStr2.toLowerCase();
let replacedword: string = "a";
let modifiedString: string = "";

for (let i = 0; i < lowerRandstr2.length; i++) {
  if (lowerRandstr2[i] === replacedword) {
    modifiedString += "*";
  } else {
    modifiedString += lowerRandstr2[i];
  }
}
console.log(modifiedString);
