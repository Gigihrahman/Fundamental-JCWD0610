class BankQueue {
  queue: string[];

  constructor() {
    this.queue = [];
  }

  private isEmpty() {
    return this.queue.length === 0;
  }

  enqueue(data: string) {
    this.queue.push(data);
  }

  dequeue() {
    if (this.isEmpty) return "data kosong";
    this.queue.shift();
  }
  size() {
    return this.queue.length;
  }
}

const bank = new BankQueue();

bank.enqueue("wawan");
bank.enqueue("hermawan");
bank.enqueue("ilham");
bank.enqueue("wahyu");
console.log(bank.size());
console.log(bank);
bank.dequeue();
console.log(bank.size());
class Train {
  queue: string[];

  constructor() {
    this.queue = ["masinis"];
  }
  private isFull() {
    return this.queue.length === 11;
  }
  private isEmpty() {
    return this.queue.length === 1;
  }
  showPassenger() {
    const passenger = [...this.queue.slice(1)];

    const avalaibleSeat = 10 - (this.queue.length - 1);
    return { passenger, avalaibleSeat };
  }
  passengerIn(name: string) {
    if (this.isFull()) {
      return "kereta penuh";
    } else if (this.queue.includes(name)) {
      return `penumpang atas nama ${name} sudah ada`;
    }
    this.queue.push(name);
  }
  passengerOut(name: string) {
    if (this.isEmpty()) {
      return "tidak ada data";
    } else if (name === "masinis") {
      return "masinis tidak bisa keluar";
    } else {
      console.log(name);
      const hapus = this.queue.indexOf(name);
      this.queue.splice(hapus, 1);
      return " removed passenger";

      // const result = this.queue.filter((val) => val !== name);
      // this.queue = result;
    }
  }
}

const train = new Train();
train.passengerIn("hendi");
train.passengerIn("gunadi");
train.passengerIn("roman");
console.log(train.passengerIn("roman"));

console.log(train.showPassenger());
console.log(train.passengerOut("roman"));
console.log(train.passengerOut("masinis"));

console.log(train.showPassenger());
