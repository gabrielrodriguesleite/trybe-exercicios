// Exercicio - 1 palíndromo?  (true/false)
function palindromo(p) { 
  //https://www.geeksforgeeks.org/reverse-a-string-in-javascript/
  if ( p == p.split('').reverse().join('') ) return true;
  else return false;    
}

// Exercício - 2 retorno o indice do maior entre os valores da array
function o_maior_valor_da_array(a) {
  let o_cara = a[0];
  for (let v in a) if(a[v] > o_cara ) o_cara = a[v];
  return a.indexOf(o_cara);
}

// Exercício - 3 retorne o indice do menor entre os valores a array
function o_menor_valor_da_array(a) {
  let o_cara = a[0];
  for (let v in a) if(a[v] < o_cara ) o_cara = a[v];
  return a.indexOf(o_cara);
}

// Exercício - 4 retorne o nome com o maior comprimento
function o_maior_nome(a) {
  let o_cara = a[0];
  for (let v in a) if( a[v].length > o_cara.length ) o_cara = a[v];
  return o_cara;
}

// Exercício - 5 retorne o número que mais se repete na array
// Conforme o gabarito v.1
function o_inteiro_que_mais_repete(a) {
  let vencedor_q = 0;                         //quantos o indice vencedor possui
  let temp_quant = 0;                         //quantos o indice em teste possui
  let indice_vencedor = 0;                    //o indice vencedor
  for (let i in a) {                          //pra cada indice
      for (let j in a) {                      //compara com cada indice
          if(a[i] === a[j]) temp_quant += 1;  //incrementa quando é igual
      }    
      if (temp_quant > vencedor_q) {          //se a quantidade atual é maior
          vencedor_q = temp_quant;            //atualiza o quantidade vencedor
          indice_vencedor = i;                //atualiza indice vencedor
      }
      temp_quant = 0;                         //zera quantidade em teste
  }
  return a[indice_vencedor];                  //retorna o valor do vencedor
}

// Conforme o gabarito v.2
function maisRepetido(a) {
  let num = {};                           //Cria um dicionario onde a chave é o valor de 'a' e o valor é a quantidade
  for(let i in a) {                       //para cada valor em 'a'
    let v = a[i];             
    if(num[v] === undefined) num[v] = 1;  //se a chave ainda não existe, ela vale 1
    else num[v] = num[v] + 1;             //incrementa o valor
  }
  let quantidade = 0;                     //agora decide qual tem mais repetição
  let valor = 0;                          //o vencedor
  for (let p in num) {                    //percorre os valores
    if(quantidade < num[p]) {             //compara as repetições
      quantidade = num[p];                //atualiza quando encontra um maior
      valor = p;                          //atualiza o vencedor
    }
  }
  return valor;                           //retorna o vencedor
}

// Exercício - 6 some de 1 até o interio i
function somatorio(i) {
  let s = 0;
  for (let j = i; j > 0; j -=1) s += j;
  return s;
}

// Exercício - 7 - string termina com a string? (true/false)
function terminaCom(s,sFim) {
  for (let i in sFim) {
    if (sFim[sFim.length-i] !== s[s.length-i]) return false
  }
  return true;
}

// console.log(palindromo('arara'));
// console.log(palindromo('developer'));
// console.log(o_maior_valor_da_array([2,4,6,7,10,1]));
// console.log(o_menor_valor_da_array([2,4,6,7,10,0,-3]));
// console.log(o_maior_nome(['José','Lucas','Nádia','Fernanda','Cairo','Joana']));

// console.log(
//   o_inteiro_que_mais_repete(
//       [2,3,2,5,8,2,3]
// ));
//console.log(maisRepetido([2,3,2,5,8,2,3]));

// console.log(somatorio(5));

console.log(terminaCom('trybe','be'));
console.log(terminaCom('foaoFernando','fernan'));