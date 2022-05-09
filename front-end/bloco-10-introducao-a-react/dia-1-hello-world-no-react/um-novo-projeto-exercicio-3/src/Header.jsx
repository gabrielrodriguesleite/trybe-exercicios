import React from 'react'
// import './App.css';

class Header extends React.Component {
  render() {
    return (
      <>
        {/* <h1 className="cabeca">Conteúdos de Front-End</h1> */}
        <h1 className={this.props.className}>Conteúdos de Front-End</h1>
      </>
    );
  }
}

export default Header;