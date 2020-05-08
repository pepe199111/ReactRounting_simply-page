import React from 'react';
import '../styles/Navigation.css'
import { NavLink } from 'react-router-dom';

const List = [
  { name: 'start', path: '/', exact: true },
  { name: 'products', path: '/products' },
  { name: 'contact', path: '/contact' },
  { name: 'admin panel', path: '/admin' },
]

const Navigation = () => {

  const menu = List.map(item => (
    <li key={item.name}>
      <NavLink exact={item.exact ? item.exact : false} to={item.path}>{item.name}</NavLink>
    </li>
  ))

  return (
    <nav className='main'>
      <ul>
        {menu}
      </ul>
    </nav>
  );
}

export default Navigation;