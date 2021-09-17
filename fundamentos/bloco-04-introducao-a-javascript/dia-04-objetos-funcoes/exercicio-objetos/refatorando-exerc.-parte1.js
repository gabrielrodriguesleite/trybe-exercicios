function soma (a, b) {return a + b};
function subtracao (a, b) {return a - b};
function multiplicacao (a, b) { return a * b};
function divisao (a, b) { return a / b};
function modulo (a, b) {return a % b};
function maior (a, b) {
    if (a > b) return a;
    else return b;
}
function maior_de_tres(a,b,c) {
    if (a > b && a > c) return a;
    else if (b > a && b > c) return b;
    else return c;
}
function positivo_ou_negativo(a) {
    if (a === 0) return "zero";
    else if (a > 0) return "positive";
    else return "negative";
}
function triangulo (a,b,c) {
    if (a <= 0 || b <= 0 || c <= 0) return false;
    if ((a+b+c) === 180 ) return true;
    else return false;
}
function xadrez_movimento(p) {

    switch (p.toLowerCase()) {
        case "cavalo":
            return "L";
            break;
        case "bispo":
            return "X";
            break;
        case "torre":
            return "+";
            break;
        case "dama":
            return "*";
            break;
        case "rei":
            return "*1";
            break;
        case "peao":
            return "V1";
            break;
        default:
            return "Peça não reconhecida";
            break;
    }
}

function nota2conceito(n) {
    if (0 > n || n > 100) return "Valor incorreto" ;
    else if (n >= 90) return "A" ;
    else if (n >= 80) return "B" ;
    else if (n >= 70) return "C" ;
    else if (n >= 60) return "D" ;
    else if (n >= 50) return "E" ;
    else if (n >=  0) return "F" ;
}

function eh_par(a,b,c) {
    if((a % 2 == 0) || (b % 2 == 0) || (c % 2 == 0)) {
        return true;
    } else return false;
}

function eh_impar(a,b,c) {
    if((a % 2 != 0) || (b % 2 != 0) || (c % 2 != 0)) {
        return true;
    } else return false;
}

function da_lucro ( custo, valor) {
    let lucro;
    if (custo < 0 || valor < 0) console.log("Erro: valores abaixo de 0")
    else {
        lucro = (valor - custo - custo*0.2)*1000;
        console.log("Lucro pela venda de 1000un: R$",lucro)
    }
}

function salario_liquido (bruto) {
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
}

console.log(positivo_ou_negativo(-10));
console.log(triangulo(90,30,0));
console.log(xadrez_movimento("rei"));
console.log(nota2conceito(40));
console.log(eh_par(3));
console.log(eh_impar(3));
da_lucro(100,321);
salario_liquido(3100);