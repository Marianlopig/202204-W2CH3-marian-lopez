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
  return "El vuelo con origen: " + flight.from + " y destino: " + flight.to + " tiene un coste de " + flight.cost + "€ " + checkStopOver(flight);
};

function checkStopOver(flight) {
  if (flight.scale) {
    return "y tiene una escala.";
  }
  else {
    return "y no realiza ninguna escala";
  }
}
function printFlightsInfo() {
  let flightsInfo = "";
  flights.forEach(flight => {
    flightsInfo += getFlightInfo(flight) + "\n";
  })
  alert(flightsInfo);
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

let personName = prompt("Introduce tu nombre, por favor");
alert("Hola " + personName + ", Bienvenido a nuestro Airline");
printFlightsInfo();
printFlightCostAverage();
printFlightsWithStopOver();
printLastFiveDestinations();
