// 1 - 5 programas um para cada operação aritmética
let a = 17;
let b = 5;
console.log("1/5 Adição:",         a,"+",b,"=", a+b);
console.log("2/5 Subtração:",      a,"-",b,"=", a-b);
console.log("3/5 Multiplicação:",  a,"*",b,"=", a*b);
console.log("4/5 Divisão:",        a,"/",b,"=", a/b);
console.log("5/5 Módulo:",         a,"%",b,"=", a%b);

// 2 - Faça um programa que retorne o maior de duas constantes
const c = 23;
const d = 645;

console.log("O maior entre", c,"e", d, "é:")
if (c > d) console.log(c); else console.log(d);

// 3 - Um programa que escolha o maior de 3:
const e = 324;
console.log("O maior entre as 3 constantes é:")
if (c > d) {
    if (c > e) console.log(c); 
    else console.log(e);
} else {
    if (e > d) console.log(e); 
    else console.log(d);
}

// 4 - positivo? negativo? ou zero?
if (e > 0) console.log("Positive");
else if (e < 0) console.log("Negative");
else console.log("Zero");

// 5 - as 3 variaveis definidas são valores de angulos internos de um triangulo?
console.log("a,b e c definem um triangulo?");
if (a+b+c == 180) console.log(true);
else console.log(false);

// 6 - qual o movimento da peça de xadrez?
let p = "Cavalo";
console.log("Xadrez, movimento para:",p,"=");

switch (p.toLowerCase()) {
    case "cavalo":
        console.log("L");
        break;
    case "bispo":
        console.log("X");
        break;
    case "torre":
        console.log("+");
        break;
    case "dama":
        console.log("*");
        break;
    case "rei":
        console.log("*1");
        break;
    case "peao":
        console.log("V1");
        break;
    default:
        console.log("Peça não reconhecida");
        break;
}

// 7 - nota 1-100 em conceito A-F
n = 0;
console.log("Valor pra conceito",n,":");
if (0 > n || n > 100) console.log("Valor incorreto");
else if (n >= 90) console.log("A");
else if (n >= 80) console.log("B");
else if (n >= 70) console.log("C");
else if (n >= 60) console.log("D");
else if (n >= 50) console.log("E");
else if (n >=  0) console.log("F");


// 8 - algum dos 3 é par?
console.log("a, b ou c é par?");
if((a % 2 == 0) || (b % 2 == 0) || (c % 2 == 0)) {
    console.log(true);
} else console.log(false);

// 9 - agora pra impar
console.log("a, b ou c é impar?");
if((a % 2 != 0) || (b % 2 != 0) || (c % 2 != 0)) {
    console.log(true);
} else console.log(false);

// 10 - custo e valor de venda, calcular o lucro por 1000 vendidos:
const custo = 100;
const valor = 321;
let lucro;
if (custo < 0 || valor < 0) console.log("Erro: valores abaixo de 0")
else {
    lucro = (valor - custo - custo*0.2)*1000;
    console.log("Lucro pela venda de 1000un: R$",lucro)
}

// 11 - Salário líquido (descontando impostos INSS e IR)
let bruto = 3000.00;
if (bruto > 0) {
    // INSS
         if (bruto > 5189.82) bruto = bruto - 570.88;
    else if (bruto > 2594.93) bruto = bruto - bruto*0.11;
    else if (bruto > 1556.95) bruto = bruto - bruto*0.09;
    else if (bruto > 0)       bruto = bruto - bruto*0.08;
    // IR
         if (bruto > 4664.68) bruto = bruto - (bruto*0.275 - 869.36);
    else if (bruto > 3751.05) bruto = bruto - (bruto*0.225 - 636.13);
    else if (bruto > 2826.65) bruto = bruto - (bruto*0.15  - 354,80);
    else if (bruto > 1903.98) bruto = bruto - (bruto*0.075 - 142.80);
    console.log("Salário líquido: R$", bruto);
} else {
    console.log("Não recebeu salário?");
}
