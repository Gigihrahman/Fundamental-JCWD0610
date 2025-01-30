function Triangle(input: number) {
  // let message: string = "";

  for (let i = 1; i <= input; i++) {
    let temp = "";
    for (let j = 1; j <= i; j++) {
      // if (j === i) {
      //   message += j + " \n ";
      // } else {
      //   message += j;
      // }
      temp += j;
    }
    console.log(temp);
  }
  // return message;
}
Triangle(4);

function Triangle2(input: number) {
  let currentNumber: number = 1;
  for (let i = 1; i <= input; i++) {
    let row: string = "";
    for (let j = 1; j <= i; j++) {
      row += currentNumber < 10 ? "0" + currentNumber : currentNumber;
      currentNumber++;
    }
    console.log(row);
  }
}
Triangle2(5);

function FizzBazz(input: number) {
  let message: string = "";
  for (let i = 1; i <= input; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      message += "Fizz Buzz,";
    } else if (i % 5 === 0) {
      message += "Buzz, ";
    } else if (i % 3 === 0) {
      message += "Fizz,";
    } else {
      message += i + ",";
    }
  }
  console.log(message);

  return message;
}
FizzBazz(15);

function BmiChecker(Weight: number, Height: number) {
  const HeightMeter: number = Height / 100;
  let calculate: number = Weight / HeightMeter ** 2;
  let message: string = "";
  switch (true) {
    case calculate >= 39.9: {
      message = "Obesitas";
      break;
    }
    case calculate >= 30: {
      message = `Very Overwight`;
      break;
    }
    case calculate >= 25: {
      message = "OverWeight";
      break;
    }
    case calculate >= 18.5: {
      message = "Ideal";
      break;
    }
    default:
      message = "Less Weight";
  }
  return `calculate: ${calculate} ${message}`;
}
console.log(BmiChecker(90, 160));

function RemoveOdd(input: number[]) {
  return input.filter((item) => item % 2 === 0);
}
console.log(RemoveOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function Split(input: string, separator: string) {
  let result: string[] = [];
  let Current: string = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i] === separator) {
      result.push(Current);
      Current = "";
      continue;
    }
    Current += input[i];
  }

  result.push(Current);

  return result;
}
console.log(Split("hello world leren sekali", " "));
