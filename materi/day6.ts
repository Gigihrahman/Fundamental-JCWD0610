//Cara menuliskan object
//cara 1
const object = {};
// cara 2
const object2 = new Object();

interface User {
  name: string;
  greet: () => void;
  greet2: () => void;
}

const user: User = {
  name: "Budi",
  greet() {
    console.log("Hello");
  },
  greet2: () => {
    console.log("hello");
  },
};

const person: any = {
  name: "joko",
  age: 20,
};
//add property
console.log(person);
person.hobby = "Mancing";
console.log(person);
person["address"] = "jogja";
console.log(person);
//delete property
console.log(person);
delete person.address;
console.log(person);

//accessing value
console.log(person.name);
console.log(person["age"]);
console.log(Object.keys(person));
console.log(Object.values(person));

// Imutable & Mutable
/*
Mutable: merujuk pada tipe data yang bisa diubah setelah dibuat.Biasanya adalah object dan aray dalam JS. seperti isi aray atau properti object

Immutable: merujuk pada tipe data yang tidak bisa diubah setelah dibuat. Ini umumnya berlaku pada tipe data primitive seperti string,number, boolean, null, undefined, dan symbol dalam JS. begitu nilai primiti ditetapkan, nilai tsb tidak bisa diubah.

*/

const count1: number = 4;
let count2: number = count1;
count2 = 10;
console.log(count1);
console.log(count2);

let orang1: any = { name: "Jack" };
let orang2: any = orang1;

//shallow copy
let orang3: any = { ...orang1 };

console.log(orang1);

orang2.age = 20;
console.log(orang1);
console.log(orang2);
orang3.ages = 30;
console.log(orang1);
console.log(orang3);

//SHALLOW COPY
//hanya mengopy luarnya kalau ada objek didalam objek masih refens
let original1 = {
  name: "Udin",
  address: {
    city: "Jakarta",
  },
};
let shallowCopy = { ...original1 };
shallowCopy.address.city = "bandung";

console.log(original1);
console.log(shallowCopy);

//DEEP COPY
let original2 = {
  name: "Udin",
  address: {
    city: "Jakarta",
  },
};
let deepCopy = structuredClone(original2);

deepCopy.address.city = "Bandung";
console.log(original2);
console.log(deepCopy);

//OPTIONAL CHAINING

let user2: any = {};
console.log(user.address);
console.log(user.address?.street);

//FOR IN========================================
const person2 = {
  name: "Aceng",
  age: 70,
};

for (const key in person2) {
  console.log(key);
  console.log(person2[key]);
}

//DESTRUCTURING ASSIGNMENT ====================
//mengeluarkan property dalam object menjadi sebuah variable

const animal = {
  name: "Joe",
  age: 2,
  weight: 10,
};

console.log(animal.name);
console.log(animal.age);
//bisa direname dengan cara variabel:rename seperti name:nm
const { name: nm, age, weight } = animal;

console.log(nm);
console.log(age);
console.log(weight);

//versi destruc array

const array = [10, 20];
console.log(array[0]);
console.log(array[1]);

const [a, b] = array;
console.log(a);
console.log(b);

//SPREAD OPERAOT=========================
//digunakan untuk copy isi object /menggabungkan object

const objectOne = { name: "jacky", password: "Admin123" };
const objectTwo = { email: "jacky@mail.com", name: "Pepeng" };

//bisa untuk mengganti value dari properti object dnengan cara seperti ini
const result = { ...objectOne, ...objectTwo, password: "hasshingg" };

console.log(result);

//THIS KEYWORD ===================
//mengakses property lain ke dalam object

const animal2 = {
  firstName: "udin",
  lastName: "blake",
  greet() {
    console.log(`hello ${this.firstName} ${this.lastName}`);
  },
};

animal2.greet();

//CLASS =============================
//template /cetakan untuk membuat object

//class declaration

class User2 {
  greeting() {
    console.log("hello World");
  }
  greeting2 = () => {
    console.log("Hello World");
  };
}

//Class Expression
const User3 = class {
  greeting() {
    console.log("hello World");
  }
  greeting2 = () => {
    console.log("Hello World");
  };
};

const human = new User2();
const human2 = new User2();

human.greeting2();
human2.greeting2();

//CONSTRUCTOR ========================
// method bawaan dari class yang akan dijalankan pertama kali saat membuat object baru menggunakan class

//Access Modifier ->

class Person {
  name: string;
  #email: string;
  constructor(name: string, email: string) {
    this.name = name;
    this.#email = email;
  }
  private showEmail() {
    return this.#email;
  }

  sendReminder() {
    const email = this.showEmail();
    return email;
  }
  greeting() {
    return `hello ${this.name}`;
  }
}
const orang = new Person("Tono", "lokeren@mail.com");
const orang4 = new Person("Udin", "udinaja@mail.com");

console.log(orang.sendReminder());
console.log(orang4.greeting());

//GETTER AND SETTER ==================================
// Getter (get) dan Setter (set) adalah metode khusus yang digunakan untuk membaca dan mengubah nilai properti secara lebih terkontrol

const orang5 = {
  firstName: "udin",
  lastName: "blake",

  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(value) {
    const split = value.split(" ");
    this.firstName = split[0];
    this.lastName = split[1];
  },

  register(value: string) {
    const split = value.split(" ");
    this.firstName = split[0];
    this.lastName = split[1];
  },

  showDetail() {
    return this.firstName + " " + this.lastName;
  },
};
console.log(orang5.fullName); //menggunakan getter

orang5.fullName = "joko hermawan"; //menggunakan setter

console.log(orang5.firstName);
console.log(orang5.lastName);

orang5.register("Ilham Kurniawan"); //menggunaan method

console.log(orang5.firstName);
console.log(orang5.lastName);
console.log(orang5.showDetail());

//INHERITENCE ==========================================
// pewarisan dari parent class ke child class
//property dan method dari parent class bisa di akses oleh child class

//tidak menggunakan konsep inheritence

class Employee {
  name: string;
  salary: number;
  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
  work() {
    console.log(`${this.name} is working`);
  }
}
class Manager {
  name: string;
  salary: number;
  department: string;
  constructor(name: string, salary: number, department: string) {
    this.name = name;
    this.salary = salary;
    this.department = department;
  }
  work() {
    console.log(`${this.name} is working`);
  }
}

/* 
  masalah dalam kode tanpa inheritance:
  -Duplikasi kode: name salary, dan metode work() harus ditulis ulang di Employee da Manager
  -Sulit dikelola jika ada perubahan di work(), kita harus mengedit di banyak tempat
*/

//menggunakan konsep inheritance

class Employee2 {
  name: string;
  salary: number;
  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
  work() {
    console.log(`${this.name} is working`);
  }
}

//harus ada extend dan super
class Manager2 extends Employee2 {
  department: string;

  constructor(name: string, salary: number, department: string) {
    super(name, salary); // memanggil constructor parent class (employee2)
    this.department = department;
  }
}

const manager = new Manager2("siti", 4300000, "TI");

console.log(manager);

manager.name; //property dari parent
manager.salary; //property dari parent
manager.department; //property dari child Manager2
manager.work(); //method dari parent

//INSTANCE OF ===============================
// Mengecek apakah sebuah objek memiliki hubungan ke class tertentu

class Animal {}

class Rabbit extends Animal {}
class Tree {}

const rabbit = new Rabbit();

console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Rabbit);
console.log(rabbit instanceof Tree);
