class Employee {
  name: string;
  hourWoking: number[];
  constructor(name: string) {
    this.name = name;
    this.hourWoking = [];
  }
}

class Fulltime extends Employee {
  constructor(name: string) {
    super(name);
  }
  setWorkingHour(hours: number) {
    this.hourWoking.push(hours);
  }
  calculateSalary() {
    let totalSalary = 0;
    this.hourWoking.forEach((value) => {
      if (value > 6) {
        totalSalary += 600_000 + (value - 6) * 75_000;
      }
    });
    return totalSalary.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  }
}

class PartTime extends Employee {
  constructor(name: string) {
    super(name);
  }

  setWorkingHour(hours: number) {
    this.hourWoking.push(hours);
  }
  calculateSalary() {
    let totalSalary = 0;
    this.hourWoking.forEach((value) => {
      if (value > 6) {
        totalSalary += 600_000 + (value - 6) * 75_000;
      }
    });
    return totalSalary.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  }
}

const saya = new Fulltime("saya");
const handi = new PartTime("handi");

saya.setWorkingHour(9);
saya.setWorkingHour(9);
saya.setWorkingHour(12);
console.log(saya.calculateSalary());
//=============

interface Item {
  health: number;
  power: number;
}
class Player {
  name: string;
  health: number;
  power: number;

  constructor(name: string) {
    this.name = name;
    this.health = 100;
    this.power = 10;
  }
  damage(power: number) {
    this.health = Math.max(0, this.health - power);
  }
  useItem(random: Function) {
    const input: Item = random();
    const { health, power } = input;
    this.health += health;
    this.power += power;
  }
  showStatus() {
    console.log({
      name: this.name,
      status: {
        health: this.health,
        power: this.power,
      },
    });

    return {
      name: this.name,
      status: {
        health: this.health,
        power: this.power,
      },
    };
  }
}

class ShootingGame {
  player1: Player;
  player2: Player;

  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    const random = Math.round(Math.random());

    const hasil = [
      { health: 10, power: 0 },
      { health: 0, power: 10 },
    ];

    return hasil[random];
  }

  start() {
    while (true) {
      this.player1.showStatus();
      this.player2.showStatus();
      this.player1.useItem(this.getRandomItem);
      this.player2.useItem(this.getRandomItem);
      this.player1.damage(this.player2.power);
      this.player2.damage(this.player1.power);
      if (this.player1.health <= 0 || this.player2.health <= 0) {
        this.player1.showStatus();
        this.player2.showStatus();
        this.player1.health > 0
          ? console.log(`Winner is : ${this.player1.name}`)
          : console.log(`Winner is ${this.player2.name}`);
        break;
      }
    }
  }
}
//cekcecccvssasaf
const wawan = new Player("Wawan");
const dewa = new Player("dewa");

const game = new ShootingGame(wawan, dewa);
//
game.start();
