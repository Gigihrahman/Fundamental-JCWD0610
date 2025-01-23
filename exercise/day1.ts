// 1. write a code to find area of rectangle.

let length: number = 5;
let width: number = 3;

let area: number = length * width;
console.log(
  "1.write a code to find area of rectangle. length: " +
    length +
    "width: " +
    width
);

console.log("area of rectangle: " + area);

//2.Write a code to find perimeter of rectangle.

let perimeter: number = 2 * (length + width);
console.log(
  "2.Write a code to find perimeter of rectangle. length: " +
    length +
    "Width: " +
    width
);

console.log("perimeter of rectangle: " + perimeter);

//3.Write a code to find diameter, circumference and area of a circle.
let radius: number = 5;

let diameter: number = 2 * radius;
console.log(
  `3.Write a code to find diameter, circumference and area of a circle. Radius : ${radius}`
);

console.log("diameter : " + diameter);
const pi: number = 22 / 7;

let circumference: number = pi * diameter;

console.log("circumference: " + circumference);

let areaCircle: number = pi * radius ** 2;
console.log("area of circle: " + areaCircle);

//4.Write a code to find angles of triangle if two angles are given.
let totalAngle: number = 180;
let anglea: number = 80;
let angleb: number = 65;

let unknownAngle: number = totalAngle - (anglea + angleb);
console.log(
  `4.Write a code to find angles of triangle if two angles are given. Angle a: ${anglea} b:${angleb}`
);

console.log("the unknown angle: " + unknownAngle);

//5.a.Write a code to convert days to years, months and days

let totalDay1: number = 400;
let year1: number = Math.floor(totalDay1 / 365);
let month1: number = Math.floor((totalDay1 % 365) / 30);
let day1: number = Math.floor((totalDay1 % 365) % 30);
console.log(
  `5.a.Write a code to convert days to years, months and days.a. Input total days: ${totalDay1}`
);

console.log(year1 + " year" + month1 + " month" + day1 + "day");
//5.b.Write a code to convert days to years, months and days
let totalDay2: number = 366;
let year2: number = Math.floor(totalDay2 / 365);

let month2: number = Math.floor((totalDay2 % 365) / 30);
let day2: number = Math.floor((totalDay2 % 365) % 30);
console.log(
  `5.b.Write a code to convert days to years, months and days.b. Input total days: ${totalDay2}`
);
console.log(year2 + " year" + month2 + " month" + day2 + "day");

// 6.Write a code to get difference between dates in days.
let dateInput1: Date = new Date("2022-01-20");
let dateInput2: Date = new Date("2022-11-12");
console.log(
  `6.Write a code to get difference between dates in days. Date1 : ${dateInput1.getFullYear()}- ${
    dateInput1.getMonth() + 1
  }- ${dateInput1.getDate()} Date2: ${dateInput2.getFullYear()}- ${
    dateInput2.getMonth() + 1
  } - ${dateInput1.getDate()}`
);
let difrenceDate: number = Math.abs(
  dateInput1.getTime() - dateInput2.getTime()
);
let difrenceDay: number = difrenceDate / (1000 * 3600 * 24);

console.log("get difference between dates in days: " + difrenceDay);
