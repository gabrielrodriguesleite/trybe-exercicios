// Exercicio - 1
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge'
};

for (let k in names) {
    //nesse caso como é um discionario names.k não funciona
    console.log("Olá " + names[k]);
}

// Exercicio - 2
console.log("\n");
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};
for (let k in car) {
    console.log(k + " - " +car[k]);
}