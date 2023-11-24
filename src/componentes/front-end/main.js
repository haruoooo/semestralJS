// main.js
import React from 'react';
import ReactDOM from 'react-dom';
import Cabeçalho from './cabeçalho';
import Home from './home';

const Main = () => {
  return (
    <div>
      <Cabeçalho />
      <Home />
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));

export default Main
