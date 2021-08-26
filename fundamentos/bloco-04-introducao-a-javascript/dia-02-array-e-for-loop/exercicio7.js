// Imprima o menor valor da array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];
for (var a = 0; a < numbers.length; a +=1 ) {
    if ( menor > numbers[a] ) menor = numbers[a];
}
console.log(menor);