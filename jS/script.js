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

// Numbers most used methods
// Math.

// const theNum = 12.8;

// console.log(Math.round(theNum)); // rotungeste

// const test = "12.2px";

// console.log(parseInt(test)); // intoarce 12
// console.log(parseFloat(test)); // intoarce 12.2
