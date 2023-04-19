import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { checkUser } from '../redux/actions/fetch';

const About = () => {
  const admin = useSelector((state) => state.project);
  console.log(admin);
  useEffect(() => {
    checkUser();
    console.log('use effect');
  }, []);
  return (
  <div className="about">
    <h1 className="about__title">Hi there, I'm Salum Habibu 👋</h1>
    <p className="about__description">
      I'm a remote Full-Stack Software developer and Electrical Engineer
    </p>
  </div>
)};

export default About;
