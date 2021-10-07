const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// function flatten() {
//   // escreva seu código aqui
//   return arrays.reduce((acc, curr) => acc.concat(curr));
// }

// SEM O .concat()
function flatten() {
  return arrays.reduce((a,c,i)=>{
    // as próximas 2 linhas são inportantes
    c.forEach((v)=>a.push(v));  // aqui é ~~criada~~ a array
    return a;                   // aqui o acumulador é atualizado
  },[]);
};

console.log(flatten());
