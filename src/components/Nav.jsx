import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import list from '../constants';

const Nav = () => {
  useEffect(() => {
    checkAdmin()
  }, []);
  return (
  <div className="nav">
    <div className="nav__logo">
      <span />
      <NavLink to="/" className="link">Engineer</NavLink>
    </div>
    <div className="nav__lists">
      {
        list.map((list) => (
          <NavLink
            to={list.path}
            key={list.id}
            className={({ isActive }) => (isActive ? 'link link--active' : 'link')}
          >
            {list.name}
          </NavLink>
        ))
      }
    </div>
  </div>
)};

export default Nav;
