import React, { useState } from 'react';

const Admin = () => {
    const [modalOpen, setmodalOpen] = useState(false);
    const handleClick = 
    return(
  <div className="admin">
    <h2>Admin Panel</h2>
    <div className="admin__buttons">
      <button className="btn skills" type="submit" onClick={handleClick}>Add Skills</button>
      <button className="btn project" type="submit">Add Project</button>
    </div>
  </div>
)
};

export default Admin;
