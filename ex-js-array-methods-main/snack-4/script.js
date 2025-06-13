const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori con ciclo for
const authorsNames = [];
for (let i = 0; i < posts.length; i++) {
  const authorName = posts[i].author;
  authorsNames.push(authorName);
};
console.log(authorsNames);

// Crea un nuovo array coi nomi di tutti gli autori con forEach
const authorsNamesFe = [];
posts.forEach((author, i) => {
  const authorName = posts[i].author;
  authorsNamesFe.push(authorName);
});
console.log(authorsNamesFe);

// Crea un nuovo array coi nomi di tutti gli autori con forEach one liner
const authorsNamesFeOl = [];
posts.forEach((author, i) => authorsNamesFeOl.push(posts[i].author));
console.log(authorsNamesFeOl);


// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']