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

// Recupera la classe dello studente 'Marco Lanci' con ciclo for
for (let i = 0; i < students.length; i++) {
  const student = students[i].name;
  if (student === 'Marco Lanci') {
    console.log(students[i].class);
  }
};

// Recupera la classe dello studente 'Marco Lanci' con forEach
students.forEach((student, i) => {
  if (students[i].name === 'Marco Lanci') {
    console.log(students[i].class);
  }
});

// Recupera la classe dello studente 'Marco Lanci' con find
const classFind = students.find((student, i) => {
  if (students[i].name === 'Marco Lanci') {
    return console.log(students[i].class);
  }
})
// Risultato: '3C'