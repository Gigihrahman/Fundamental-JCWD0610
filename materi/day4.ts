//array
// const arr = []; // cara 1
// const arr2 = new Array(); //cara 2

const arr: string[] = ["A", "B", "C", "D"];
const arr2: string[] = new Array("A", "B", "C", "D");

const arr3: number[] = [1, 2, 3, 4];
const arr4: number[] = new Array(1, 2, 3, 4);

console.log(arr);
console.log(arr[2]);
arr[3] = "E";
console.log(arr);

//array of object

//interface harus dengan pascal case
//Singular
// interface Student {
//   name: string;
//   email: string;
// }

type Address = {
  street: string;
  city: string;
};
type Student = {
  name: string;
  email: string;
  hobby?: string;
  address?: Address;
};
// tambah tanda tanya pada properti untuk membuat property tersebut menjadi opsional seperti hobby dan address
const student: Student[] = [
  {
    name: "budi",
    email: "budi@mail.com",
    hobby: "gaming",
    address: {
      city: "jogja",
      street: "jl nin aja dulu",
    },
  },
  { name: "Joko", email: "jokooooo@mail.com" },
  {
    name: "Siti",
    email: "siti@mail.com",
  },
];
console.log(student.findIndex((nam) => nam.name === "Siti"));

//=============== For Of

const fruits: string[] = ["Apple", "Banana", "Orang"];

for (let fruit of fruits) {
  console.log(fruit);
}

const numbers: number[] = [1, 2, 3, 4, 5, 6];
let calculate: number = 0;
for (const number of numbers) {
  calculate += number;
}
console.log(calculate);

//============ Function
///1. function declaration

/* 
  function namaFunction(parameter){
  //logic
  };

*/

function square(angka: number): number {
  return angka * angka;
}

const perkalian1 = square(4);
const perkalian2 = square(5);
console.log(perkalian1);
console.log(perkalian2);

//2. function expression
const square2 = function (angka: number) {
  return angka * angka;
};

const perkalian3 = square2(4);
const perkalian4 = square2(5);

console.log(perkalian3);
console.log(perkalian4);

//================== Function Scope
// variable yang didefine di dalam function hanya bisa diakases didalam function tersebut

function greeting() {
  const hello = "hello";
  console.log(hello); //ini bisa dipanggil karena masih dalam scope
}

//console.log(hello) ini gk bakalan bisa dipanggil karena sudah diluar scope

greeting();

//=================== Paremeter & Argumen
//parameter-> variable yang mewakili value dari argument yang dimasukkan
//argument-> value yang dimasukkan saat panggilan function

//  name pada function ini adalah parameter
function greeting2(name: string) {
  const hello = "hello";
  return hello + " " + name;
}

//  "budi" adalah argument
console.log(greeting2("Budi"));
console.log(greeting2("Siti"));
console.log(greeting2("Joko"));

//===================== Default Parameter

function multiply(a: number, b: number = 2) {
  console.log(a);
  console.log(b);

  return a * b;
}

console.log(multiply(5, 7));
console.log(multiply(5));

//================ Rest Parameter

function myFunc(a: number, b: number, ...manyMore: number[]) {
  console.log(a);
  console.log(b);
  console.log(manyMore);
}

myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9);

//=================== Nested Function
// fungsi yang berada di dalam fungsi
// inner function bisa akses parameter dari outer function
//outer function tidak bisa diakses parameter dari inner function

//outer function
function getMessage(firstName: string) {
  //inner function 1
  function sayHello() {
    return "Hello " + firstName + ",";
  }
  //innner function 2
  function welcomeMessage() {
    return "Welcome to Purwadhika";
  }
  return sayHello() + " " + welcomeMessage();
}

console.log(getMessage("Budi"));

//======================= Closure
//inner function selalu mempunyai akses ke variable dan parameter dari outer function bahkan setelah function tsb di return

function greeting3(name: string) {
  const defaultMessage: string = "Hello";

  return function () {
    return defaultMessage + " " + name;
  };
}

let result = greeting3("jack");
console.log(result());

//======================= Recursive
// fungsi yang memanggil dirinya sendiri

function countDown(number: number) {
  console.log(number);
  let nextNumber = number - 1;
  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}
countDown(10);

//========================== Arrow Funtion
//shortcut untuk menuliskan function expression

//contoh function expression
const square3 = function (number: number) {
  return number * number;
};

//syntax -> ()=>{}
//contoh jika diubahke arraow function

const square4 = (number: number) => {
  return number * number;
};

//kalo misalnya cuman 1 line bisa disingkat kaya gini(tidak udah direturn karena satu line)
const square5 = (number: number) => number * number;

//==================================== Array Built in Method
//Join ->menggabungkan value yang ada dalam array ke dalam bentuk string

