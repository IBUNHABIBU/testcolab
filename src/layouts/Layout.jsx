import React from 'react';
import Nav from '../components/Nav';

const Layout = (Component) => ({ ...props }) => (
  <div className="layout">
    <Nav />
    <div className="container">
      <div className="main-container">
        <Component {...props} />
      </div>
    </div>
  </div>
);

// Layout.displayName = 'Layout';
export default Layout;
