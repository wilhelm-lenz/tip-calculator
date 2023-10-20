const billElement = document.body.querySelector("#bill");
const peopleNumberElement = document.body.querySelector("#peoples");
const serviceElement = document.body.querySelector("#service");

console.log(billElement);
console.log(peopleNumberElement);
console.log(serviceElement);

function calculateTip() {
  let bill = Number(billElement.value);
  let peopleNumber = Number(peopleNumberElement.value);
  let serviceLength = serviceElement.options.selectedIndex;
  let service = serviceElement.options[serviceLength].innerText;

  console.log(bill);
  console.log(peopleNumber);
  console.log(serviceLength);
  console.log(service);
}

// const bill = 275;

/* Write your code below. Good luck! 🙂 */

// const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;

// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );
