import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { urlBase } from '../redux/actions/fetch';
import { setUser } from '../redux/actions/actions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  if (user.logged_in) {
    navigate('/admin');
  }

  const dispatch = useDispatch();
  const [userInput, setuserInput] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserInput((prevUserInput) => ({
      ...prevUserInput,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${urlBase}/sessions`, {
      user: {
        email: userInput.email,
        password: userInput.password,
      },
    },
    { withCredentials: true }).then((response) => {
      if (response.data.status === 'created') {
        dispatch(setUser(response.data));
      }
    });
  };
  return (
    <div>
      <h1 align="center">Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" onChange={handleChange} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={handleChange} />
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
