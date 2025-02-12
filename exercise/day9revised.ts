class Train {
  #container: string[];
  #mazSize: number;
  constructor(mazSize: number = 11) {
    this.#container = ["masinis"];
    this.#mazSize = mazSize;
  }
  private isFull() {
    return this.#container.length >= this.#mazSize;
  }
  private isEmpty() {
    return this.#container.length === 1;
  }
  passangerIn(name: string) {
    if (this.isFull()) {
      return "Penuh bang";
    }
    if (this.#container.includes(name)) return "Penumpang sudah didalam";
    this.#container.push(name);
    return "success";
  }

  passengerOut(name: string) {
    if (name === "masinis") {
      return "masinis stil in train";
    }
    if (this.isEmpty) {
      return "kosong";
    }

    const index = this.#container.indexOf(name);
    if (index === -1) return "penumpang tidak ditemukan";
    this.#container.splice(index, 1);
    return "success";
  }

  showPassenger() {
    return {
      passanger: this.#container.filter((val) => val !== "masinis"),
      remainingSeat: this.#mazSize - this.#container.length,
    };
  }
}

const taks = new Train();

taks.passangerIn("keren");
taks.passangerIn("hebat");
taks.passangerIn("kuat");
console.log(taks.passangerIn("kuat"));
console.log(taks.showPassenger());
