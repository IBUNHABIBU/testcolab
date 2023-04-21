import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const layout = (Component) => ({ ...props }) => (
  <div className="layout">
    <Nav />
    <div className="container">
      <div className="main-container">
        <Component {...props} />
      </div>
    </div>
    <Footer />
  </div>
);
export default layout;
