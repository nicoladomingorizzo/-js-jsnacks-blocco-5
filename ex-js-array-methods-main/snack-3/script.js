const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1 con ciclo for
const numbersIncrement1 = [];

for (let i = 0; i < numbers.length; i++) {
    const numbersIncrement = numbers[i] + 1;
    numbersIncrement1.push(numbersIncrement);
};
console.log(numbersIncrement1);

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1 con forEach
const numbersIncrementFe = [];
numbers.forEach((number) => {
    const numbersIncrements = number + 1;
    numbersIncrementFe.push(numbersIncrements);
});
console.log(numbersIncrementFe);

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1 con forEach con one liner
const numbersIncrementFeOl = [];
numbers.forEach((number) => numbersIncrementFeOl.push(number + 1));
console.log(numbersIncrementFeOl);

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1 con map
const numberUp = numbers.map((number) => {
    return number + 1;
});
console.log(numberUp);

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1 con map con one liner
const numberAdd = numbers.map((number) => number + 1);
console.log(numberAdd);

// Risultato: [3, 9, 5, 8, 3, 88]