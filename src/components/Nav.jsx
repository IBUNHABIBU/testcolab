import React from 'react';
import { NavLink } from 'react-router-dom';
import list from '../constants';

const Nav = () => (
  <div className="nav">
    <NavLink to="/" className="nav-link">Logo</NavLink>
    {
      list.map((list) => (
        <NavLink
          to={list.path}
          key={list.id}
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          {list.name}
        </NavLink>
      ))
    }
  </div>
);

export default Nav;
