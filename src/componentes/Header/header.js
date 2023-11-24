import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Header = () => {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/usuarios');
        console.log('Response:', response.data); 

        const usuário = response.data.usuarios[0];

        setEmail(usuário.email);
        setNome(usuário.nome);
      } catch (error) {
        console.error('Erro:', error.response || error);
      }
    };

    fetchData();
  }, []);

  console.log('Renderizando Header com nome:', nome, 'e email:', email); 

  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default Header;
