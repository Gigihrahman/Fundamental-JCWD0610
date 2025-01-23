//versi JS
//const message = "hello world"
//versi typescript
// const message: string = "cekkkk";
//=============== string build in method
const nama = "BubBBdi";
const message = "Hello World";
const nama1 = "jack";
const nama2 = "joko";
const nama3 = "jamal";
console.log(nama.toLocaleLowerCase());
console.log(nama.toUpperCase());
console.log(nama.replace("B", "F"));
console.log(nama.replaceAll("B", "F"));
console.log(message.split(" "));
console.log(nama1.concat(nama2));
console.log(nama1 + nama2 + nama3);
console.log(nama3.slice(0, 2));
// ================= template literals /template string
const name4 = "Carli";
const message2 = `Welcome ${name4}`;
console.log(message2);
//======================= Number Build In Method
const angka1 = "20000";
console.log(Number(angka1));
console.log(typeof Number(angka1));
console.log(typeof parseInt(angka1));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
//======================= String Convertion
const angka = 20;
console.log(String(angka));
console.log(angka.toString());
console.log(String(123));
//====================== Boolean Conversion
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(-3));
console.log(Boolean(""));
console.log(Boolean("0"));
console.log(Boolean("false"));
//====================== Date
const date = new Date();
console.log(date);
//===================== Get Method
console.log(date.getFullYear());
//ditambahkan 1 supaya sesuai karena pada js bulan derawal dari 0
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(date.getTime());
//get time memiliki satuan milisecond
//===================== Set Method
date.setDate(20);
date.setMonth(2);
date.setFullYear(2040);
console.log(date);
//=================== Basic Operator
/*
    + => pertambahan
    - => pengurangan
    * => perkalian
    / => pembagian
    % => modulo(sisa bagi)
    ** => pangkat
*/
console.log(1 + 1);
console.log(2 - 1);
console.log(2 * 4);
console.log(4 / 2);
console.log(9 % 2);
console.log(3 ** 2);
//======================== modify in place
let n = 4;
n += 2;
console.log(n);
//======================== increment & decrement
let counter = 1;
counter++;
console.log(counter);
counter--;
console.log(counter);
//================== Postfix & prefix
let counter2 = 2;
// console.log(counter2++)
//postfix data akan ditampilkan baru dikalkulasi
console.log(++counter2);
//======================= comparison operator
/*
    ==
    membandingkan valuenya saja
    ===
    membandingkan value dan type daya
    <

    >
    <=
    >=
*/
// console.log(5 == 5)
// console.log(5 =="5) pengecekan value
// console.log(5 === "5") pengecekan value dan type data
console.log(5 < 2);
console.log(5 > 2);
console.log(5 <= 5);
console.log(5 >= 5);
export {};
