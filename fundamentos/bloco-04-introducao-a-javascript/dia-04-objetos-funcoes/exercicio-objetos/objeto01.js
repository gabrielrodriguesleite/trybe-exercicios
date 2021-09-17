// Exercício - 1
let player = {
    name : 'Marta',
    lastName : 'Silva',
    age : 34,
    medals : {
        golden : 2,
        silver : 3
    },
    // Exercício - 3
    bestInTheWorld : [
        2006, 2007, 2008, 2009, 2010, 1018
    ]

};

console.table(player);
// Exercicio - 2
console.log("A jogadora " + player.name + " " 
    + player.lastName + " tem " + player.age 
    + " anos de idade.");
// Exercício - 4
console.log("A jogadora " + player.name + " " 
+ player.lastName + " foi eleita a melhor do mundo por "
+ player.bestInTheWorld.length + " vezes." );
// Exercício - 5
console.log("A jogadora " + player.name + " " 
+ player.lastName + " possui " + player.medals.golden 
+ " medalhas de ouro e " + player.medals.silver + " medalhas de prata.");

//for in - retorna chaves de um objeto/dicionario
console.log("---- for in ----");
for (let k in player ) console.log(k);
//for of - retorna valores de uma array
console.log("---- for of ----")
for (let v of player.bestInTheWorld ) console.log(v);