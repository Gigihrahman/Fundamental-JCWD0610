class Queue {
  private orders: string[];

  constructor() {
    this.orders = [];
  }

  addOrder(input: string) {
    this.orders.push(input);
  }
  showOrder() {
    return this.orders;
  }

  async processQueu() {
    for (let i = 0; i < this.orders.length; i++) {
      const order = this.orders[i];
      const timProcess = Math.round(Math.random() * 10000);
      const response = await this.proccesOrder(order, timProcess);
      console.log(response);
    }
  }

  private proccesOrder(order: string, time: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`queue ${this.orders.indexOf(order)} done in ${time}`);
      }, time);
    });
  }
}

const queue = new Queue();

// Menambahkan beberapa pesanan contoh ke antrian
queue.addOrder("Order 1: Burger");
queue.addOrder("Order 2: Pizza");
queue.addOrder("Order 3: Pasta");
queue.addOrder("Order 4: Salad");

// Mencetak antrian sebelum pemrosesan

console.log(queue.showOrder());

// Memproses antrian
queue.processQueu().then(() => {
  console.log("All orders processed.");
});
