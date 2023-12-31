import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [error, setError] = useState('');

 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/login', { email, password });
      localStorage.setItem('user', JSON.stringify(response.data));
      window.location.href = '/';
    } catch (error) {
      setError(error.response.data);
    }
 };

 return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
 );
};

export default Login;