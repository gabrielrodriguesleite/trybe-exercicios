// imprima uma pirâmide de base n
let n = 5;
//Altura = n /2 arredondado pra cima
let h = Math.ceil(n/2);         
//Inicia a array com altura-1 espaços
let linha = Array(h).join(" ");

for (h; h>0; h--) {
    linha = linha.concat("*");  // +1 * no final
    console.log(linha);         // imprime a linha
    linha = linha.concat("*");  // +1 * no final
    linha = linha.substr(1);    // remove array[0]
}
// Muita tentativa e erro!