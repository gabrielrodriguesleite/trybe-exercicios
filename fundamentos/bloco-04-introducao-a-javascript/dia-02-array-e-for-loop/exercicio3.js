// imprima a média aritmética dos valores da array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (var a = 0; a < numbers.length; a +=1 ) {
    soma += numbers[a];
}
console.log(soma/numbers.length);