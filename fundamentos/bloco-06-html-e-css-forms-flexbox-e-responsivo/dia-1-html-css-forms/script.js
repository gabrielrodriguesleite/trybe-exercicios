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

// data inicio [regex = expressão regular ]
const rx = /([0-9]{2})\/([0-9]{2})\/([0-9]{2})/
function testDataCargo() {
  const data = rx.exec(document.querySelector('#input-data-inicio').value);
  console.log(`${data[1]}\/${data[2]}\/${data[3]}`);
}

// enviar → criar div consolidando os dados inseridos
// mostrar erros em uma mensagem de erro na div

function configurar() {
  carregaEstados();
  document.querySelector('#botao-enviar').addEventListener('click', testDataCargo);
}

window.onload = configurar;

// deixar uma linha no final pra acostumar

