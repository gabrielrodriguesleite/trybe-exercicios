// Imprima quantos impares tem ou nenhum valor impar encontrado
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let n_impar = 0;

for (var a = 0; a < numbers.length; a +=1 )
    if ( (numbers[a] % 2) == 0 ) n_impar += 1;

if (n_impar) console.log(n_impar)
else console.log("Nenum número ímpar encontrado.")