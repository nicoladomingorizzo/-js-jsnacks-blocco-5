const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];
const longerZucchine = [];
const otherZucchine = [];
// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti. con ciclo for
for (let i = 0; i < zucchine.length; i++) {
  if (zucchine[i].length > 15) {
    longerZucchine.push(zucchine[i]);
  } else {
    otherZucchine.push(zucchine[i]);
  }
};
console.log(longerZucchine);
console.log(otherZucchine);
// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti. con forEach
const longerZucchineFe = [];
const othersZucchineFe = [];
zucchine.forEach((zucchina, i) => {
  if (zucchine[i].length > 15) {
    longerZucchineFe.push(zucchine[i]);
  } else {
    othersZucchineFe.push(zucchine[i]);
  }
});
console.log(longerZucchineFe);
console.log(othersZucchineFe);

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti. con filter
//array longer
const longerZucchineFi = zucchine.filter((zucchina, i) => {
  if (zucchine[i].length > 15) {
    return true;
  }
  return false;
});
console.log(longerZucchineFi);
//array others
const othersZucchineFi = zucchine.filter((zucchina, i) => {
  if (zucchine[i].length < 15) {
    return true;
  }
  return false;
});
console.log(othersZucchineFi);