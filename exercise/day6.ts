interface Student {
  name: string;
  email: string;
  age: number;
  score: Number;
}

const students: Student[] = [
  { name: "gunawan", email: "gunawan@mail.com", age: 20, score: 60 },
  { name: "Alex", email: "alex@mail.com", age: 31, score: 80 },
  { name: "Roman", email: "roman@mail.com", age: 43, score: 75 },
];

class CalculateStudent {
  students: Student[];

  constructor(students: Student[]) {
    this.students = students;
  }

  calculate() {
    let tempScore = [];
    let tempAge = [];

    const sortStudentByScore = this.students.sort((a, b) => a.score - b.score);
    console.log("sorted nih bang", sortStudentByScore);

    students.forEach((val) => {
      tempAge.push(val.age);
      tempScore.push(val.score);
    });

    // for (let student of students) {
    //   tempScore.push(Number(student.score));
    //   tempAge.push(student.age);
    // }
    // tempScore.sort((a, b) => a - b);
    // tempAge.sort((a, b) => a - b);
    console.log(Math.max(...tempAge), Math.min(...tempAge));

    console.log(tempAge);

    const Age = {
      max: Math.max(...tempAge),
      min: Math.min(...tempAge),
      average: tempAge.reduce((acc, item) => acc + item) / tempScore.length,
    };

    const Score = {
      max: Math.max(...tempScore),
      min: Math.min(...tempScore),
      average: tempScore.reduce((acc, item) => acc + item) / tempAge.length,
    };
    return { Score, Age };
  }
}

const calculateStudent = new CalculateStudent(students);

console.log(calculateStudent.calculate());

// class Product {
//   name: string;
//   price: number;
//   //cara cepat untuk definisi
//   //constructor(publce name:string, public price:number){}
//   constructor(name: string, price: number) {
//     this.name = name;
//     this.price = price;
//   }
// }

// interface Itransaction {
//   product: Product;
//   qty: number;
// }

// class Transaction {
//   //jika constructor tidak membutuhkan parameter
//   //private cart:Cart[]=[]
//   //private total:number=0
//   product: Itransaction[];

//   total: number;
//   constructor() {
//     this.product = [];
//     this.total = 0;
//   }

//   addTocart(product: Product, qty: number) {
//     const existingProduct = this.addTocart.find(
//       (item) => item.product.name === product.name
//     );

//     if (existingProduct) {
//       existingProduct.qty += qty;
//     } else {
//       this.product.push({ product, qty });
//     }

//     // let input: Itransaction = { product, qty };
//     // this.product.push(input);
//     // let temp: number = product.price * qty;
//     // console.log(temp);

//     // this.total = this.total + temp;
//   }
//   Show() {
//     return {
//       total: this.total,
//     };
//   }
//   Checkout(cash: number) {
//     if (this.product.length < 1)
//       return "Anda belum menaruh barang di keranjang";
//     if (cash < this.total) return `kurang bang uangnya`;

//     return {
//       message: `transaksi berhasil`,
//       kembalian: cash - this.total,
//       product: this.product,
//     };
//   }
// }
// //checkout membayar dengan cash apakah kurang atau tidak dan mengosongkan cart serta memberikan transaksi berhasil atau gagal

// const kursi = new Product("Kursi", 1000_000);
// const sepatu = new Product("Sepatu", 500_000);
// const transaksi = new Transaction();

// transaksi.addTocart(kursi, 15);
// transaksi.addTocart(kursi, 5);
// transaksi.addTocart(kursi, 5);
// transaksi.addTocart(sepatu, 5);
// console.log(transaksi.Show());

class Product {
  constructor(public name: string, public price: number) {}
}

interface Cart {
  product: Product;
  qty: number;
}

class Transaction {
  private cart: Cart[] = [];
  private total: number = 0;

  addToCart(product: Product, qty: number) {
    const existingProduct = this.cart.find(
      (item) => item.product.name === product.name
    );
    if (existingProduct) {
      existingProduct.qty += qty;
    } else {
      this.cart.push({ product, qty });
    }

    this.total += product.price * qty;
  }

  private formatPrice(price: number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
  }

  showCart() {
    return this.cart;
  }
  showTotal() {
    return this.total;
  }

  checkout(userMoney: number) {
    if (userMoney < this.total) {
      return "uang anda kurang";
    }

    const result = {
      total: this.formatPrice(this.total),
      message: "Transaks berhasil",
      kembalian: this.formatPrice(userMoney - this.total),
    };

    this.cart = [];
    this.total = 0;
    return result;
  }
}

const sepatu = new Product("sepatu hitam", 350_000);
const jam = new Product("Jam Tangan", 1250_000);

const transaksi = new Transaction();
transaksi.addToCart(sepatu, 5);
console.log(transaksi.showCart());
console.log(transaksi.showTotal());
transaksi.addToCart(sepatu, 5);
console.log(transaksi.showCart());
console.log(transaksi.showTotal());
transaksi.addToCart(jam, 8);
console.log(transaksi.checkout(20_000_000));
