const convertToCelsius = function(fTemp) {
  celsius = (fTemp - 32) * (5 / 9);
  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(cTemp) {
  fahrenheit = ((9 / 5) * cTemp) + 32;
  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
