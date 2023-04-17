import React from 'react';
import { Navlink } from 'react-router-dom';
import list from '../constants';

const Nav = () => (
  <div className="nav">
    {
      list.map((list) => (
        <Navlink
          to={list.path}
          key={list.id}
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          {list.name}
        </Navlink>
      ))
    }
  </div>
);

export default Nav;
