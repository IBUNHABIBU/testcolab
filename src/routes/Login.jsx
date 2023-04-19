import React from 'react';

const Login = () => {
  const [userInput, setuserInput] = useState({
    email: '',
    password: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserInput((prevUserInput) => ({
      ...userInput,
      [name]: value,
    }));

    
  };
  (
  <div>
    <h1 align="center">Login</h1>
    <form className="form" onSubmit={handleSumit}>
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" name="email" onChange={handleChange}/>
      <label htmlFor="password">Password:</label>
      <input type="text" id="password" name="password" onChange={handleChange}/>
      <button type="submit" className="btn">Login</button>
    </form>
  </div>
)};

export default Login;
