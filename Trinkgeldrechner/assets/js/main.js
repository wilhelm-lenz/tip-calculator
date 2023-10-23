const billElement = document.body.querySelector("#bill");
const peopleNumberElement = document.body.querySelector("#peoples");
const serviceElement = document.body.querySelector("#service");
const outputElement = document.body.querySelector(".output");
let output = outputElement;
const percentOfTip = {
  schlecht: 0.02,
  ok: 0.1,
  gut: 0.2,
};
const servicePerformance = ["schlecht", "ok", "gut", "Wie war der Service"];
const textAmounts = [
  "Das Trinkgeld ist:",
  "Die Gesammtsumme beträgt:",
  "Der Preis pro Person ist:",
];

function showAmounts(service) {
  let bill = Number(billElement.value);
  let peopleNumber = Number(peopleNumberElement.value);
  output.innerHTML = `<p>${textAmounts[0]} ${(
    bill * percentOfTip[service]
  ).toFixed(2)} €</p>`;
  output.innerHTML += `<p>${textAmounts[1]}  ${(
    bill +
    bill * percentOfTip[service]
  ).toFixed(2)} €</p>`;
  output.innerHTML += `<p>${textAmounts[2]} ${(
    (bill + bill * percentOfTip[service]) /
    peopleNumber
  ).toFixed(2)} €</p>`;
}

function calculateTip() {
  let serviceLength = serviceElement.options.selectedIndex;
  let service = serviceElement.options[serviceLength].value;
  if (service === servicePerformance[0]) {
    showAmounts(service);
  } else if (service === servicePerformance[1]) {
    showAmounts(service);
  } else if (service === servicePerformance[2]) {
    showAmounts(service);
  } else if (service === servicePerformance[3]) {
    output.innerHTML = "<p>Bitte Service bewerten!</p>";
  }
}
