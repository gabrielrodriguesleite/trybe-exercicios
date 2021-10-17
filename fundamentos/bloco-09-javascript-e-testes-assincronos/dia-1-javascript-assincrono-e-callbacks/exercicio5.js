const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreesCelsius) => (degreesCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}°F at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}°C at Mars`);

// exercicio 5 definição da função sendMarsTemperature...
const sendMarsTemperature = (minhaCallback) => {
  minhaCallback(getMarsTemperature());
}

sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47° at Mars"
sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53°C at Mars"