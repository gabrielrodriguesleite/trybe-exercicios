// escreva sum abaixo
const sum = (...rest) => rest.reduce((a,b)=>a+b);

console.log(sum(1,2,3,6,12)); //24