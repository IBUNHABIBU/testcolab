import React from 'react';
import { NavLink } from 'react-router-dom';
import list from '../constants';

const Nav = () => (
  <div className="nav">
    <div className="logo">
      <NavLink to="/" className="nav__link">Logo</NavLink>
    </div>
    <div className="nav__lists">
      {
        list.map((list) => (
          <NavLink
            to={list.path}
            key={list.id}
            className={({ isActive }) => (isActive ? 'nav__link active' : 'nav__link')}
          >
            {list.name}
          </NavLink>
        ))
      }
    </div>
  </div>
);

export default Nav;
