const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera i dati dello studente con id 2 con ciclo for
for (let i = 0; i < students.length; i++) {
  const student = students[i].id;
  if (student === 2) {
    console.log(students[i]);
    break
  }
};

// Recupera i dati dello studente con id 2 con forEach
students.forEach((student, i) => {
  if (students[i].id === 2) {
    console.log(students[i]);
  }
});

// Recupera i dati dello studente con id 2 con find
const toFind = students.find((student, i) => {
  return students[i].id === 2;
});
console.log(toFind);

// Recupera i dati dello studente con id 2 con find one liner
const toFindOl = students.find((student, i) => students[i].id === 2);
console.log(toFindOl);
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }