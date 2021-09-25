const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function attribuiAtributo(ob, chave, valor) {
  ob[chave] = valor;
}
// 1.
attribuiAtributo(lesson2, 'turno', 'noite');
// console.log(lesson2);

// 2.
function listaKeys(ob) {
  return Object.keys(ob);
}
console.log(listaKeys(lesson2));

// 3.
function tamanhoOb(ob) {
  return Object.keys(ob).length;
}

console.log(tamanhoOb(lesson2));

// 4.
function listaValues(ob) {
  return Object.values(ob);
}

console.log(listaValues(lesson2));


// 5.
const allLessons = Object.assign({},{lesson1: lesson1},
  {lesson2: lesson2},{lesson3: lesson3});

console.log(allLessons);

// 6.
// console.log(allLessons.lesson1.numeroEstudantes +
// allLessons.lesson2.numeroEstudantes +
// allLessons.lesson3.numeroEstudantes);

function totalEstudantes(ob) {
  //return Object.keys(ob);
  let soma = 0;
  for (const i of Object.keys(ob)) {
    soma = soma + ob[i].numeroEstudantes;
  }
  return soma;
}

console.log(totalEstudantes(allLessons));

// 7.
function getValueByNumber(ob, i) {
  return ob[Object.keys(ob)[i]]
}

console.log(getValueByNumber(lesson1, 0));

// 8.
function verifyPair(ob, ch, va) {
  if (ob[ch] === va) return true;
  else return false;
}

console.log(verifyPair(lesson3, 'turno', 'noite')); //true
console.log(verifyPair(lesson3, 'materia', 'Maria Clara')); //false

/*
1. Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
3. Crie uma função para mostrar o tamanho de um objeto.
4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo: 
*/
          //
        //  //

////      ////    //    //  //    //    ////
//  //  //    //  //    //  //    //  //
////    //    //  ////  //  //    //    ///
//  //  //    //  //  ////  //    //      //
////      ////    //    //    ////    ////


// 1. Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

function somaVal(ob, ks) {
  let soma = 0;
  for (let i of Object.keys(ob)) {
    if (Object.values(ob[i]).includes(ks)) {
      soma = soma + ob[i]['numeroEstudantes'];
    }
  }
  return soma;
}

console.log(somaVal(allLessons, 'Matemática'))



// 2. Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:


function createReport(ob, val) {
  let report = {
    professor: val,
    aulas: [],
    estudantes: 0,
  };
  for (let i of Object.keys(ob)) {
    if (ob[i]['professor'] === val) {
      report.aulas.push(ob[i]['materia'])
      report.estudantes = report.estudantes + ob[i]['numeroEstudantes'];
    }
  }
  return report;
}

console.log(createReport(allLessons, 'Maria Clara'))
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */