import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkUser } from '../redux/actions/fetch';

const About = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUser());
  }, []);

  return (
    <div className="about">
      <h1 className="about__title">Hi there, I'm Salum Habibu 👋</h1>
      <p className="about__description">
        I'm a remote Full-Stack Software developer and Electrical Engineer
      </p>
    </div>
  );
};

export default About;
