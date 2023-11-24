import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.scss';
import styled from 'styled-components';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3001/usuarios');
      const data = await response.json();

      const usuarioValido = data.find((user) => user.email === email && user.senha === senha);

      if (usuarioValido) {
        const usuario = { id: usuarioValido.id, nome: usuarioValido.nome, email: usuarioValido.email, senha: usuarioValido.senha };
        onLogin(usuario);
        navigate('/main');
      } else {
        setErrorMessage('Seus dados estão incorretos. Confira-os.');
      }
    } catch (error) {
      console.error('Erro:', error);
      setErrorMessage('Erro ao tentar fazer login. Tente novamente mais tarde.');
    }
  };

  return (
    <StyledLoginContainer>
      <StyledLoginBox>
        <StyledLoginTitle>LOGIN</StyledLoginTitle>
        <StyledInputField
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledInputField
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <StyledLoginButton onClick={handleLogin}>Entrar</StyledLoginButton>
        {errorMessage && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
      </StyledLoginBox>
    </StyledLoginContainer>
  );
};

const StyledLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 95vh;
`;

const StyledLoginBox = styled.div`
  background-color: #808080;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 150px;
  width: 850px;
  text-align: center;
`;

const StyledLoginTitle = styled.h2`
  background-color: transparent;
  font-size: 40px;
  margin-bottom: 20px;
  color: white;
`;

const StyledInputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 25px;
  border: 1px solid;
  border-radius: 20px;

  &::placeholder {
    color: white;
  }
`;

const StyledLoginButton = styled.button`
  background-color: #000080;
  color: white;
  padding: 10px;
  width: 100px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.25s;

  &:hover {
    background-color: #003366;
  }
`;

const StyledErrorMessage = styled.p`
  background-color: transparent;
  color: white;
  margin-top: 10px;
`;

export default Login;
