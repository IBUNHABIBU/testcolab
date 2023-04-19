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
  
  return (
    <div className="admin">
      <h2>Admin Panel</h2>
      <div className="admin__buttons">
        <button className="btn skills" type="submit" onClick={handleClick}>Add Skills</button>
        <button className="btn project" type="submit" onClick={handleClickProject}>Add Project</button>
      </div>

      {skillsModal && (
        
      )}
      {projectModal && (
        <AddProject />
      )}
    </div>
  );
};

export default Admin;
