function phoneNumber(input: string) {
  if (input.length !== 12) {
    return "invalid phone number";
  }

  for (let i = 0; i < input.length; i++) {
    if (input[i] < "0" || input[i] > "9") {
      return "invalid phone number";
    }
  }

  input = "62" + input.slice(1);
  let template = "(xxxx)-xxxx-xxxxx";
  const splitInput = input.split("");

  splitInput.forEach((item) => {
    template = template.replace("x", item);
  });
  return template;
}

console.log(phoneNumber("081234567890"));

class Product {
  name: string;
  weight: number;
  price: number;
  stock: number;
  constructor(name: string, weight: number, price: number, stock: number) {
    this.name = name;
    this.weight = weight;
    this.price = price;
    this.stock = stock;
  }
}

class Buku extends Product {
  author: string;

  constructor(
    name: string,
    weight: number,
    price: number,
    stock: number,
    author: string
  ) {
    super(name, weight, price, stock);
    this.author = author;
  }
}

class Pakaian extends Product {
  size: string;
  color: string;
  constructor(
    name: string,
    weight: number,
    price: number,
    stock: number,
    size: string,
    color: string
  ) {
    super(name, weight, price, stock);
    this.size = size;
    this.color = color;
  }
}

class OnlineShop {
  products: Product[];
  cart: { qty: number; product: Product }[];

  constructor() {
    this.products = [];
    this.cart = [];
  }

  addProduct(product: Product) {
    //cek dulu produk sudah ada di dalam this.product atau belum
    const existingProduct = this.products.find((p) => p.name === product.name);
    //kalau sudah ada return "produk sudah ada di katalog"
    if (existingProduct) {
      return "product already exist";
    }

    //kalau misalnya gk ada masukin data produknya ke this.products
    this.products.push(product);
    //return tambah produk sukses
    return " Add product success";
  }

  addToCart(qty: number, product: Product) {
    //cek dulu produknya ada ga dikatalog
    const availableProduct = this.products.find((p) => p.name === product.name);
    //kalo misalnya gak ada return produk not found
    if (!availableProduct) {
      return "Produk not found";
    }

    //kalo misalnya ada di katalog, cek lagi produknya di cart sudah ada atau belum
    const cartItem = this.cart.find((c) => c.product.name === product.name);
    // kalo misalnya sudah ada di dalam cart
    if (cartItem) {
      //  cek lagi stok produknya
      if (availableProduct.stock >= qty) {
        //kalo cukup stok produknya di kurangi sama qty nya
        availableProduct.stock -= qty;
        //update quantity di cartnya
        cartItem.qty += qty;
        return " Add to Cart success";
      } else {
        return {
          message: " Stock tidak cukup",
          remainingStock: availableProduct.stock,
        };
      }
      //kalo misalnya stoknya tidak cukup, return stok tidak cukup
    } else {
      if (availableProduct.stock >= qty) {
        this.cart.push({ qty, product });
        availableProduct.stock -= qty;
        return "Add to cart success";
      } else {
        return {
          message: " Stock tidak cukup",
          remainingStock: availableProduct.stock,
        };
      }
    }
    //kalo misalnya produk belum ada didalam cart
    //  cek lagi stok produknya
    //kalo cukup stok produknya di kurangi sama qty nya
    //kalo misalnya stoknya tidak cukup, return stok tidak cukup
  }

  showCart() {
    let total: number = 0;
    this.cart.forEach((c) => {
      total += c.product.price * c.qty;
    });

    return {
      cart: this.cart,
      totalProduct: this.cart.length,
      totalPrice: total,
    };
  }
  showCatalog() {
    return {
      catalog: this.products,
      totalProduct: this.products.length,
    };
  }

  transaction(userMoney: number, distance: number) {
    //totalin dulu totalPrice dan totalWeight
    let totalPrice: number = 0;
    let totalWeight: number = 0;

    this.cart.forEach((c) => {
      totalPrice += c.product.price * c.qty;
      totalWeight += c.product.weight * c.qty;
    });

    let costPerKm: number;
    if (distance < 2) {
      costPerKm = 2000;
    } else if (distance >= 2 && distance <= 5) {
      costPerKm = 3000;
    } else {
      costPerKm = 5000;
    }
    const ongkir = distance * costPerKm;
    const total = totalPrice + ongkir;
    if (userMoney < total) {
      return "Uang gak cukup";
    }
    this.cart = [];
    return {
      message: " Transaksi sukses",
      total,
      ongkir,
    };
  }
}

const buku1 = new Buku("cara belajar", 0.4, 80_000, 10, "Aceng");

const pakaian1 = new Pakaian("Kaos Oblong", 0.2, 100_000, 8, "XL", "Red");

const tokopaedi = new OnlineShop();
console.log(tokopaedi.addProduct(buku1));

console.log(tokopaedi.addProduct(buku1));
console.log(tokopaedi.showCart());
console.log(tokopaedi.addToCart(2, buku1));
console.log(tokopaedi.addToCart(2, buku1));
console.log(tokopaedi.showCatalog());
console.log(tokopaedi.showCart());
console.log(tokopaedi.transaction(335_000, 5));
