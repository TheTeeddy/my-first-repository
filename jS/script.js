"use theStrict";

// const num = 20;
// switch (num) {
//   case 49:
//     console.log("minciuni");
//     break;
//   case 50:
//     console.log("nus minciuni");
//     break;
//   default:
//     console.log("ei hai");
//     break;
// }

///////////////////////////////////////////////////////// !!! \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const fries = 3,
//   cola = 2;

// if (fries >= 1 && cola >= 1) {
//   console.log("iuhuu");
// } else {
//   console.log("eii");
// }

///////////////////////////////////////////////////////// !!! \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// console.log(NaN || 2 || undefined); // 2

// console.log(NaN && 2 && undefined); // NaN

// console.log(1 && 2 && 3); // 3

// console.log((!1 && 2) || !3); // false

// console.log(25 || (null && !3)); // 25

// console.log(NaN || null || !3 || undefined || 5); // 5

// console.log(NaN || (null && !3 && undefined) || 5); //5

// console.log((5 === 5 && 3 > 1) || 5); // true

///////////////////////////////////////////////////////// !!! \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// for (let i = 1; i < 8; i++) {
//     if (i === 4) {
//         continue;
//     }
//     console.log(i);
// }

///////////////////////////////////////////////////////// !!! \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// *
// **
// ***
// ****
// *****
// ******

// let result = "";
// const theLength = 7;

// for (let i = 1; i < theLength; i++) {
//   for (let j = 0; j < i; j++) {
//     result += "*";
//   }

//   result += "\n";
// }

// console.log(result);

///////////////////////////////////////////////////////// !!! \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Primul: for (let i = 0; i < 3; i++) {
//   console.log(`Primul nivel ${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`Al doilea nivel ${j}`);
//     for (let k = 0; k < 5; k++) {
//       console.log(`Al treilea nivel ${k}`);
//       if (k === 3) {
//         break Primul;
//       }
//     }
//   }
// }

///////////////////////////////////////////////////////// !!! \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);

//      *
//     ***
//    *****
//   *******
//  *********
// ***********

///////////////////////////////////////////////////////// !!! \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// String most used methods
//Only .length - property, the others are methods().

// const theStr = "heLlo wOrld!";

// console.log(theStr.length); // proprrietate

// console.log(theStr[8]);

// console.log(theStr.toUpperCase());
// console.log(theStr.toLowerCase());

// console.log(theStr.indexOf("wOrld")); //
// console.log(theStr.indexOf("world")); // world - arata -1, pentru ca nui

// console.log(theStr.slice(6, 11)); // primul argument - de unde incepe sa scoata fraza
//  al doilea - ultimul argument (nu inclusiv), al doilea se poate de evitat
// console.log(theStr.slice(4));
//  console.log(theStr.slice(-4)); // incepe de la sfirsitul cuvintului
// console.log(theStr.subtheString(4, 9)); // la fel ca slice, nu poate primi argumente negative
// console.log(theStr.substr(3, 7)); // incepe de la 3 simbol si scoate 7 simboluri, incepind cu a 3

// String.trim() - sterge locurile libere " " de la sfirsitul si inceputul propozitiei
// const theString = "        oleg isi bate joc   ";
// console.log(theString);
// console.log(theString.trim());

// Numbers most used methods
// Math.

// const theNum = 12.8;
// console.log(Math.floor(theNum)); // rotungeste la cel mai mic (12.8 -> 12)
// console.log(Math.ceil(theNum)); // rotungeste la cel mai mare (12.8 -> 13)

// console.log(Math.round(theNum)); // rotungeste

// const test = "12.2px";

// console.log(parseInt(test)); // intoarce 12
// console.log(parseFloat(test)); // intoarce 12.2

///////////////////////////////////////////////////////// !!! \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// function calculateVolumeAndArea(num) {
//   if (typeof num === "number" && Number.isInteger(num) && num > 0) {
//     return `Объем куба: ${num * num * num}, площадь всей поверхности: ${
//       num * num * 6
//     }`;
//   }
//   return "При вычислении произошла ошибка";
// }
// console.log(calculateVolumeAndArea(5));

///////////////////////////////////////////////////////// !!! \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// function getCoupeNumber(num) {
//   if (typeof num !== "number" || num < 0 || !Number.isInteger(num)) {
//     return "Ошибка. Проверьте правильность введенного номера места";
//   } else if (num === 0 || num > 36) {
//     return "Таких мест в вагоне не существует";
//   } else if (num > 0 && num <= 4) {
//     return 1;
//   } else if (num > 4 && num <= 8) {
//     return 2;
//   } else if (num > 8 && num <= 12) {
//     return 3;
//   } else if (num > 12 && num <= 16) {
//     return 4;
//   } else if (num > 16 && num <= 20) {
//     return 5;
//   } else if (num > 20 && num <= 24) {
//     return 6;
//   } else if (num > 24 && num <= 28) {
//     return 7;
//   } else if (num > 28 && num <= 32) {
//     return 8;
//   } else if (num > 32 && num <= 36) {
//     return 9;
//   }
/// Option 2
//   if (typeof num !== "number" || num < 0 || !Number.isInteger(num)) {
//     return "Ошибка. Проверьте правильность введенного номера места";
//   } else if (num === 0 || num > 36) {
//     return "Таких мест в вагоне не существует";
//   } else {
//     return Math.ceil(num / 4);
//   } // end option 2
// }
// console.log(getCoupeNumber(1));

