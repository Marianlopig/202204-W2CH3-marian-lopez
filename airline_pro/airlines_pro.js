let flights = [

  { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

  { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

  { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

  { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

  { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

  { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },

  { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

  { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

  { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

  { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

  { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];

function getFlightInfo(flight) {
  return "El vuelo " + flight.id + " con origen: " + flight.from + " y destino: " + flight.to + " tiene un coste de " + flight.cost + "€ " + checkStopOver(flight);
};

function checkStopOver(flight) {
  if (flight.scale) {
    return "y tiene una escala.";
  }
  else {
    return "y no realiza ninguna escala";
  }
}
function printFlightsInfo(filteredFlights) {
  let flightsToPrint = filteredFlights ? filteredFlights : flights
  let flightsInfo = "";
  flightsToPrint.forEach(flight => {
    flightsInfo += getFlightInfo(flight) + "\n";
  })
  alert("-----------------------------------------------------------------\n")
  alert(flightsInfo);
  alert("-----------------------------------------------------------------\n")
}
function printFlightCostAverage() {
  let flightsCost = 0;
  flights.forEach(flight => {
    flightsCost += flight.cost
  })
  let flightAverage = flightsCost / flights.length;
  alert("El precio medio es " + flightAverage.toFixed(2) + "€");
}
function printFlightsWithStopOver() {
  let flightsStopOver = 0;
  flights.forEach(flight => {
    if (flight.scale) {
      flightsStopOver++
    }
  })
  alert("Hay " + flightsStopOver + " vuelos con escala");
}
function printLastFiveDestinations() {
  let index = flights.length - 1
  alert("Los ultimos destinos son: " + flights[index].to + ", " + flights[index - 1].to + ", " + flights[index - 2].to + ", " + flights[index - 3].to + " y " + flights[index - 4].to);
}
function isAdmin() {
  let answerAdmin = prompt("¿Eres Admin? Escribe SI/NO");
  return isYes(answerAdmin);
}
function addFlight() {
  let to = prompt("Vamos a crear un vuelo nuevo. Introduce Destino");
  let from = prompt("Introduce Origen");
  let cost = +prompt("Introduce Precio");
  let scale = prompt("¿Tiene escala? si / no");
  let hasScale = isYes(scale);
  let id = flights[flights.length - 1].id + 1
  let newFlight = { id, to, from, cost, scale: hasScale };
  flights.push(newFlight);
}
function isYes(val) {
  return val && (val.toLowerCase() === "s" || val.toLowerCase() === "si")
}
function deleteFlight() {
  let flightToDelete = prompt("Escribe el id del vuelo que quieres eliminar")
  let index = flights.findIndex(flight => flight.id === +flightToDelete)
  flights.splice(index, 1)
}

let personName = prompt("Introduce tu nombre, por favor");
alert("Hola " + personName + ", Bienvenido a nuestro Airline");
printFlightsInfo();
printFlightCostAverage();
printFlightsWithStopOver();
printLastFiveDestinations();
let admin = isAdmin();

if (admin) {
  let moreFlights;
  let lessFlights;
  do {
    addFlight()
    moreFlights = prompt("¿Quieres añadir otro vuelo? si / no")
    if (flights.length === 15) {
      alert("No se pueden añadir más vuelos");
    }
  }
  while (flights.length <= 15 && isYes(moreFlights));
  printFlightsInfo();
  do {
    lessFlights = prompt("¿Quieres eliminar un vuelo? si / no")
    if (isYes(lessFlights)) {
      deleteFlight();
    }
  }
  while (isYes(lessFlights));
  printFlightsInfo();
  alert("Gracias por usar nuestro Airline")
}
else {
  let clientPrice = prompt("Escribe el precio maximo del vuelo que quieres comprar")
  let results = flights.filter(flight => flight.cost <= +clientPrice)
  printFlightsInfo(results);
  let idToBuy = prompt("Escribe el id del vuelo que quieres comprar")
  let index = results.findIndex(flight => flight.id === +idToBuy)
  if (index === -1) {
    alert("El vuelo no existe");
  }
  else {
    alert("Gracias por su compra")
  }
}
