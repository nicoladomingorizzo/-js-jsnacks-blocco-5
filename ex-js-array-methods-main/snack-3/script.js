const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1 con ciclo for
const numbersIncrement = [];

for (let i = 0; i < numbers.length; i++) {
    const numbersIncrement = numbers[i] + 1;
    console.log(numbersIncrement);
};

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1 con forEach
numbers.forEach((number, i) => {
    const numbersIncrement = numbers[i] + 1;
    console.log(numbersIncrement);
});

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1 con forEach con one liner
numbers.forEach((number, i) => console.log(number + 1));

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1 con map
const numberUp = numbers.map((number, i) => {
    return numbers[i] + 1;
});
console.log(numberUp);

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1 con map con one liner
const numberAdd = numbers.map((number, i) => numbers[i] + 1);
console.log(numberAdd);

// Risultato: [3, 9, 5, 8, 3, 88]