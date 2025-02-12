function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve("data diambil");
      } else {
        reject("Terjadi kesalahan");
      }
    }, 2000);
  });
}
// fetchData()
//   .then((response) => {
//     // Make sure to check the response before logging it
//     console.log(response);
//     return response;
//   })
//   .then((val) => console.log(val))
//   .catch((error) => {
//     // Log the error with some context
//     console.error("Error fetching data:", error);
//   });

//menggunakan async await -> lebih simple
//async function getData(){}
// const getDataUser = async () => {
//   try {
//     const data = await fetchData();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

const getData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(response.ok);

    if (!response.ok) {
      throw new Error("salah bos");
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getData();

const getData2 = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      console.log(users);
    })
    .catch((error) => {
      console.log(error);
    });
};

getData2();

//JSOn_.javascript object notation

const user = {
  name: "wawan",
  age: 32,
};

const userJSON = JSON.stringify(user);
console.log(userJSON);

const parseJson = JSON.parse(userJSON);
console.log(parseJson);

//hoisting -> var & func declaration

/*
 hoisting adalah mekanisme di javascript di mana deklarasi variable dan fungsi diangkat (hoisted ) ke atas dari cakupan (scope) sebelum kode dieksekusi

*/
// tesFuncExpression()// ini gak bakalan bisa karena tidak termasuk dalam hoisting
const tesFuncExpression = () => {};

testFuncDeclaration(); // ini bisa karena function declaration
function testFuncDeclaration() {}
