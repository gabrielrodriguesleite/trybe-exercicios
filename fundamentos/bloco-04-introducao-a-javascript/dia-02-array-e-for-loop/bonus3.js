// imprima um novo array contendo cada 
//  valor de numbers multiplicado pelo proximo
// let numbers = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lista = [];
for ( let n = 0; n < numbers.length; n += 1 ) {
    if (n == numbers.length - 1) {
        lista.push(numbers[n] * numbers[0])
    } else {
        lista.push(numbers[n] * numbers[n+1])
    }
}
console.log(lista);