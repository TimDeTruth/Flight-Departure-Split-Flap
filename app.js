const tableBody = document.getElementById("table-body");

let flights = [
  {
    time: "08:11",

    destination: "JHB",
    flight: "SA 222",
    gate: "A 51",
    remark: "DELAYED",
  },
  {
    time: "12:51",
    destination: "CHN",
    flight: "CH 222",
    gate: "L 32",
    remark: "ON TIME",
  },
  {
    time: "05:12",
    destination: "YVR",
    flight: "VAN 222",
    gate: "J 1",
    remark: "CANCELLED",
  },
  {
    time: "17:54",
    destination: "TOR",
    flight: "TOR 222",
    gate: "Z 6",
    remark: "ON TIME",
  },
  {
    time: "14:00",
    destination: "HK",
    flight: "HK 222",
    gate: "B 76",
    remark: "DELAYED",
  },
  {
    time: "18:00",
    destination: "TOKYO",
    flight: "TOK 222",
    gate: "T 76",
    remark: "ON TIME",
  },
];

const destinationsArr = [
  "SYDNEY",
  "DUBAI",
  "CAPE TOWN",
  "NEW YORK",
  "LA",
  "FRANKFURT",
];

const remarksArr = ["ON TIME", "CANCELLED", "DELAYED"];
let hour = 15;

function populateTable() {
  for (const flight of flights) {
    const tableRow = document.createElement("tr");

    for (const flightDetail in flight) {
      const tableCell = document.createElement("td");
      //   console.log(flightDetail);

      const word = Array.from(flight[flightDetail]);

      for (const [index, letter] of word.entries()) {
        const letterElement = document.createElement("div");

        setTimeout(() => {
          letterElement.classList.add("flip");
          letterElement.textContent = letter;
          tableCell.appendChild(letterElement);
        }, 100 * index);
      }

      tableRow.appendChild(tableCell);
    }
    tableBody.append(tableRow);
  }
}
populateTable();

function generateRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}

function generateRandomNumber(maxNumber) {
  const numbers = "0123456789";

  if (maxNumber) {
    const newNumbers = numbers.slice(0, maxNumber + 1);
    return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length));
  }

  return numbers.charAt(Math.floor(Math.random() * numbers.length));
}

function generateTime() {
  let displayHour = hour;
  if (hour < 24) {
    hour++;
  }
  if (hour >= 24) {
    hour = 1;
    displayHour = hour;
  }

  if (hour < 10) {
    displayHour = "0" + hour;
  }

  return displayHour + ":" + generateRandomNumber(5) + generateRandomNumber();
}

function shuffleUp() {
  flights.shift();
  flights.push({
    time: generateTime(),
    destination:
      destinationsArr[Math.floor(Math.random() * destinationsArr.length)],
    flight:
      generateRandomLetter() +
      generateRandomLetter() +
      " " +
      generateRandomNumber() +
      generateRandomNumber(),
    gate: generateRandomLetter() + " " + generateRandomNumber(),
    remark: remarksArr[Math.floor(Math.random() * remarksArr.length)],
  });

  tableBody.textContent = "";
  populateTable();
}

setInterval(shuffleUp, 4000);
