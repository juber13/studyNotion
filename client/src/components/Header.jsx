import React, { useEffect, useState } from 'react'
import { BiCaretDown } from 'react-icons/bi'
import { Link , useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSelector , useDispatch } from 'react-redux';
import {setLogout} from '../store/userSlice';
const Header = () => {
  const [toggle ,setToggle] = useState(false);
  // const {token}  = useSelector((state) => state.user); 
  const token = Cookies.get("token") 
  const dispatch = useDispatch();

  const navigate = useNavigate();


  
  return (
    <div className='border p-3 fixed w-full z-10 top-0 flex items-center justify-between bg-gray-100'>
      <div className='logo cursor-pointer' onClick={() => navigate("/")}>
        <img
          src='data:image/png;base64,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'
          alt=''
        />
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
        <Link to={"/dashboard"}>
          <button className='border text-sm p-2 bg-white border-yellow-300 font-semibold rounded-md'>
            DashBoard
          </button>
        </Link>
      )}
    </div>
  );
}

export default Header