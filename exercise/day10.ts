function phoneNumber(phoneNums: any) {
  if (phoneNums.length !== 12 || !/^\d+$/.test(phoneNums)) {
    return "Invalid phone number.";
  }
  const formatter = `62${phoneNums.slice(1)}`;

  return `(${formatter.slice(0, 4)})-${formatter.slice(4, 8)}-${formatter.slice(
    8
  )}`;
}

console.log(phoneNumber("085211155555"));

class Product {
  nama: string;
  berat: number;
  price: number;
  stok: number;
  constructor(nama: string, berat: number, price: number, stok: number) {
    this.nama = nama;
    this.berat = berat;
    this.price = price;
    this.stok = stok;
  }
}

class Buku extends Product {
  penulis: string;
  penerbit: string;
  constructor(
    nama: string,
    berat: number,
    price: number,
    stok: number,
    penerbit: string,
    penulis: string
  ) {
    super(nama, berat, price, stok);
    this.penulis = penulis;
    this.penerbit = penerbit;
  }
}

class Pakaian extends Product {
  brandName: string;
  constructor(
    nama: string,
    brandName: string,
    berat: number,
    price: number,
    stok: number
  ) {
    super(nama, berat, price, stok);
    this.brandName = brandName;
  }
}

interface Cart {
  product: Product;
  qty: number;
}

class OnlineShop {
  private products: Product[] = [];
  private cart: Cart[] = [];

  addProduk(produk: Product) {
    const existingProduct = this.products.find((item) => {
      return item.nama === produk.nama;
    });

    if (existingProduct) {
      return `${produk.nama} sudah ada`;
    }
    this.products.push(produk);
  }
  showProduk() {
    return this.products;
  }
  addCart(produk: Product, qty: number) {
    const existingProduct = this.cart.find(
      (item) => item.product.nama === produk.nama
    );
    const stockChecker = this.products.find(
      (item) => item.nama === produk.nama
    );
    if (!stockChecker) return `Produk tidak ditemukan`;
    const totalQty = (existingProduct?.qty || 0) + qty;
    if (totalQty > stockChecker.stok)
      return ` Anda mengimput melebihi stock yang dimiliki, stock kami hanya: ${stockChecker.stok}`;

    if (existingProduct) {
      existingProduct.qty = totalQty;
      return `produk sudah ditambahkan ke keranjang anda`;
    }

    this.cart.push({ product: produk, qty });
    return `sudah ditambahkan ke keranjang anda`;
  }

  showCart() {
    return this.cart;
  }
  transaksi(userMoney: number, Jarak: number) {
    const priceProduct = this.cart.reduce((acc, item) => {
      return (acc += item.qty * item.product.price);
    }, 0);
    const ongkir = Jarak * 2_000;
    const total = priceProduct + ongkir;
    if (userMoney < total) return `Uang anda kurang`;
    const product = [...this.cart];
    this.products.forEach((produk) => {
      produk.stok -= this.cart.find(
        (val) => val.product.nama === produk.nama
      ).qty;
    });
    this.cart = [];
    return {
      produk: product,
      priceProduct: priceProduct,
      ongkir: ongkir,
      total: total,
      Kembalian: userMoney - total,
    };
  }
}

function randomNumber() {
  let time = Date.now();
  let random = Math.floor(Math.random() * 1000000000000);
  let combined = (time + random).toString().padStart(-12);
  return combined;
}
const pakaian = new Pakaian("kaos", "Erigo", 100, 100_000, 50);

const onlineshop = new OnlineShop();

onlineshop.addProduk(pakaian);
console.log(onlineshop.addCart(pakaian, 6));
console.log(onlineshop.transaksi(1_000_000, 20));
console.log(onlineshop.showCart());
console.log(onlineshop.showProduk());

onlineshop.transaksi(100, 100);
console.log(onlineshop);
