const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi con ciclo for
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
};

// Stampa in console tutti i nomi con forEach
names.forEach((name) => {
    console.log(name)
}); //

// Stampa in console tutti i nomi con forEach con one liner arrow function
const namess = names.forEach(name => console.log(name));
// Risultato: 'Edoardo', 'Simone', 'Francesco'