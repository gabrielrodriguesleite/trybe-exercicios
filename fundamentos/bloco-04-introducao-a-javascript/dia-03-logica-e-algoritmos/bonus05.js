// imprima uma pirâmide de base b (impar) [vazia]
let b = 1111;                       // pirâmide de Gizé
//Altura = n /2 arredondado pra cima
let h = Math.ceil(b/2);             // altura h

let p = "";                         // camadas da pirâmide
for (let i = 0; i < h-1; i+=1) {
    p = p.concat(" ");
}
p = p.concat("* ");

// Imprime o corpo
for (let i = 0; i < h-1; i+=1) {
    // console.log(p,i);    //debug
    console.log(p);
    p = p.substr(0, p.length-1);    // remove o ultimo*
    if(i) p = p.concat(" ");        // na segunda linha não põe o espaço extra
    p = p.concat(" *");             // add * no fim
    p = p.substr(1);                // remove p[0]   
}
//Imprime a base
p = "";
for (let i = 0; i < b; i+=1) p = p.concat("*");
// console.log(p,h-1);      //debug
console.log(p);