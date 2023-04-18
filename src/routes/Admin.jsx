import React, { useState } from 'react';

const Admin = () => {
  const [skillsModal, setSkillsModal] = useState(false);
  const [projectModal, setProjectModal] = useState(false);
  const handleClick = () => {
    setSkillsModal(true);
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
        <button className="btn project" type="submit">Add Project</button>
      </div>

      {skillsModal && (
        <div className="modal">
          <div className="modal__content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h3>Add Skill</h3>
            <form>
              <label htmlFor="skill-name">Skill Name:</label>
              <input type="text" id="skill-name" name="skill-name" />

              <label htmlFor="skill-level">Skill Level:</label>
              <input type="range" id="skill-level" name="skill-level" min="1" max="5" />

              <button type="submit">Add Skill</button>
            </form>
          </div>
        </div>
      )}
       {projectModal && (
        <div className="modal">
          <div className="modal__content">
            <span className="close" onClick={handleCloseProject}>&times;</span>
            <h3>Add Skill</h3>
            <form>
              <label htmlFor="skill-name">Skill Name:</label>
              <input type="text" id="skill-name" name="skill-name" />

              <label htmlFor="skill-level">Skill Level:</label>
              <input type="range" id="skill-level" name="skill-level" min="1" max="5" />

              <button type="submit">Add Skill</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
