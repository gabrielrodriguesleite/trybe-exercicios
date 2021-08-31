let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donal',
};

// Exercício - 1
console.log("Bem-vinda, "+ info.personagem);

// Exercício - 2
info['recorrente'] = 'Sim';

// Exercício - 3
console.log("");
for (let k in info) console.log(k);

// Exercício - 4
console.log("");
for (let k in info) console.log(info[k]);

// Exercício - 5
let segundoObjeto = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Montain, Dell\'s For Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
}

console.log('------');

let recorrentes = '';
if (info.recorrente === 'Sim' && segundoObjeto.recorrente === 'Sim') {
    recorrentes = 'Ambos recorrentes';
}
else recorrentes = 'Nem todos recorrentes';

console.log(
    info.personagem + " e " + segundoObjeto.personagem
    + "\n" + info.origem + " e " 
    + segundoObjeto.origem + "\n" 
    + info.nota + " e " + segundoObjeto.nota
    + "\n" + recorrentes
);
