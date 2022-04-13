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

function printFlightsInfo() {
  let flightsInfo = "";
  flights.forEach(flight => {
    flightsInfo += `${getFlightInfo(flight)}\n`;
  })
  return flightsInfo
}

function printFlightCostAverage() {
  let flightsCost = 0;
  flights.forEach(flight => {
    flightsCost += flight.cost
  })
  const flightAverage = (flightsCost / flights.length).toFixed(2);
  return flightAverage;
}
function printFlightsWithStopOver() {
  let flightsStopOver = 0;
  flights.forEach(flight => {
    if (flight.scale) {
      flightsStopOver++
    }
  })
  return (`Hay ${flightsStopOver} vuelos con escala`);
}
function printLastFiveDestinations() {
  const index = flights.length - 1
  return (`Los ultimos destinos son: ${flights[index].to}, ${flights[index - 1].to}, ${flights[index - 2].to}, ${flights[index - 3].to} y ${flights[index - 4].to}`);
}


printFlightsInfo();
printFlightCostAverage();
printFlightsWithStopOver();
printLastFiveDestinations();
