// Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) beserta
// contoh penggunaannya(kecuali : split, reverse, join, foreach, map)

// a. sort() = sort index array
let nama = ["goblin", "joko", "anisa", "doni"];
nama.sort();
console.log(nama);

// b. pop() = menghilangkan index array paling terakhir
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
plants.pop();
console.log(plants);


// c. push() = menambahkan index array
const animals = ["pigs", "goats", "sheep"];
animals.push("dragon");
console.log(animals);

// d. concat() = menggabungkan array 
const array1 = ['makan', 'tidur', 'minum']
const array2 = ['main', 'pergi', 'menghilang'];
const newArray = array1.concat(array2);

console.log(newArray);

// e. length() = jumlah index array
const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
console.log(clothing.length);

// f. filter() = untuk menyaring sesuai function
const numbers = [1, 3, 4, 7, 10, 18, 20, 29];

const saring = numbers.filter(number => number > 9);

console.log(saring);

// const fruits = ["apple", "banana", "grapes", "mango", "orange"];
// function filterItems(arr, query) {
//     return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
//   }

// console.log(filterItems(fruits, "ap"));
// console.log(filterItems(fruits, "an"));

// g. find() = untuk mencari index dari array yang sesuai dari function
const arr1 = [5, 130, 8, 12, 44];

const found = arr1.find(element => element > 10);

console.log(found);

// h. from() = membentuk suatu array baru dari suatu array
console.log(Array.from('yosua'));

console.log(Array.from([1, 2, 3], x => x + x));

// i. splice() = mengubah array dengan menghilangkan, menambahkan, atau menggantikan
const kelasB = ['andika','andini','budi','jarjit', 'malih'];

kelasB.splice(3, 1, 'roni');
// kelasB.splice((index),(hapus index),('yang mau dimasukkan'))
console.log(kelasB);

// j. shift() = menghilangkan array index terdepan
const kelasA = ['cindy','rini','bardi','ipin', 'upin'];

kelasA.shift();

console.log(kelasA);

// k. slice() = memecah array index
const animalss = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animalss.slice(2));