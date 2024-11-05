// src/Signin.js
import React, { useState } from 'react';
import axios from 'axios';

const Signin = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/login', { name, password });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Signin failed');
    }
  };
//layout for page
  return (
    <div>
      <h2>Signin</h2>
      <form onSubmit={handleSignin}>
        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Signin</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Signin;

