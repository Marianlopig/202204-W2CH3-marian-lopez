const flights = [

  { id: 0, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

  { id: 1, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

  { id: 2, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

  { id: 3, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

  { id: 4, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

  { id: 5, to: 'London', from: 'Madrid', cost: 200, scale: false },

  { id: 6, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

  { id: 7, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

  { id: 8, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

  { id: 9, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

  { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];

function checkStopOver(flight) {
  if (flight.scale) {
    return "y tiene una escala.";
  }

  return "y no realiza ninguna escala";

}

function getFlightInfo(flight) {
  return `El vuelo con origen: ${flight.from} y destino: ${flight.to} tiene un coste de ${flight.cost} € ${checkStopOver(flight)}`;
};


function printFlightsInfo(filteredFlights) {
  const flightsToPrint = filteredFlights || flights
  let flightsInfo = "";
  flightsToPrint.forEach(flight => {
    flightsInfo += `${getFlightInfo(flight)}\n`;
  })
  return flightsInfo;
}
function printFlightCostAverage() {
  let flightsCost = 0;
  flights.forEach(flight => {
    flightsCost += flight.cost
  })
  const flightAverage = flightsCost / flights.length;
  return `El precio medio es ${flightAverage.toFixed(2)}€`
}
function printFlightsWithStopOver() {
  let flightsStopOver = 0;
  flights.forEach(flight => {
    if (flight.scale) {
      flightsStopOver++
    }
  })
  return `Hay ${flightsStopOver} vuelos con escala`
}
function printLastFiveDestinations() {
  const index = flights.length - 1
  return `Los ultimos destinos son: ${flights[index].to}, ${flights[index - 1].to}, ${flights[index - 2].to}, ${flights[index - 3].to} y ${flights[index - 4].to}`
}
function isYes(val) {
  return val && (val.toLowerCase() === "s" || val.toLowerCase() === "si")
}
function isAdmin() {
  const answerAdmin = "¿Eres Admin? Escribe SI/NO"
  return isYes(answerAdmin);
}
function addFlight() {
  const to = "Vamos a crear un vuelo nuevo. Introduce Destino"
  const from = "Introduce Origen"
  const cost = "Introduce Precio"
  const scale = "¿Tiene escala? si / no"
  const hasScale = isYes(scale);
  const id = flights[flights.length - 1].id + 1
  const newFlight = { id, to, from, cost, scale: hasScale };
  flights.push(newFlight);
}

function deleteFlight() {
  const flightToDelete = "Escribe el id del vuelo que quieres eliminar"
  const index = flights.findIndex(flight => flight.id === +flightToDelete)
  flights.splice(index, 1)
}

printFlightsInfo();
printFlightCostAverage();
printFlightsWithStopOver();
printLastFiveDestinations();
const admin = isAdmin();

/* if (admin) {
  let moreFlights;
  let lessFlights;
  do {
    addFlight()
    moreFlights = "¿Quieres añadir otro vuelo? si / no"
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
  const clientPrice = prompt("Escribe el precio maximo del vuelo que quieres comprar")
  const results = flights.filter(flight => flight.cost <= +clientPrice)
  printFlightsInfo(results);
  const idToBuy = prompt("Escribe el id del vuelo que quieres comprar")
  const index = results.findIndex(flight => flight.id === +idToBuy)
  if (index === -1) {
    alert("El vuelo no existe");
  }
  else {
    alert("Gracias por su compra")
  }
} */
