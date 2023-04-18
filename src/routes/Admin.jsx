import React, { useState } from 'react';

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
      <div className="modal">
        <div className="modal__content">
          <span className="close" onClick={handleCloseProject}>&times;</span>
          <h3>Add Skill</h3>
          <form className="form">
            <label htmlFor="skill-name">Project title:</label>
            <input type="text" id="skill-name" name="title" />
            <label htmlFor="skill-name">Githb Link:</label>
            <input type="text" id="skill-name" name="github" />
            <label htmlFor="skill-name">Live Demo link:</label>
            <input type="text" id="skill-name" name="demo" />
            <label htmlFor="skill-name">Languages used:</label>
            <input type="text" id="skill-name" name="languages" />
            <button type="submit" className="btn">Add Skill</button>
          </form>
        </div>
      </div>
      )}
    </div>
  );
};

export default Admin;
