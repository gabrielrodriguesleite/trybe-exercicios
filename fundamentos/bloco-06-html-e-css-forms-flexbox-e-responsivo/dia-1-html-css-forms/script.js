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
function erro(titulo,texto,elemento) {
  if (titulo) document.querySelector('#titulo-erro').innerText = titulo;
  else document.querySelector('#titulo-erro').innerText = 'Erro!';

  if (texto) document.querySelector('#texto-erro').innerText = texto;
  else document.querySelector('#texto-erro').innerText = 'Algo saiu errado.';
  
  if (elemento) {
    document.querySelector(elemento).scrollIntoView();
    document.querySelector(elemento).style.border = '2px red solid';
  }
  document.querySelector('#container-erro').classList.remove('oculto');
  document.querySelector('#blackout-modal').classList.remove('oculto');
}

// botão OK do erro
function okErro() {
  document.querySelector('#container-erro').classList.add('oculto');
  document.querySelector('#blackout-modal').classList.add('oculto');
  document.querySelector('#container-resultado').classList.add('oculto');
}

// enviar → criar div consolidando os dados inseridos
// mostrar erros em uma mensagem de erro na div

function validaNome() {
  const regex = /^[a-zA-Z ]{2,40}$/;
  const texto = document.querySelector('#input-name').value;
  if (regex.test(texto)) return texto;
  else erro('Erro no nome.','Corrija o nome.','#input-name');
}

function validaEmail() {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const email = document.querySelector('#input-email').value;
  if (re.test(email)) return email;
  else erro('Erro no email.','Corrija o email','#input-email');
}

function validaCPF() {
  const rx = /^[0-9]{11}/;
  const cpf = document.querySelector('#input-cpf').value;
  if (rx.test(cpf)) return cpf;
  else erro('Erro no cpf.', 'Corrija o cpf.', '#input-cpf');
}

function validaEndereco() {
  const endereco = document.querySelector('#input-endereco').value;
  if (endereco.length > 2) return endereco;
  else erro('Erro no endereço.', 'Corrija o endereço.', '#input-endereco');
}

function validaCidade() {
  const cidade = document.querySelector('#input-cidade').value;
  if (cidade.length > 2) return cidade;
  else erro('Erro na cidade.', 'Corrija a cidade.', '#input-cidade');
}

function validaEstado() {
  const estado = document.querySelector('#input-estado').value;
  return estado;
}

function validaRedidencia() {
  if (document.querySelector('#radio-casa').checked) return 'Casa';
  if (document.querySelector('#radio-apartamento').checked) return 'Apartamento';
}

function validaResumo() {
  const resumo = document.querySelector('#input-resumo').value;
  if (resumo.length > 10) return resumo;
  else erro('Erro no resumo.', 'Corrija o resumo.', '#input-resumo');
}

function validaCargo() {
  const cargo = document.querySelector('#input-cargo').value;
  if (cargo.length > 2) return cargo;
  else erro('Erro no cargo.', 'Corrija o cargo.', '#input-cargo');
}

function validaDescricao() {
  const descricao = document.querySelector('#input-descricao-cargo').value;
  if (descricao.length > 2) return descricao;
  else erro('Erro na descricao.', 'Corrija a descricao.', '#input-descricao-cargo');
}

const rx = /([0-9]{2})\/([0-9]{2})\/([0-9]{2})/
function testDataCargo() {
  const data = rx.exec(document.querySelector('#input-data-inicio').value);
  if (data === null) erro(1,'Erro na Data','A data informada é inválida.','#input-data-inicio');
  else return `${data[1]}\/${data[2]}\/${data[3]}`;
}

// preenche e mostra o resultado.
function preencheResultado(f) {
  console.log('formulario ok \n',f);

  document.querySelector('#nome').innerText = f[0];
  document.querySelector('#email').innerText = f[1];
  document.querySelector('#cpf').innerText = f[2];
  document.querySelector('#endereco').innerText = f[3];
  document.querySelector('#cidade').innerText = f[4];
  document.querySelector('#estado').innerText = f[5];
  document.querySelector('#residencia').innerText = f[6];
  document.querySelector('#resumo').innerText = f[7];
  document.querySelector('#cargo').innerText = f[8];
  document.querySelector('#descricao').innerText = f[9];
  document.querySelector('#inicio').innerText = f[10];

  document.querySelector('#container-resultado').classList.remove('oculto');
  document.querySelector('#blackout-modal').classList.remove('oculto');
  
}

// VALIDAÇÕES
function validacao() {
  const formulario = [
    validaNome(),
    validaEmail(),
    validaCPF(),
    validaEndereco(),
    validaCidade(),
    validaEstado(),
    validaRedidencia(),
    validaResumo(),
    validaCargo(),
    validaDescricao(),
    testDataCargo()
  ] // só mostra se tudo estiver ok
  //se não, retorna um erro.
  // console.log(formulario);
  for (let i of formulario) if (i === undefined) return;
  preencheResultado(formulario);
}

function configurar() {
  // Oculta diálogos modais - funcionou melhor inline (segura essa linter!)
  // Acabei usando a classe oculto. Talvez seja preciso setar o display:block|flex
  // document.querySelector('#container-erro').style.display = 'none';
  // document.querySelector('#container-resultado').style.display = 'none';
  // document.querySelector('#blackout-modal').style.display = 'none';
  // document.querySelector('#blackout-modal').style.opacity = '0.8';
  carregaEstados();
  document.querySelector('#botao-enviar').addEventListener('click', validacao);
  document.querySelector('#botao-erro').addEventListener('click', okErro);
  document.querySelector('#botao-resultado').addEventListener('click', okErro);
}

window.onload = configurar;

// todas as expressões regulares disponíveis em stackoverflow.com
// deixar uma linha no final pra acostumar

