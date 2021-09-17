// Crie e imprima uma array de 1 a 25 (?)
// let minha_array = [];
// let tamanho = 25;
// for (let a = tamanho; a != 0; a -= 1 ) {
//     minha_array.push(Math.ceil(Math.random() * tamanho));
// }
// console.log(minha_array);

// let minha_array = [];
// minha_array.length = 25;
// for (let a = minha_array.length; a != 0; a -= 1 ) {
//     minha_array[a-1] = Math.ceil(Math.random() * minha_array.length);
// }
// console.log(minha_array);

let minha_array = [];
minha_array.length = 25;
for (let a = 0; a < minha_array.length; a += 1 ) {
    minha_array[a] = Math.ceil(Math.random() * minha_array.length);
}
console.log(minha_array);