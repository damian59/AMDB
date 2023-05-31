import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/navbar.css';
import LoginButton from './LoginButton';

import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './LogoutButton';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const {isAuthenticated} = useAuth0()

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='https://www.themoviedb.org/?language=es' className='navbar-logo'>
            AMDB
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={handleClick}>
                Popular
              </Link>
            </li>
            
            <li className='nav-item'>
              {
                isAuthenticated? <LogoutButton/>
                :
                <LoginButton/>
              }
             
            </li>
            
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
