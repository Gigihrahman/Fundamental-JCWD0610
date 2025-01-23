//========================== If Statement

const age: number = 20;

if (age >= 17) {
  console.log("anda bisa buat sim");
}

//================= else statement
const age1: number = 10;

if (age1 >= 17) {
  console.log("anda bisa buat sim");
} else {
  console.log("anda belum bisa buat sim");
}
//================= else if statement
const grade: string = "A";
if (grade === "A") {
  console.log("Nilai bagus");
} else if (grade === "B") {
  console.log("Nilai lumayan");
} else if (grade === "C") {
  console.log("Nilai buruk");
} else {
  console.log("Nilai tidak diketahui");
}

const day: string = "senin";

switch (day) {
  case "senin":
    console.log("hari ini senin");
    break;
  case "selasa":
    console.log("hari selasa");
    break;
  case "rabu":
    console.log("hari rabu");
    break;
  default:
    console.log("salah input bang");

    break;
}

//==================== Logikal Operator
//&& -> and
// || -> or
//! -> not
//And -> harus keduanya bernilai true agar menghasilkan true
const umur: number = 15;
const punyaSIM: boolean = true;

//true    true   -> true
if (umur >= 17 && punyaSIM === true) {
  console.log("boleh bawa kendaraan");
} else {
  console.log("tidak boleh bawa kendaraan");
}

//OR -> kalau salah 1 ada yang nilainya true, akan menghasilkan nilai true

const car: string = "mercy";

if (car === "mercy" || car === "bmw") {
  console.log("mobil jerman");
} else {
  console.log("mobil jepang");
}

//NOT -> membalikkan nilai boolean
const isSunny: boolean = false;
const isRaining: boolean = !isSunny;

console.log(isSunny);
console.log(isRaining);

const value: number = 0;
const result: string | number = "909090";

//========== Ternary Operator

const str1: string = "typescript";

if (str1 === "javscript") {
  console.log("this is javascript");
} else {
  console.log("not javascript");
}

console.log(str1 === "javacript" ? "javascript" : "not javascript");

console.log(
  str1 === "javacript"
    ? "javascript"
    : str1 === "typescript"
    ? "typescript"
    : "not javascript"
);

//=============== Loop Statement
// rangkaian intruksi yang dilakukan berulangkali hingga kondisinya tidak terpenuhi

//type: for loop, while loop, dan do while loop
//statement 1 : menginisialisasikan variable dari looping itu sendiri
//statement 2: mendefine kondisi dari looping tersebut
// statement 3 : kode yang dieksekusi diakhr setiap iterasi

/*
  for (statement1; statement2; statement3){
  code block yang akan diulang}

*/

for (let i = 0; i < 6; i++) {
  //pada for loop menggunakan postfix jarang menggunakan prefix
  console.log("hello world");
}

//while loop
let i: number = 0;

while (i < 10) {
  console.log("hello world");
  i++;
}

let count: number = 1;

do {
  console.log("hello world ke-" + count);
  count++;
} while (count <= 5);

//=================== Break
//untuk menghentikan loop

let sum: number = 0;

while (true) {
  console.log("Sum: " + sum);
  if (sum >= 5) {
    break;
  }
  sum++;
}

//====================== Continue
//melakukan skip pada looping

for (let i = 0; i < 5; i++) {
  if (i == 2) continue;
  console.log(i);
}
