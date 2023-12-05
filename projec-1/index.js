// function countSelected(selectObject) {
//     let numberSelected = 0;
//     for (let i = 0; i < selectObject.options.length; i++) {
//       if (selectObject.options[i].selected) {
//         console.log(selectObject.options[i].selected);
//         numberSelected++;
//       }
//     }
//     console.log(selectObject);
//     console.log(selectObject.options);

//     return numberSelected;
//   }

//   const btn = document.getElementById("btn");

//   btn.addEventListener("click", () => {
//     const musicTypes = document.selectForm.musicTypes;
//     console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
//     console.log(musicTypes);
//   });

//   const exercises = [
//     'weight-lifting',
//     'boxing',
//     'swimming',
//     'sit-up'
// ]

// for(let i = 0; i <= exercises.length-1; i++) {
// console.log(`I will do ${exercises[i]} exercises`);

// for(let i = 0; i <= 4; i++ ){
// console.log(`${i} times`);
// }
// };

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));

console.log(calcAverage(tips));