const words: string[] = ["hello", "world"];
console.log(words.join(" "));

//POP -> menghilangkan value paling akhir pada array

const words2: string[] = ["test", "hello", "world"];
console.log(words2);
words2.pop();
console.log(words2);

//shift -> menghilangkan value paling depan dalam array

const words3: string[] = ["test", "hello", "world"];
words3.shift();
console.log(words3);

//unshift -> menambahkan value ke urutan paling depan array

const words5: string[] = ["Hello", "World"];
words5.unshift("Test");
console.log(words5);

//PUSH-> menambahkan data baru ke paling akhir array;

const words6: string[] = ["hello", "world"];
words6.push("purwadhika");
console.log(words6);

//concat -> menggabungkan 2/lebih array menjadi 1

const array1: string[] = ["hello"];
const array2: string[] = ["world"];
const array3: string[] = ["halo"];
const array4: string[] = ["dunia"];

console.log(array1.concat(array2).concat(array3).concat(array4));

//another option
const mergerArr = [...array1, ...array2, ...array3, ...array4];
console.log(mergerArr);

//SPLICE -> untuk emnghapus, mengganti, atau menambahkan vale pada sebuah array
//rumus-> splice(startIndex,brpYgMauDidelete, item )

const months: string[] = ["jan", "march", "april", "june"];
months.splice(1, 0, "feb");
console.log(months);

months.splice(4, 1);
console.log(months);

months.splice(3, 1, "may");
console.log(months);

//SLICE -> meretur array baru  berdasarkan start index dan end index
//rumus-> slice(statrindex, endIndex)

const fruits1: string[] = ["Apple", "Banana", "Orange", "Mango", "Lemon"];

console.log(fruits1.slice(1, 4)); //dari depan
console.log(fruits1.slice(-4, -1)); //dari belakang

//INDEXOF -> mencari index dari value yang kita search, kali tidak ditemukan akan mereturn -1
const fruits2: string[] = ["Apple", "Banana", "Orange", "Mango", "Lemon"];
console.log(fruits2.indexOf("Lemon"));
console.log(fruits2.indexOf("testing"));

//SORT -> mengurutkan isi array berupa string atau number
//versi string

const fruits3: string[] = ["Mango", , "Lemon", "Apple", "Banana", "Orange"];
fruits3.sort();
console.log(fruits3);

const point: number[] = [3, 2, 10, 4, 5];
point.sort();
console.log(point);

const point2: number[] = [3, 2, 10, 5, 6];
point2.sort((a, b) => b - a);
//reverse
console.log(point2);

//REVERSE -> membalikka urutan element dalam array
const point3: number[] = [3, 2, 10, 5, 6];
point3.reverse();
console.log(point3);

//MAP -> Melakukan looping pada aray dan akan mereturn array baru
const points4: number[] = [1, 2, 3, 4, 5, 6];
const result2 = points4.map((point, index) => {
  return point + index;
  // return point *2;
});

console.log(result2);

//FOREACH-> melakukan looping pada array tapi tidak me-return array baru

const fruits4: string[] = [
  "Mango",
  "Apple",
  "Lemon",
  "Apple",
  "Banana",
  "Orange",
];
let container = "";

const result3 = fruits4.forEach((fruit, index) => {
  console.log(fruit);
  console.log(index);
  container += fruit + " ";
});

console.log(result3);
console.log(container);

let tes1 = "cekkk";
let tes2 = "gasss";
console.log(tes1.localeCompare(tes2));

//FILTER -> melakukan looping pada array dan menghasilkan array baru berdasarkan kondisi pada return function

const ages: number[] = [31, 15, 40, 22, 12];
const result4 = ages.filter((age) => {
  return age > 17;
});
console.log(result4);

//FIND - > mencari value yang ditemukan pertama kali dalam array
const ages2: number[] = [31, 15, 40, 22, 12];

const result5 = ages2.find((age) => age > 14);
// const result5 = ages2.find((age) => {
// return age === 12});

console.log(result5);

const ages3: number[] = [9, 12, 31, 15, 40, 22, 12];
const result6 = ages3.findIndex((age) => {
  return age > 12;
});
console.log(result6);

//REDUCE -> biasa digunakan untuk melakukan operasi aritmatika pada tiap isi array

const numbers1: number[] = [200, 50, 100, 50];

const result7 = numbers1.reduce((a, b) => a + b);
console.log(result7);

//INCLUDES -> mengecek value pada array ada apa tidak, hasil returnnya adalah booleam

const fruits5: string[] = [
  "Mango",
  "Apple",
  "Lemon",
  "Apple",
  "Banana",
  "Orange",
];
console.log(fruits5.includes("Apple"));
console.log(fruits5.includes("Gak ada"));
