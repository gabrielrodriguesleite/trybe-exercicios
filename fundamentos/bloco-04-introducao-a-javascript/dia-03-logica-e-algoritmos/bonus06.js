// Imprima se o número é primo ou não usando for

numero = 3;
primo = true;
for (let i = 2; i <  numero; i += 1) {
    if ((numero % i) == 0) primo = false;
}

if (primo) console.log(numero, "é um número primo.");
else console.log(numero, "não é um número primo.");