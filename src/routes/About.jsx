import React, { useEffect } from 'react';
import { checkUser } from '../redux/actions/fetch';

const About = () => (
  <div className="about">
    <h1 className="about__title">Hi there, I'm Salum Habibu 👋</h1>
    <p className="about__description">
      I'm a remote Full-Stack Software developer and Electrical Engineer
    </p>
  </div>
);

export default About;
