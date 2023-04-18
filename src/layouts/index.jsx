import React from 'react';
import Nav from '../components/Nav';

const layout = (Component) => ({ ...props }) => (
  <div className="layout">
    <Nav />
    <div className="container">
      <div className="main-container">
        <Component {...props} />
      </div>
    </div>
  </div>
);

layout.displayName = 'layout';
export default layout;
