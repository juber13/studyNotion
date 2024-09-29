import React, { useEffect, useState } from "react";
import { BiCaretDown } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../store/userSlice";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.user.data);
  console.log(userInfo);
  return (
    <div className='border p-3 fixed w-full z-10 top-0 flex items-center justify-between bg-gray-100'>
      <div className='logo cursor-pointer' onClick={() => navigate("/")}>
        <img
          src='data:image/png;base64,...' // Your base64 image
          alt=''
        />
      </div>

      <div className='menu-center flex gap-4 text-black-500 font-semibold'>
        <Link to='/'>
          <span className='text-yellow-400'>Home</span>
        </Link>
        <div
          className='flex items-center relative'
          onClick={() => setToggle(!toggle)}
        >
          Catalog
          <BiCaretDown />
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
        </div>
        <Link to='/about'>About us</Link>
        <Link to='/contact'>Contact us</Link>
      </div>

      {!userInfo ? (
        <div className='flex gap-3'>
          <Link
            to='/login'
            className='p-2 shadow-sm font-medium bg-white text-xs rounded-sm'
          >
            Login
          </Link>
          <Link
            to='/signup'
            className='p-2 shadow-sm bg-white text-xs rounded-sm'
          >
            Sign Up
          </Link>
        </div>
      ) : (
        <button
          onClick={() => navigate("/dashboard")}
          className='p-2 shadow-sm bg-green-500 text-white text-xs rounded-sm'
        >
          DashBoard
        </button>
      )}
    </div>
  );
};

export default Header;
