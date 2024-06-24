import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as SunIcon} from './lib/icons/SunIcon.svg';
import {ReactComponent as MoonIcon} from './lib/icons/MoonIcon.svg';
import {ReactComponent as CartIcon} from './lib/icons/CartIcon.svg';
import {ReactComponent as BurgerIcon} from './lib/icons/BurgerIcon.svg';

function NavbarCustom({ children, toggleTheme, theme}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-100">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle lg:hidden" onClick={toggleMenu}>
              <BurgerIcon className="w-6 h-6" />
            </div>
            {isMenuOpen && (
              <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-full h-full p-2 shadow lg:hidden">
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            )}
          </div>
          <a className="btn btn-ghost text-xl">Oy Shirts</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          {children} 
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <CartIcon className='w-6 h-6'/>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={toggleTheme} checked={theme === 'halloween'} />
            <SunIcon className="swap-off fill-current w-6 h-6" />
            <MoonIcon className="swap-on fill-current w-6 h-6" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default NavbarCustom;
