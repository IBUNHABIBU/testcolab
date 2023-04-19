import React from 'react';

const Login = () => (
  <div>
    <h1 align="center">Login</h1>
    <form className="form">
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" name="email" />
      <label htmlFor="password">Password:</label>
      <input type="text" id="password" name="password" />
      <button type="submit" className="btn">Login</button>
    </form>
  </div>
);

export default Login;
