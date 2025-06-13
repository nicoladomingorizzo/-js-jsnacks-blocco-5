const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi con ciclo for
for (let i = 0; i < people.length; i++) {
  const person = people[i].name;
  console.log(person);
};
// Stampa in console tutti i nomi con forEach
people.forEach((person, i) => {
  console.log(people[i].name);
});
// Stampa in console tutti i nomi con forEach con one liner
people.forEach((person, i) => console.log(people[i].name));
// Risultato: 'Paolo', 'Giulia', 'Marco'