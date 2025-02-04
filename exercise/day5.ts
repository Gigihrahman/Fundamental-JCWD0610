//1.
function Calculate(arr: number[]) {
  arr.sort((a, b) => a - b);
  const lowest: number = arr[0];
  const highest = arr[arr.length - 1];
  const sum = arr.reduce((a, b) => a + b);
  const average = sum / arr.length;
  return {
    lowest: lowest,
    highest: highest,
    average: average,
  };
  // return {
  //   lowest,
  //   highest,
  //   average,
  // };

  console.log(lowest, highest, average);
}

console.log(Calculate([12, 5, 23, 18, 4, 45, 32]));
function Calculate2(arr: number[]) {
  let lowest: number = arr[0];
  let highest: number = arr[0];
  let sum: number = 0;

  for (const num of arr) {
    if (num < lowest) lowest = num;
    if (num > highest) highest = num;
    sum += num;
  }
  const average = sum / arr.length;
  return { lowest, highest, average };
}

console.log(Calculate2([12, 5, 23, 18, 4, 45, 32]));

//2.
function Concatenation(input: string[]) {
  let temp: string = "";
  input.forEach((value, index) => {
    if (index < input.length - 1) {
      temp += value + ",";
    } else {
      temp += ` and ${value}`;
    }
  });
  return temp;
}

console.log(Concatenation(["apple", "banana", "cherry", "date"]));

function concatenation2(words: string[]) {
  if (words.length == 1) {
    return words[0];
  } else {
    const lastWord = words.pop();
    return words.join(", ") + " and " + lastWord;
  }
}
console.log(concatenation2(["apple", "banana", "cherry", "date"]));

//3
function GetSecondfSmallest(input: number[]) {
  if (input.length < 2) {
    return "minimum array length is 2";
  }
  let arrSorted = input.sort((a, b) => a - b);
  return arrSorted[1];
}
console.log(GetSecondfSmallest([5, 3, 1, 7, 2, 6]));
//4
function CalculateTwoArray(arr1: number[], arr2: number[]) {
  return arr1.map((value, index) => value + arr2[index]);
}

const array1: number[] = [1, 2, 3];
const array2: number[] = [3, 2, 1];
console.log(CalculateTwoArray(array1, array2));

//5
function addElement(arr: number[], input: number) {
  return !arr.includes(input) ? arr.push(input) : arr;
}

console.log(addElement([1, 2, 3, 4], 5));

//6.
function SumMixedArray(input: any[]) {
  return input.reduce((value, accumulator) =>
    typeof value === "number" ? value + accumulator : value
  );
}

console.log(SumMixedArray(["3", 1, "string", null, false, undefined, 2]));

//7.
function toArray(maxSize: number, ...many: number[]) {
  let temp = [];

  many.forEach((integers) => {
    if (temp.length < maxSize) {
      temp.push(integers);
    }
  });
  return temp;
}

console.log(toArray(5, 2, 3, 4, 5, 6, 7, 8));

//8.
function combineTwoArray(arr1: number[], arr2: number[]) {
  return arr1.concat(arr2);
}
console.log(combineTwoArray([1, 2, 3], [4, 5, 6]));

//9.
function findDuplicate(arr1: number[]) {
  const duplicates: number[] = [];
  //loop setiap elemen array
  for (let i = 0; i < arr1.length; i++) {
    //cek apakah angka ini sudah muncul sebelumnya dalam aray
    const currentNumber = arr1[i];
    let count: number = 0;
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] === currentNumber) {
        count++;
      }
    }
    //jika angka muncul lebih dari sekali tambahkan ke variable duplicates
    if (count > 1 && !duplicates.includes(currentNumber)) {
      duplicates.push(currentNumber);
    }
  }
  return duplicates;
}

console.log(findDuplicate([1, 1, 1, 2, 2, 2, 3, 4, 4, 5, 5]));
//10.
function diffrence(arr1: number[], arr2: number[]) {
  const res1 = arr1.filter((item) => !arr2.includes(item));
  const res2 = arr2.filter((item) => !arr1.includes(item));
  return res1.concat(res2).sort((a, b) => a - b);
}

console.log(diffrence([1, 2, 3, 4], [3, 4, 5, 6, 7]));

function findDifference(arr1: number[], arr2: number[]) {
  const diffrence: number[] = [];

  for (const item of arr1) {
    if (!arr2.includes(item) && !diffrence.includes(item)) {
      diffrence.push(item);
    }
  }

  for (const item of arr2) {
    if (!arr1.includes(item) && !diffrence.includes(item)) {
      diffrence.push(item);
    }
  }
  return diffrence;
}
console.log(findDifference([1, 2, 3, 4], [3, 4, 5, 6, 7]));

//11.
function PrimitiveCheck(arr1: any[]) {
  return arr1.filter((item) => {
    return typeof item !== "object" || item === null;
  });
}

console.log(PrimitiveCheck([1, [], undefined, {}, "string", {}, [], null]));
//12.
function Check(array: number[]) {
  const arrSorted = array.sort((a, b) => a - b);
  let valuesAlreadySeen = [];
  arrSorted.forEach((value, index) => {
    if (arrSorted[index + 1] === value) {
      valuesAlreadySeen.push(arrSorted[index]);
    }
  });
  let result: number = 0;
  let temp: number = 0;
  valuesAlreadySeen.forEach((values) => {
    if (values === temp) {
      result += values;
    } else {
      result += values * 2;
      temp = values;
    }
  });

  console.log(valuesAlreadySeen);

  return result;
}

console.log(Check([10, 20, 40, 10, 50, 30, 10, 60, 10, 20]));

console.log(Math.random());
const sumDuplicate = (arr: number[]) => {
  const seen: number[] = [];
  const duplicate: number[] = [];
  let result: number = 0;

  for (const value of arr) {
    if (seen.includes(value)) {
      if (!duplicate.includes(value)) {
        duplicate.push(value);
      }
    } else {
      seen.push(value);
    }
  }
  for (const value of arr) {
    if (duplicate.includes(value)) {
      result += value;
    }
  }
  console.log(seen);

  return result;
};

console.log(sumDuplicate([10, 20, 40, 10, 50, 30, 10, 60, 10, 20]));
//13.
function paperRock(input: string) {
  const player: string = input;
  const computerOptions = ["rock", "paper", "scissors"];
  const ComputerRandom = Math.floor(Math.random() * 3);
  const computerChoice = computerOptions[ComputerRandom];

  if (player === computerChoice) {
    return `seri ${computerChoice}`;
  } else if (player === "rock") {
    if (computerChoice === "paper") {
      return `You Lose ${computerChoice}`;
    } else {
      return `You Win ${computerChoice}`;
    }
  } else if (player === "paper") {
    if (computerChoice === " rock") {
      return `You Win ${computerChoice}`;
    } else {
      return `You Lose ${computerChoice}`;
    }
  } else {
    if (computerChoice === "rock") {
      return `You Lose ${computerChoice}`;
    } else {
      return `You Win ${computerChoice}`;
    }
  }
}

console.log(paperRock("rock"));

function rockPaperScissor(player: "rock" | "paper" | "scissor") {
  const choices: ("rock" | "paper" | "scissor")[] = [
    "rock",
    "paper",
    "scissor",
  ];
  const computer = choices[Math.floor(Math.random() * 2.9)];
  if (player === computer) {
    return { result: "Draw", computer, player };
  }
  if (
    (player === "rock" && computer === "scissor") ||
    (player === "scissor" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return { result: "Lose", computer, player };
  }

  return { result: "Lose", computer, player };
}

console.log(rockPaperScissor("paper"));
