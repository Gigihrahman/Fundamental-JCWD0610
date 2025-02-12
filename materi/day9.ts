//STACK -> LIFO (Last in First Out)

class Stack {
  container: any[];
  maxSize: number;

  constructor() {
    this.container = [];
    this.maxSize = 10;
  }

  private isFull() {
    return this.container.length >= this.maxSize;
  }

  private isEmpty() {
    return this.container.length === 0;
  }

  push(element: any) {
    if (this.isFull()) {
      return "Container Full";
    }
    this.container.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Container Empty";
    }
    this.container.pop();
  }

  showContainer() {
    return this.container;
  }
}

const stack = new Stack();

console.log(stack.showContainer());
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.showContainer());
stack.pop();
stack.pop();
console.log(stack.showContainer());

//QUEUE -> FIFO(Firt In First Out)

class Queue {
  container: any[];

  constructor() {
    this.container = [];
  }

  enqueue(element: any) {
    this.container.push(element);
  }

  dequeue() {
    this.container.shift();
  }

  showContainer() {
    return this.container;
  }
}

const queue = new Queue();

console.log(queue.showContainer());
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.showContainer());
queue.dequeue();
console.log(queue.showContainer());
queue.dequeue();
console.log(queue.showContainer());

// Set -> only unique values

const fruits: string[] = ["banana", "apple", "mango", "apple"];

const mySet = new Set(fruits);
console.log(mySet);
//mengecek apakah didalam set ada value yang kita cari
console.log(mySet.has("mango"));

console.log(Array.from(mySet));
console.log([...mySet]);

const temp = [];
for (const value of mySet) {
  temp.push(value);
}

console.log(temp);

mySet.delete("mango");
console.log(mySet);

//hash table / map

const myMap = new Map();

myMap.set("name", "John");
myMap.set(123, 9000);
const objek = { address: "jakart" };
const fn = () => {};
myMap.set(fn, "ini adalah function");
myMap.set(objek, "ini adalah kehebatan");

console.log(myMap.get("name"));
console.log(myMap.get(123));
console.log(myMap.get(fn));
console.log(myMap.get(objek));

for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}

console.log(myMap.size);

console.log(myMap.has(123));
console.log(myMap.has(fn));
console.log(myMap.delete(fn));
console.log(myMap.has(fn));
