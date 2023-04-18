import React, { useState } from 'react';

const Admin = () => {
  const [modalOpen, setmodalOpen] = useState(false);
  const handleClick = () => {
    setmodalOpen(true);
  };

  const handleCloseModal = () => {
    setmodalOpen(false);
  }
  return (
    <div className="admin">
      <h2>Admin Panel</h2>
      <div className="admin__buttons">
        <button className="btn skills" type="submit" onClick={handleClick}>Add Skills</button>
        <button className="btn project" type="submit">Add Project</button>
      </div>

      {modalOpen && (
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
    </div>
  );
};

export default Admin;
