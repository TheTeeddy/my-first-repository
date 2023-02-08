"use strict";
// 10
// const personalPlanPeter = {
//   name: "Peter",
//   age: "29",
//   skills: {
//     languages: ["ru", "eng"],
//     programmingLangs: {
//       js: "20%",
//       php: "10%",
//     },
//     exp: "1 month",
//   },
//   showAgeAndLangs: function(obj) {
//     const {age} = obj,
//           {languages} = obj.skills;
//     let str = `Мне ${age} и я владею языками: `;
//     languages.forEach(function(lang) {
//         str += `${lang.toUpperCase()} `;
//     });
//     return str;

//   }
// };
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;

// }
// console.log(showExperience(personalPlanPeter));

// function showProgrammingLangs(plan) {
//     const {programmingLangs} = plan.skills;
//     let theStr = "";
//     for (let key in programmingLangs) {
//         theStr += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//     }
//     return theStr;
// }

// console.log(showProgrammingLangs(personalPlanPeter));

// 11

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     const theFamily = [...arr];
//     if (theFamily.length < 1) {
//         return `Семья пуста`;
//     } else {
//     let str = `Семья состоит из: `;
//     theFamily.forEach(function(members) {
//         str += `${members} `;
//     });
//     return str;
//     }
// }

// showFamily(family);

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(city => {
//         console.log(city.toLowerCase());
//     });
// }

// standardizeStrings(favoriteCities);

// 12

// const someString = 'This is some strange string';

// function reverse(str) {
//     if (typeof(str) !== "string") {
//         return "Ошибка!";
//     }
//     return [...str].reverse().join("");
//     // sau return str.split("").reverse().join("");
// }

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let str = "";
//     arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';
//     arr.forEach((el) => {
//     if (el !== missingCurr) {
//         str += `${el}\n`;
//     }
//     });
//     return str;
// }
// console.log(availableCurr(["USD", "EUR"], "USD"));

//13
// const shoppingMallData = {
//   shops: [
//     {
//       width: 10,
//       length: 5,
//     },
//     {
//       width: 15,
//       length: 7,
//     },
//     {
//       width: 20,
//       length: 5,
//     },
//     {
//       width: 8,
//       length: 10,
//     },
//   ],
//   height: 5,
//   moneyPer1m3: 30,
//   budget: 50000,
// };

// function isBudgetEnough(data) {
//   let surface = 0,
//     volume = 0;
//   data.forEach((shop) => {
//     surface += shop.width * shop.length;
//   });
//   volume += data.height * surface;
//   if (data.budget - volume * data.moneyPer1m3 >= 0) {
//     return `Бюджета достаточно`;
//   } else {
//     return `Бюджета недостаточно`;
//   }
// }

// 14
// const students = [
//   "Peter",
//   "Andrew",
//   "Ann",
//   "Mark",
//   "Josh",
//   "Sandra",
//   "Cris",
//   "Bernard",
//   "Takesi",
//   "Sam",
// ];

// function sortStudentsByGroups(arr) {
//   arr.sort();
//   const a = [],
//     b = [],
//     c = [],
//     rest = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (i < 3) {
//             a.push(arr[i]);
//         } else {
//             if (i < 6) {
//                 b.push(arr[i]);
//             } else if (i < 9) {
//                 c.push(arr[i]);
//             } else {
//                 rest.push(arr[i]);
//             }
//         }
//     }
//     return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
// }

// 15
const restorantData = {
  menu: [
    {
      name: "Salad Caesar",
      price: "14$",
    },
    {
      name: "Pizza Diavola",
      price: "9$",
    },
    {
      name: "Beefsteak",
      price: "17$",
    },
    {
      name: "Napoleon",
      price: "7$",
    },
  ],
  waitors: [
    { name: "Alice", age: 22 },
    { name: "John", age: 24 },
  ],
  averageLunchPrice: "20$",
  openNow: true,
};

function isOpen(prop) {
  let answer = "";
  prop ? (answer = "Открыто") : (answer = "Закрыто");

  return answer;
}
console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
  if (
    +fDish.price.slice(0, -1) + +sDish.price.slice(0, -1) <
    +average.slice(0, -1)
  ) {
    return "Цена ниже средней";
  } else {
    return "Цена выше средней";
  }
}

console.log(
  isAverageLunchPriceTrue(
    restorantData.menu[0],
    restorantData.menu[1],
    restorantData.averageLunchPrice
  )
);

function transferWaitors(data) {
  const copy = Object.assign({}, data);

  copy.waitors = [{ name: "Mike", age: 32 }];
  return copy;
}

transferWaitors(restorantData);
