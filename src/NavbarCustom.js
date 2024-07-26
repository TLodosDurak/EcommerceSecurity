import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as SunIcon } from './lib/icons/SunIcon.svg';
import { ReactComponent as MoonIcon } from './lib/icons/MoonIcon.svg';
import { ReactComponent as BurgerIcon } from './lib/icons/BurgerIcon.svg';

function NavbarCustom({ toggleTheme, theme, togglePopup }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // This function is used to handle the theme toggle for the mobile menu
  // So it can be done when clicking a parent element of dasyui swap
  const handleThemeToggleClick = (e) => {
    e.preventDefault();
    toggleTheme();
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">blendjet</a>
        </div>
        <div className="navbar-end hidden sm:flex items-center">
          <label className="swap swap-rotate mx-4">
            <input type="checkbox" onChange={toggleTheme} checked={theme === 'halloween'} />
            <SunIcon className="swap-off fill-current w-6 h-6" />
            <MoonIcon className="swap-on fill-current w-6 h-6" />
          </label>
          <button className="btn btn-primary mr-4" onClick={togglePopup}>
            Shop Now
          </button>
        </div>
        <div className="navbar-end sm:hidden">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={toggleMenu}>
              <BurgerIcon className="w-6 h-6" />
            </div>
            {isMenuOpen && (
              <ul className="menu menu-vertical bg-base-100 rounded-box z-[1] mt-3 w-fit max-w-xs p-2 shadow absolute right-0">
                <li className="flex items-center">
                  <button className="btn btn-primary w-full" onClick={togglePopup}>
                    Shop Now
                  </button>
                </li>
                <li className="flex items-center" onClick={handleThemeToggleClick}>
                  <div className="flex items-center w-full">
                    <label className="swap swap-rotate">
                      <input type="checkbox" onChange={toggleTheme} checked={theme === 'halloween'} />
                      <SunIcon className="swap-off fill-current w-6 h-6" />
                      <MoonIcon className="swap-on fill-current w-6 h-6" />
                    </label>
                    <span className="ml-2">Theme</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <Link to="/" className="flex items-center w-full">
                    <span>Homepage</span>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarCustom;
