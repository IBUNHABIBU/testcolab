import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../redux/actions/fetch';

const Skills = () => {
  const skills = useSelector((state) => state.skills);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSkills());
  }, []);

  return (
    <div className="skills">
      <h2 className="skills__title">Skills</h2>
      <ul className="skills__list">
        <li className="skills__list__item">HTML</li>
        <li className="skills__list__item">CSS</li>
        <li className="skills__list__item">JavaScript</li>
        <li className="skills__list__item">React</li>
        <li className="skills__list__item">Node.js</li>
      </ul>
    </div>
  );
};

export default Skills;
