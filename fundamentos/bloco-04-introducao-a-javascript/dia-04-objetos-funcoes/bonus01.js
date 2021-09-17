// Conversor número romano pra decimal
// https://www.math-salamanders.com/roman-numeral-translation.html
// curiosidade, números romanos com linha superior significa x1000

function charRom2val(c){
    switch(c.toLowerCase()) {
        case 'i': return 1;
        case 'v': return 5;
        case 'x': return 10;
        case 'l': return 50;
        case 'c': return 100;
        case 'd': return 500;
        case 'm': return 1000;
        default: return 0;       
    }
}

function Rom2val(r) {
    let valor = 0;
    r = r.split(""); //str2arr
    for (let i in r) r[i] = charRom2val(r[i]); //char2val

    // da esquerda pra direita
    let ultimo = 0;
    for (let i = r.length-1; i >= 0; i-=1) {
        if (r[i] >= ultimo) {
            valor += r[i];                      //soma se for maior
            ultimo = r[i];                      //atualiza o ultimo encontrado
        } else valor -= r[i];                   //subtrai caso for menor
    }
    return valor;
}

// console.log(charRom2val('m'));
console.log(Rom2val('lxxxvii')); //87
console.log(Rom2val('MCDXC'));  //1490
console.log(Rom2val('MMCMLXXIII')) //2973
