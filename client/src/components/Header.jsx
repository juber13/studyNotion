import React, { useState } from 'react'
import { BiCaretDown } from 'react-icons/bi'
import { Link , useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
const Header = () => {
  const [toggle ,setToggle] = useState(false);
  const token = Cookies.get('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('token');
    navigate('/login');
    
  }
  return (
    <div className='border p-3 flex items-center justify-between bg-gray-100'>
      <div className='logo'>
        <span className='text-blue-500 font-bold'>S</span>tudy
        <span className='text-blue-500 font-bold'>N</span>otion
      </div>

      <div className='menu-center flex gap-4  text-black-500 font-semibold'>
        <Link to='/'>
          <a href='#' className=' text-yellow-400'>
            Home
          </a>
        </Link>
        <a
          href='#'
          className='flex items-center relative'
          onClick={() => setToggle(!toggle)}
        >
          Catalog
          <span className=''>
            <BiCaretDown />
          </span>
          <ul
            className={`absolute top-8 bg-gray-200 p-3 ${
              toggle ? "block" : "hidden"
            }`}
          >
            <Link to='/'>
              <li className='hover:text-white text-sm'>Home</li>
            </Link>
            <Link to='/about'>
              <li className='hover:text-white text-sm'>About</li>
            </Link>
            <Link to='/contact'>
              <li className='hover:text-white text-sm'>Details</li>
            </Link>
          </ul>
        </a>
        <Link to='/about'>
          <a href='#'>About us</a>
        </Link>
        <Link to='/contact'>
          <a href='#'>Contact us</a>
        </Link>
      </div>

      {!token ? (
        <div className='flex gap-3'>
          <Link
            to='/login'
            className='p-2 shadow-sm font-medium bg-white text-xs rounded-sm'
          >
            Login
          </Link>
          <Link
            to='/signup'
            className='p-2 shadow-sm bg-white font-medium text-xs rounded-sm'
          >
            signUp
          </Link>
        </div>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </div>
  );
}

export default Header