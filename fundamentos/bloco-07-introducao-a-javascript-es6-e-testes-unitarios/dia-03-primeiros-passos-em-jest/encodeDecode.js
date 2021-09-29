// Codifica as vogais
let ksig = [undefined, 'a', 'e', 'i', 'o', 'u'];

// Substitui caractere por numeral
function substituiVogal(a, b) {
  let r = [];
  for (let i of a) {
    if (b.indexOf(i) < 1) r.push(i);
    else r.push(b.indexOf(i));
  }
  return r;
}

// Substitui numeral por caractere
function substituiNumeral(a, b) {
  let r = [];
  for (let i of a) {
    if (i > 0) r.push(b[i]);
    else r.push(i);
  }
  return r;
}

// Desafio 9
function encode(s) {
  s = s.toLocaleLowerCase().split('');
  return substituiVogal(s, ksig).join('');
}

function decode(s) {
  s = s.split('');
  return substituiNumeral(s, ksig).join('');
}

module.exports = {
  decode,
  encode
};