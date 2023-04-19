import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProject } from '../redux/actions/actions';
import AddProject from '../components/AddProject';

const Admin = () => {
  const [skillsModal, setSkillsModal] = useState(false);
  const [projectModal, setProjectModal] = useState(false);
  


  const handleClick = () => {
    setSkillsModal(true);
  };

  const handleClickProject = () => {
    setProjectModal(true);
  };

  const handleCloseModal = () => {
    setSkillsModal(false);
  };
  const handleCloseProject = () => {
    setProjectModal(false);
  };
  return (
    <div className="admin">
      <h2>Admin Panel</h2>
      <div className="admin__buttons">
        <button className="btn skills" type="submit" onClick={handleClick}>Add Skills</button>
        <button className="btn project" type="submit" onClick={handleClickProject}>Add Project</button>
      </div>

      {skillsModal && (
        <div className="modal">
          <div className="modal__content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h3>Add Skill</h3>
            <form className="form">
              <label htmlFor="skill-name">Skill Name:</label>
              <input type="text" id="skill-name" name="skill-name" />

              <button type="submit" className="btn">Add Skill</button>
            </form>
          </div>
        </div>
      )}
      {projectModal && (
        <AddProject />
      )}
    </div>
  );
};

export default Admin;
