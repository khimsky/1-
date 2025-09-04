// Температураны тексеру бағдарламасы
// Программаны іске қосу үшін терминалда жазамыз: node app.js
function checkTemperature(temp) {
  if (temp > 90) {
    console.log("Қауіп! Температура жоғары!");
  } else {
    console.log("Температура қалыпты.");
  }
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Температураны енгізіңіз (°C). Шығу үшін 'exit' жазыңыз.");

rl.on("line", function(input) {
  if (input.toLowerCase() === "exit") {
    console.log("Бағдарлама тоқтады.");
    rl.close();
    return;
  }

  const temperature = parseFloat(input);

  if (isNaN(temperature)) {
    console.log("Сан енгізіңіз!");
  } else {
    checkTemperature(temperature);
  }
});