///////////////////////////////////////////////////////// !!! \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// function getTimeFromMinutes(min) {
//     const hours = Math.floor(min / 60);
//     const minutes = min % 60;
//     if (typeof min !== "number" || !Number.isInteger(min) || min < 0 || min > 600) {
//         return "Ошибка, проверьте данные";
//     } else if (hours > 1 && hours < 5) {
//         return `Это ${hours} часа и ${minutes} минут`;
//     } else if (hours === 0 || hours >= 5) {
//         return `Это ${hours} часов и ${minutes} минут`;
//     } else {return `Это ${hours} час и ${minutes} минут`;}
// }

// console.log(getTimeFromMinutes(0));

// function findMaxNumber(a, b, c, d) {
//     if (typeof(a) !== "number" || typeof(b) !== "number" || typeof(c) !== "number" || typeof(d) !== "number") {
//         return 0;
//     }
//     return Math.max(a, b, c, d);

// }

// console.log(findMaxNumber(25, 21.2, 125, "asd"));

///////////////////////////////////////////////////////// !!! \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// function fib(num) {
//     let a = 1,
//         b = 1;
//     if (num <= 0 || typeof(num) !== "number" || !Number.isInteger(num)) {
//         return "";
//     }
//     for (let i = 3; i <= num; i++) {
//         let c = a +b;
//         a = b;
//         b = c;
//     }
//     return `a, b, c`;
// }

// console.log(fib());

///////////////////////////////////////////////////////// !!! \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Obiecte

// const obj = {
//   name: "test",
//   price: 2005,
//   width: 1230,
//   height: 950,
//   anotherInfo: {
//     color: "red",
//     backgroundColor: "blue",
//   },
//   makeTest: function() {
//     console.log("Test has succes!");
//   }
// };

// obj.makeTest();

// console.log(Object.keys(obj)); // transforma in masiv de keys
// console.log(Object.values(obj)); // transforma in masiv de values
// console.log(Object.entries(obj)); // transforma in masiv perechea key:value
// console.log(Object.keys(obj).length); // numara cite keys sunt in obiect

// console.log(obj["anotherInfo"]["color"]); // obiect in interior la obiect

// // Key - fiecare key din obiect, obj[key] - fiecare value din obiect
// for (let key in obj) {
//   console.log(`The key ${key}, has the value ${obj[key]}`);
// }
// // Value of anotherInfo is seen like an object

// let counter = 0;

// for (let key in obj) {
//     if (typeof(obj[key]) === "object") {
//         for (let i in obj[key]) {
//     console.log(`The key ${i}, has the value ${obj[key][i]}`);
//     counter++;
//         }
//     } else {
//         console.log(`The key ${key}, has the value ${obj[key]}`);
//         counter++;
//     }
//   }
//   console.log(counter);

///////////////////////////////////////////////////////// !!! \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Array

// const arr = [1, 2, 44, 5, 28, 9, 15];
// console.log(arr.length); // length = last index of array + 1

// arr.pop(); // sterge ultimul element
// arr.push(25); // adauga elemente la sfirsit
// arr.shift(); // sterge elementul la inceput
// arr.unshift(5); // adauga elemente la inceput
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let values of arr) {
//     console.log(values);
// }

// value - value of array (1, 2 ...); index - index of values; arr - link to any array
// arr.forEach(function (value, index, arr) {
//   console.log(`${index}: ${value} off the array from ${arr}`);
// });

// arr.split(", "); // transforma sirul de date, de exemplu de la prompt("", "asd, dsa")
// // si il transforma in array, impartit prin ,
// arr.join(";"); // transforma sirul in array si il imparte prin ;

// arr.sort(); // sorteaza array-ul (default - dupa alphabet)
// arr.sort((a, b) => a - b); // sorteaza array-ul (mic - mare)
// arr.sort((a, b) => b - a); // sorteaza array-ul (mare - mic)
// console.log(arr);

///////////////////////////////////////////////////////// !!! \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Copy of an object

// const obj = {
//     a: 2,
//     b: 5,
//     c: 0
// };

// const copy = obj;

// copy.b = 10; // se schibma si obj pentru ca copy este link-ul (legatura) spre obj
// console.log(obj);
// console.log(copy);

// const newObj = {
//     a: 5,
//     b: 10,
//     c: 15
// };
// const  add = {
//     z: 15,
//     v: 5
// };
// const copyOfObj = Object.assign({}, newObj); // adauga la primul element, al doilea element

// copyOfObj.b = 25;
// console.log(newObj);
// console.log(copyOfObj);

// const anotherCopy = Object.assign(newObj, add);
// console.log(anotherCopy);

// Copy of an array

// const arr = ["a", "b", "c"];
// const newArr = arr.slice();

// newArr[1] = "asda";

// console.log(arr);
// console.log(newArr);

// const video = ["youtube", "vimeo", "rutube"],
//       blogs = ["wordpress", "livejournal", "bloggers"],
//       internet = [...video, ...blogs, "others", "mothers"];

// console.log(internet);

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// const nums = [1, 5, 25];

// log(...nums);

// const anObj = {
//   a: 1,
//   b: 5,
// };

// const plusObj = { ...anObj };

///////////////////////////////////////////////////////// !!! \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Prototypes
// const soldier = {
//     health: 400,
//     armor: 100
// };

// const john = Object.create(soldier);

// const john = {
//     health: 100
// };

// Object.setPrototypeOf(john, soldier);

//

///////////////////////////////////////////////////////// !!! \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
