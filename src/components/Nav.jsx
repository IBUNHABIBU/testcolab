import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { checkUser } from '../redux/actions/fetch';
import list from '../constants';

const Nav = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  let filteredList;
  useEffect(() => {
    checkUser();
  }, []);
  if(!user.logged_in) {
    filteredList = list.filter((list) => list.name !== 'Admin Panel');
  } else {
    filteredList = list;
  }
  return (
    <div className="nav">
      <div className="nav__logo">
        <span />
        <NavLink to="/" className="link">Engineer</NavLink>
      </div>
      <div className="nav__lists">
        {
          
        filteredList.map((list) => (
          <NavLink
            to={list.path}
            key={list.id}
            className={({ isActive }) => (isActive ? 'link link--active' : 'link')}
          >
            {list.name}
          </NavLink>
        ))
      }
      <button type="submit" className="btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Nav;
