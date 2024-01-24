import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', formData);
      console.log(response.data);
      // Store the token in a cookie or local storage
      // and redirect the user to the main page
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" onChange={handleChange} />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

export default Login;