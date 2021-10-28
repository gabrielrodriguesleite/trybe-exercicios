import React from 'react'

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <>
        {conteudos.map((i) => <>
          <p>O Conteúdo é: {i.conteudo}</p>
          <p>Status: {i.status}</p>
          <p>Bloco: {i.bloco}</p></>)}
      </>
    );
  }
}

export default Content;