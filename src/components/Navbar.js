import React from 'react';

function Navbar({id}) {
  return (
    <nav id={id} className='navbar'>
      <div className='navbar__text'>
        <div className='logo'>
          <img src='/img/logoNN.png' alt='logo' />
        </div>
        <ul className='navbar__ul'>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#list">List</a>
          </li>
          <li>
            <a href="#shop">Shop</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
