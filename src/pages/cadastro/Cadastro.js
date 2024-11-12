import React, { useState } from 'react';
import './Cadastro.css';

const Cadastro = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password);
    setName('');
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="cadastroContainer">
      <form onSubmit={handleSubmit}>
          <h1>Cadastro</h1>
          <input type="text" name="" placeholder="Nome" id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
          <input type="email" name="" placeholder="E-mail" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <input type="text" name="" placeholder="Usuario" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
          <input type="password" name="" placeholder="Senha" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          <input type="submit" name="" value="Cadastrar"/>
      </form>
    </div>
  );
};

export default Cadastro;
