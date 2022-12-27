const { input } = require("./input");

const sumsSorted = input.map((lines) => {
  const sumOfNumbers = [];
  let addNumber = 0;
  let i = 0;
  lines.split(/\r\n/).forEach(n => {
    if(n == "") {
      addNumber = 0;
      i++;
    }
    else sumOfNumbers[i] = addNumber += parseInt(n, 10);
  });
  console.log(sumOfNumbers.sort((a, z) => z - a)[0]);
});
