// imprima uma pirâmide de base n (impar) [vazia]
let n = 7;
//Altura = n /2 arredondado pra cima
let h = Math.ceil(n/2);         
// //Inicia a array com altura-1 espaços
// let linha = Array(h).join(" ");

// for (h; h>0; h--) {
//     linha = linha.concat("*");  // +1 * no final
//     console.log(linha);         // imprime a linha
//     linha = linha.concat("*");  // +1 * no final
//     linha = linha.substr(1);    // remove array[0]
//     linha[h] = "e";
// }
// // Muita tentativa e erro!

let linha = [];
for(let i = 0; i < n; i +=1 ){
    linha.push("*");
    let s = "";
    for (let l = 0; l < linha.length; l+=1)
        s = s.concat(linha[l]);

    console.log(s);
}

