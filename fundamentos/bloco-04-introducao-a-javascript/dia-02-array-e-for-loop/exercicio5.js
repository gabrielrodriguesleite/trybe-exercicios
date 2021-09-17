// Imprima o maior valor da array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = numbers[0];
for (var a = 0; a < numbers.length; a +=1 ) {
    if ( maior < numbers[a] ) maior = numbers[a];
}
console.log(maior);