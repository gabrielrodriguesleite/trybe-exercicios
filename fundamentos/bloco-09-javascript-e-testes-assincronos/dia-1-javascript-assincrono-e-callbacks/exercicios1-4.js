const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  }
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  }
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  }
};

const getPlanet = () => {
  setTimeout(() => console.log("Returned planet: ", mars), 4000);
};

const test1 = () => {
  console.log(planetDistanceFromSun(mars)); // A
  console.log(planetDistanceFromSun(venus)); // B
  console.log(planetDistanceFromSun(jupiter)); // C
};

const test2 = () => {
  console.log(planetDistanceFromSun(mars)); // A
  setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
  setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C
};


// test1();
// console.log('\n');
// test2();
// getPlanet(); // teste 3

// exercicio 4
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () => {
  setTimeout(() => console.log(`Mars temperature is: ${getMarsTemperature()} degree Celsius.`),
    messageDelay());
};

sendMarsTemperature();