const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari con ciclo for
const evenNums = [];
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num % 2 === 0) {
        evenNums.push(num);
    }
};
console.log(evenNums);

// Crea un array a partire dall'array nums, che abbia solo i numeri pari con forEach
const evenNumsFe = [];
nums.forEach((number, i) => {
    if (nums[i] % 2 === 0) {
        evenNumsFe.push(nums[i]);
    }
});
console.log(evenNumsFe);

// Crea un array a partire dall'array nums, che abbia solo i numeri pari con filter
const evenNumsFil = nums.filter((number, i) => {
    if (nums[i] % 2 === 0) {
        return true;
    }
    return false;
});
console.log(evenNumsFil);

// Crea un array a partire dall'array nums, che abbia solo i numeri pari con filter one liner
const evenNumsFilOl = nums.filter((number, i) => nums[i] % 2 === 0);
console.log(evenNumsFilOl);


// Risultato: [2, 8, 4, 12]