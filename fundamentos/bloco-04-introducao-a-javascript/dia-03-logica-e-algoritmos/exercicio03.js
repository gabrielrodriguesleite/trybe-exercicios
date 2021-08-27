// imprima um triangulo retângulo de asteriscos de altura n, 
//  invertido horizontalmente
let n = 5;
let linha = Array(n+1).join(" ");
 
for (n; n > 0; n--) {
    linha = linha.concat("*");
    console.log(linha.slice(-5));
}