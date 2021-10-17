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

const handleError = (errorReason) => 
  console.log(`Error getting temperature: ${errorReason}`);

// exercicio 6 definição da função sendMarsTemperature...
const sendMarsTemperature = (minhaCallback, callbackErro) => {
  if (Math.floor(Math.random() * 10) > 6) return minhaCallback(getMarsTemperature());
  return callbackErro('Robot is busy');
}

sendMarsTemperature(temperatureInFahrenheit, handleError); // imprime "It is currently 47° at Mars" ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError); // imprime "Hi there! Curiosity here. Right now is 53°C at Mars" ou "Error getting temperature: Robot is busy"