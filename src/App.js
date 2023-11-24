import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './componentes/Header/header';
import Login from './componentes/Login/login';
import Main from './componentes/front-end/main';

const App = () => {
  const [usuários, setUsuários] = useState(null);

  const handleLogin = (usuários) => {
    setUsuários(usuários);
    return <Navigate to="/main" />;
  };

  const handleLogout = () => {
    setUsuários(null);
    sessionStorage.clear();
  };

  return (
    <Router>
      <div className="App">
        {usuários && (
          <Header nome={usuários.nome} email={usuários.email} onLogout={handleLogout} />
        )}
        <Routes>
          <Route
            path="/"
            element={usuários ? <div></div> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!usuários ? <Login onLogin={handleLogin} /> : <Navigate to="/" />}
          />
          <Route
            path="/header"
            element={usuários ? <Header nome={usuários.nome} email={usuários.email} onLogout={handleLogout} /> : <Navigate to="/login" />}
          />
          <Route
            path="/main"
            element={usuários ? <Main /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
