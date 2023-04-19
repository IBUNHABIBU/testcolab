import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import list from '../constants';
import { checkUser } from '../redux/actions/fetch';

const Nav = () => {
  const admin = useSelector((state) => state.user);
  console.log(admin);
  useEffect(() => {
    checkUser();
    console.log('use effect');
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
  );
};

export default Nav;
