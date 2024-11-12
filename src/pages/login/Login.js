import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="loginContainer">
        <form  onSubmit={handleSubmit}>
            <h1>Login</h1>
              <input id="email" type="email" name="" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
              <input id="password" type="password" name="" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
          
            <input type="submit" name="" value="Login"></input>
            <Link to="/cadastro">Cadastre-se</Link>
        </form>

    </div>
  );
};

export default Login;
