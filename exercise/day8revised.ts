class Employee {
  name: string;
  gender: "male" | "female";
  workingHours: number;
  constructor(name: string, gender: "male" | "female") {
    this.name = name;
    this.gender = gender;
    this.workingHours = 0;
  }
  formatPrice(price: number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
  }
}

class FullTimeEmploye extends Employee {
  hourlyRate: number;
  extraHourlyRate: number;
  constructor(name: string, gender: "male" | "female") {
    super(name, gender);
    this.hourlyRate = 100_000;
    this.extraHourlyRate = 75_000;
  }
  addWorkingHours(hours: number) {
    this.workingHours += hours;
  }
  calculateSalary() {
    if (this.workingHours <= 6) {
      return {
        name: this.name,
        gender: this.gender,
        hours: this.workingHours,
        totalSalary: this.formatPrice(this.workingHours * this.hourlyRate),
      };
    } else {
      const regularHours = 6;
      const extraHours = this.workingHours - regularHours;

      return {
        name: this.name,
        gender: this.workingHours,
        hours: this.workingHours,
        totalSalaryRegular: this.formatPrice(regularHours * this.hourlyRate),
        totalSalaryExtra: this.formatPrice(extraHours * this.extraHourlyRate),
        totalSalry: this.formatPrice(
          regularHours * this.hourlyRate + extraHours * this.extraHourlyRate
        ),
      };
    }
  }
}
class PartTimeEmploye extends Employee {
  hourlyRate: number;
  extraHourlyRate: number;
  constructor(name: string, gender: "male" | "female") {
    super(name, gender);
    this.hourlyRate = 50_000;
    this.extraHourlyRate = 30_000;
  }
  addWorkingHours(hours: number) {
    this.workingHours += hours;
  }
  calculateSalary() {
    if (this.workingHours <= 6) {
      return {
        name: this.name,
        gender: this.gender,
        hours: this.workingHours,
        totalSalary: this.formatPrice(this.workingHours * this.hourlyRate),
      };
    } else {
      const regularHours = 6;
      const extraHours = this.workingHours - regularHours;

      return {
        name: this.name,
        gender: this.workingHours,
        hours: this.workingHours,
        totalSalaryRegular: this.formatPrice(regularHours * this.hourlyRate),
        totalSalaryExtra: this.formatPrice(extraHours * this.extraHourlyRate),
        totalSalry: this.formatPrice(
          regularHours * this.hourlyRate + extraHours * this.extraHourlyRate
        ),
      };
    }
  }
}

const wawan = new FullTimeEmploye("Wawan", "male");
wawan.addWorkingHours(50);
console.log(wawan.calculateSalary());

const hermawan = new PartTimeEmploye("Hermawanti", "female");

hermawan.addWorkingHours(4);
console.log(hermawan.calculateSalary());

//no.2
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
    this.health -= power;
  }

  useItem(item: { health: number; power: number }) {
    this.health += item.health;
    this.power += item.power;
  }
  showStatus() {
    return `${this.name} -> health:${this.health} |power: ${this.power}`;
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
    const health = Math.random() < 0.5 ? 0 : 10;
    const power = Math.random() < 0.5 ? 0 : 10;

    return {
      health,
      power,
    };
  }
  start() {
    while (this.player1.health > 0 && this.player2.health > 0) {
      console.log(this.player1.showStatus());
      console.log(this.player2.showStatus());
      const item1 = this.getRandomItem();
      const item2 = this.getRandomItem();
      this.player1.useItem(item1);
      this.player2.useItem(item2);
      this.player1.damage(this.player2.power);
      this.player2.damage(this.player1.power);
      console.log(this.player1.showStatus());
      console.log(this.player2.showStatus());
    }
    if (this.player1.health <= 0) {
      return `${this.player2.name} Win`;
    } else {
      return `${this.player1.name} Win`;
    }
  }
}

const aceng = new Player("Aceng");
const udin = new Player("Udin");

const game = new ShootingGame(aceng, udin);

console.log(game.start());
