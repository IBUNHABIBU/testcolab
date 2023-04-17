import React from 'react';
import Navlink from 'react-router-dom';
import list from '../constants';

const Nav = () => (
  <div>
    <nav>
      <ul>
        {
            list.map(({ id, name }) => (
              <li key={id}>
                {' '}
                {name}
                {' '}
              </li>
            ))
        }
      </ul>
    </nav>
  </div>
);

export default Nav;
