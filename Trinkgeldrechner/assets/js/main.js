const billElement = document.body.querySelector("#bill");
const peopleNumberElement = document.body.querySelector("#peoples");
const serviceElement = document.body.querySelector("#service");
const outputElement = document.body.querySelector(".output");

console.log(billElement);
console.log(peopleNumberElement);
console.log(serviceElement);

function calculateTip() {
  let bill = Number(billElement.value);
  let peopleNumber = Number(peopleNumberElement.value);
  let serviceLength = serviceElement.options.selectedIndex;
  let service = serviceElement.options[serviceLength].innerText;
  let output = outputElement;
  if (service === "schlecht") {
    output.innerHTML = `<p>Das Trinkgeld ist: ${bill * 0.02} €</p>`;
    output.innerHTML += `<p> Die Gesammtsumme beträgt: ${
      bill + bill * 0.02
    } €</p>`;
    output.innerHTML += `<p>Der Preis pro Person ist ${
      (bill + bill * 0.02) / peopleNumber
    } €</p>`;
  } else if (service === "ok") {
    output.innerHTML = `<p>Das Trinkgeld ist: ${bill * 0.1} €</p>`;
    output.innerHTML += `<p> Die Gesammtsumme beträgt: ${
      bill + bill * 0.1
    } €</p>`;
    output.innerHTML += `<p>Der Preis pro Person ist ${
      (bill + bill * 0.1) / peopleNumber
    } €</p>`;
  } else if (service === "gut") {
    output.innerHTML = `<p>Das Trinkgeld ist: ${bill * 0.2} €</p>`;
    output.innerHTML += `<p> Die Gesammtsumme beträgt: ${
      bill + bill * 0.2
    } €</p>`;
    output.innerHTML += `<p>Der Preis pro Person ist ${
      (bill + bill * 0.2) / peopleNumber
    } €</p>`;
  }
  console.log(bill * 0.2);
  console.log(bill + bill * 0.2);
  console.log((bill + bill * 0.2) / peopleNumber);
}

// const bill = 275;

/* Write your code below. Good luck! 🙂 */

// const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;

// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );
