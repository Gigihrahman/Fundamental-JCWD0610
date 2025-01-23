//1.Write a code to check whether the number is odd or even

let number1: number = 25;
let number2: number = 2;

if (number1 % 2 == 0) {
  console.log(`${number1} is even number`);
} else {
  console.log(`${number1} is odd number`);
}

if (number2 % 2 == 0) {
  console.log("even number");
} else {
  console.log(`${number2} is odd number`);
}

//2. Write a code to check whether the number is prime number or not

let number3: number = 7;
let isPrime1: boolean = true;
let number4: number = 6;
let isPrime2: boolean = true;

if (number3 <= 1) {
  isPrime1 = false;
} else if (number3 == 2) {
  isPrime1 = true;
} else {
  for (let i = 2; i < number3; i++) {
    if (number3 % i === 0) {
      isPrime1 = false;
    }
  }
}

if (isPrime1) {
  console.log(`${number3} is a prime`);
} else {
  console.log(`${number3} is a not prime`);
}

if (number4 <= 1) {
  isPrime2 = false;
} else if (number4 == 2) {
  isPrime2 = true;
} else {
  for (let i = 2; i < number4; i++) {
    if (number4 % i === 0) {
      isPrime2 = false;
    }
  }
}

if (isPrime2) {
  console.log(`${number4} is a prime`);
} else {
  console.log(`${number4} is not a prime`);
}
// 3.1 Write a code to find the sum of the numbers 1 to N
let number5: number = 0;
let n1: number = 5;
for (let i = 1; i <= n1; i++) {
  number5 = number5 + i;
}

console.log(number5);

//3.2 Write a code to find the sum of the numbers 1 to N

let number6: number = 0;
let n2: number = 3;
for (let i = 0; i <= n2; i++) {
  number6 = number6 + i;
}

console.log(number6);

//4.1  Write a code to find factorial of a number

let number7: number = 0;

for (let i = 1; i <= 4; i++) {
  if (number7 === 0) {
    number7 = number7 + i;
    continue;
  }
  number7 = number7 * i;
}
console.log(number7);

//4.2  Write a code to find factorial of a number

let number8: number = 0;

for (let i = 0; i <= 6; i++) {
  if (number8 === 0) {
    number8 = number8 + i;
    continue;
  }
  number8 = number8 * i;
}

console.log(number8);

//fibonachi

let number9: number = 15;
let prev1: number = 1;
let prev2: number = 0;
let now: number = 0;

for (let i = 2; i <= number9; i++) {
  now = prev1 + prev2;
  prev2 = prev1;
  prev1 = now;
}

console.log(now);

// no 1.

const angka: number = 10;

const result = angka % 2 === 0 ? "genap" : "ganjil";
console.log(result);

//no.2

const num: number = 13;
let isPrime: boolean = true;

if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

console.log(isPrime);

//no.3
//cara 1
// const angka2: number = 5;
// const result2 = (angka2 * (angka2 + 1)) / 2;
// console.log(result2);

// const angka2: number = 5;
// let sum: number = 0;
// let message: string = "";

// for (let i = 1; i <= angka2; i++) {
//   sum += i;
//   if (i === angka2) {
//     message += i + "";
//   } else {
//     message += i + "+";
//   }
// }

// console.log(sum);
// console.log(`${message}=${sum}`);

//no.4

const num2: number = 4;
let sum: number = 1;
let message: string = "";

for (let i = num2; i >= 1; i--) {
  sum *= i;
  if (i === 1) {
    message += i + "";
  } else {
    message += i + " X ";
  }
}

console.log(sum);
console.log(`${message}=${sum}`);

//no.5

const n: number = 10;
let a: number = 0;
let b: number = 1;

for (let i = 0; i < n; i++) {
  let next: number = a + b;
  a = b;
  b = next;
}

console.log(a);
