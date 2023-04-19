import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSkills } from '../redux/actions/fetch';

const Skills = () => {
  const skills = useSelector((state) => state.skills);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSkills());
  }, []);

  return (
    <div className="skills">
      <h2 className="skills__title">Skills</h2>
      {
        skills.map((skill) => {
          const { id, name } = skill;
          return (
            <ul className="skills__list" key={id}>
              <li className="skills__list__item">{name}</li>
            </ul>
          );
        })
      }

    </div>
  );
};

export default Skills;
