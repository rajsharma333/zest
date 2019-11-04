import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="doc-header">
      <div class="logo">ZEST</div>
      <ul>
        <li><NavLink to="/js">Javascript</NavLink></li>
        <li><NavLink to="/es6">ES-6</NavLink></li>
        <li><NavLink to="/react">React</NavLink></li>
        <li><NavLink to="/redux">Redux</NavLink></li>
      </ul>
    </header>
  );
}

export default Header;
