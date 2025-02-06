function checkTwoObject(obj1: {}, obj2: {}): boolean {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  console.log(keys1);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

let a = { a: 2 };
let b = { a: 2 };

console.log(checkTwoObject(a, b));
//2.

const intersection = (obj1: any, obj2: any) => {
  const duplicate = {};
  for (const key in obj1) {
    if (obj1[key] === obj2[key]) {
      duplicate[key] = obj1[key];
    }
  }
  return duplicate;
};
function intersectionObject(a: any, b: any) {
  let temp = {};
  for (const key in a) {
    if (b.hasOwnProperty(key)) {
      temp[key] = a[key];
    }
  }
  return temp;
}

let a1 = { a: 1, b: 2 };
let b1 = { a: 1, c: 3 };

console.log(intersection(a, b));

console.log(intersectionObject(a1, b1));

interface Student {
  name: string;
  email: string;
}
function mergeTwoObject(array1: Student[], array2: Student[]) {
  const temp = array2.filter(
    (items) =>
      !array1.some(
        (item) => item.name === items.name && item.email === items.email
      )
  );
  console.log(...array1, ...temp);

  const result = [...array1, ...temp];
  return result;
}

const array1 = [
  { name: "Student1", email: "student1@mail.com" },
  { name: "Student2", email: "student2@mail.com" },
];
const array2 = [
  { name: "Student1", email: "student1@mail.com" },
  { name: "Student3", email: "student3@mail.com" },
];

console.log(mergeTwoObject(array1, array2));
//no

const combineArray = (arr1: Student[], arr2: Student[]) => {
  const mergeArr = [...arr1, ...arr2];
  const temp: Student[] = [];

  for (let i = 0; i < mergeArr.length; i++) {
    const existingStudent = temp.find(
      (student) => student.email === mergeArr[i].email
    );

    if (!existingStudent) {
      temp.push(mergeArr[i]);
    }
  }
  return temp;
};

console.log(combineArray(array1, array2));

//4
function changed(array1: {}[]) {
  return array1.map((val) => {
    const swapped = {};
    for (let key in val) {
      let keyval = val[key];
      swapped[keyval] = key;
      return swapped;
    }
  });
}

console.log(
  changed([
    { name: "gigih", hari: 12 },
    { tanggal: 12, harus: "senin" },
  ])
);

const switched = (data: any[]) => {
  const result = [];
  data.forEach((item) => {
    const temp = {};
    for (const key in item) {
      temp[item[key]] = key;
    }
    result.push(temp);
  });
  return result;
};
console.log(switched([{ name: "handi", age: 21 }]));

function factorial(n: number) {
  if (n === 1 || n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));

const factor = (n: number) => {
  if (n === 1) {
    return { steps: [1], total: 1 };
  } else {
    const next = factor(n - 1);
    return {
      steps: [n, ...next.steps],
      total: n * next.total,
    };
  }
};

const { steps, total } = factor(5);
console.log(steps);
console.log(total);
console.log(steps.join(" x ") + " = " + total);

/* 
Proses Eksekusi Rekursi:
    1. factorial(5) dipanggil, tetapi untuk menghitung total, ia harus menunggu 
       factorial(4).
    2. factorial(4) dipanggil, tetapi ia harus menunggu factorial(3).
    3. factorial(3) dipanggil, tetapi ia harus menunggu factorial(2).
    4. factorial(2) dipanggil, tetapi ia harus menunggu factorial(1).
    5. Base case tercapai di factorial(1), sehingga dikembalikan 
       { steps: [1], total: 1 }.
    6. Sekarang factorial(2) bisa lanjut dengan hasil dari factorial(1), 
       menghitung { steps: [2, 1], total: 2 * 1 }, lalu mengembalikan hasilnya.
    7. factorial(3) lanjut dengan hasil dari factorial(2), menghitung 
       { steps: [3, 2, 1], total: 3 * 2 }, lalu mengembalikan hasilnya.
    8. factorial(4) lanjut dengan hasil dari factorial(3), menghitung 
       { steps: [4, 3, 2, 1], total: 4 * 6 }, lalu mengembalikan hasilnya.
    9. factorial(5) akhirnya mendapatkan hasil dari factorial(4), menghitung 
       { steps: [5, 4, 3, 2, 1], total: 5 * 24 }, lalu mengembalikan hasil akhir.

Kesimpulan:
    - Setiap pemanggilan rekursi harus menunggu hasil dari pemanggilan berikutnya 
      sebelum ia bisa melanjutkan perhitungannya.
    - Karena itu, kode dalam return pada else baru dieksekusi setelah pemanggilan 
      rekursif selesai dan mulai kembali ke atas dari base case.
    - Itulah sebabnya console.log(next) mencetak hasil dari rekursi terdalam ke luar, 
      bukan sebaliknya.
*/
