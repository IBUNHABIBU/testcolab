import React from 'react';

const Admin = () => (
  <div className="admin">
    <h2>Admin Panel</h2>
    <div className="admin__buttons">
      <button className="btn skills" type="submit">Add Skill</button>
      <button className="btn project" type="submit">Add Project</button>
    </div>
  </div>
);

export default Admin;
