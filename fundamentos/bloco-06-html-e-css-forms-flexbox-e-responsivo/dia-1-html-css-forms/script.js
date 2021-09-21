// estados
const estados = 'Acre,Alagoas,Amapá,Amazonas,Bahia,Ceará,Espírito Santo,\
Goiás,Maranhão,Mato Grosso,Mato Grosso do Sul,Minas Gerais,Pará,Paraíba,\
Paraná,Pernambuco,Piauí,Rio de Janeiro,Rio Grande do Norte,Rio Grande do Sul,\
Rondônia,Roraima,Santa Catarina,São Paulo,Sergipe,Tocantins'.split(',');
function carregaEstados() {
  for (let i = 0; i < estados.length; i += 1) {
    let o = document.createElement('option');
    o.value = estados[i];
    o.innerText = estados[i];
    document.querySelector('#input-estado').appendChild(o);
  }
}

// função erro!
function erro(n) {
  console.log('erro',n);
  if (n === 1) {
    console.log('data informada está incorreta')

    document.querySelector('#input-data-inicio').scrollIntoView();
    document.querySelector('#input-data-inicio').style.border = '2px red solid';
    document.querySelector('#titulo-erro').innerText = 'Erro na Data';
    document.querySelector('#texto-erro').innerText = 'A data informada é inválida.';
    document.querySelector('#container-erro').classList.remove('oculto');
    document.querySelector('#blackout-modal').classList.remove('oculto');
  }
}

// data inicio [regex = expressão regular ]
const rx = /([0-9]{2})\/([0-9]{2})\/([0-9]{2})/
function testDataCargo() {
  const data = rx.exec(document.querySelector('#input-data-inicio').value);
  if (data != null) console.log(`${data[1]}\/${data[2]}\/${data[3]}`);
  erro(1);
}

// enviar → criar div consolidando os dados inseridos
// mostrar erros em uma mensagem de erro na div

function configurar() {

  // Oculta diálogos modais - funcionou melhor inline (segura essa linter!)
  // Acabei usando a classe oculto. Talvez seja preciso setar o display:block|flex
  // document.querySelector('#container-erro').style.display = 'none';
  // document.querySelector('#container-resultado').style.display = 'none';
  // document.querySelector('#blackout-modal').style.display = 'none';
  // document.querySelector('#blackout-modal').style.opacity = '0.8';
  carregaEstados();
  document.querySelector('#botao-enviar').addEventListener('click', testDataCargo);
}

window.onload = configurar;

// deixar uma linha no final pra acostumar

