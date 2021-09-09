function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();


// Escreva seu código abaixo.

// Exercício 01
function createDaysOfMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const ul = document.querySelector('#days');
  for (let d of dezDaysList){
    let li = document.createElement('li');
    li.innerText = d;
    li.classList.add('day');
    if ([24,25,31].includes(d)) li.classList.add('holiday');
    if ([4,11,18,25].includes(d)) li.classList.add('friday');
    ul.appendChild(li);
  };
};

createDaysOfMonth();

// Exercício 02
function feriado(f){
  let b = document.createElement('button');
  b.innerText = f;
  b.id = 'btn-holiday';

  // Exercício 03
  b.addEventListener('click', function () {
    let feriados = document.querySelectorAll('.holiday');
    for (let i of feriados) {
      if (i.style.backgroundColor == 'rgb(255, 0, 0)') { // MUITISSIMO IMPORTANTE OS ESPAÇOS
        i.style.backgroundColor = 'rgb(238,238,238)';
      } else {
        i.style.backgroundColor = 'rgb(255,0,0)';
      }
    } 
  });
  return b;
}

document.querySelector('.buttons-container').appendChild(feriado('Feriados'));

// Exercício 04
function sexta(s) {
  let b = document.createElement('button');
  b.innerText = s;
  b.id = 'btn-friday';
  // Exercício 05
  b.addEventListener('click', function () {
    let sextas = document.querySelectorAll('.friday');
    for (let i of sextas) {
      if (i.innerText != 'Sextou!') {
        i.value = i.innerText;
        i.innerText = 'Sextou!';
      } else {
        i.innerText = i.value;
      }
    } 
  });
  return b;
}

document.querySelector('.buttons-container').appendChild(sexta('Sexta-feira'));

// Exercício 06
document.addEventListener('mouseover', function (event) {
  if(event.target.classList.contains('day')) {
    event.target.style.fontSize = '2em';
  }
})

document.addEventListener('mouseout', function (event) {
  if(event.target.classList.contains('day')) {
    event.target.style.fontSize = '';
  }
})


// Exercício 07
function addTarefa(t) {
  let tarefa = document.createElement('span');
  tarefa.innerText = t;
  document.querySelector('.my-tasks').appendChild(tarefa);
}

// Exercício 08
function addLegenda(cor) {
  let legenda = document.createElement('div');
  legenda.style.backgroundColor = cor;
  legenda.classList.add('task');
  document.querySelector('.my-tasks').appendChild(legenda);
}

// Exercício 09
function addEvento(event) {
  if (event.target.classList.contains('task')) {
    if (event.target.classList.contains('selected')){
      event.target.classList.add('selected');
    } else {
      event.target.classList.remove('selected');
    }
  }
}

// Exercício 10
document.addEventListener('click', function (event) {
  if (document.querySelector('.selected') != null ) {
    if (event.target.classList.contains('day')) {
      if (event.target.style.backgroundColor == 'rgb(119, 119, 119)') {
        event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
      } else {
        event.target.style.backgroundColor = 'rgb(119,119,119)';
      }
    } 
  } 
})

// BÔNUS
document.querySelector('#task-input').addEventListener('keyup', function (event) {
  if(event.code == 'Enter'){
    console.log(document.querySelector('#task-input'))
    addCompromisso();
  }
})

document.querySelector('#btn-add').addEventListener('click', function (event) {
    addCompromisso();
})

function addCompromisso() {
  if (document.querySelector('#task-input').value == '') {
    alert("Erro!\nEscreva seu compromisso então clique em Adicionar.");
  } else {
    addTarefa(document.querySelector('#task-input').value);
  }
}