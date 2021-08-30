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
}

function nota2conceito(n) {
    if (0 > n || n > 100) console.log("Valor incorreto");
    else if (n >= 90) console.log("A");
    else if (n >= 80) console.log("B");
    else if (n >= 70) console.log("C");
    else if (n >= 60) console.log("D");
    else if (n >= 50) console.log("E");
    else if (n >=  0) console.log("F");
}

// console.log(positivo_ou_negativo(-10));
console.log(triangulo(90,30,0));
xadrez_movimento("rei");
nota2conceito(40);