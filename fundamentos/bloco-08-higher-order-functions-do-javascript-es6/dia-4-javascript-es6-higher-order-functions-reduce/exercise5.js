const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  //return names[0].split('').reduce((a,c) => c === 'a' | c === 'A' ? a + 1 : a, 0);
  //return names.reduce((a,c)=>a+c.split('').reduce((a,c) => c === 'a' | c === 'A' ? a + 1 : a, 0),0);
  return names
    .reduce((a,c)=>a+c.split('')
    .reduce((a,c) => 'aA'.includes(c) ? a + 1 : a, 0),0);
}
console.log(containsA());