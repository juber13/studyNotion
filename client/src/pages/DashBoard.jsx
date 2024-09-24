import React from 'react'

import { setLogout } from '../store/userSlice';
import { useDispatch  , useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
const DashBoard = () => {
    const dispatch = useDispatch(); 
    const navigate = useNavigate();
    const {user} = useSelector((state) => state.user);  
    const {name , phoneNumber , isActive , email , role}  = user.loggedInUser;

    const handleLogout = () => {
      dispatch(setLogout(null));
      navigate("/login");
    };

  return (
    <div className='w-full h-screen flex gap-10'>
      <div className='sidebar w-[200px] text-black bg-white border-r-1 shadow-md border-gray-300'>
        <ul className='flex flex-col items-center justify-center gap-2 mt-20'>
          <li className='p-2 w-full text-center bg-gray-50 border-r-2 border-red-400'>My Profile</li>
          <li className='p-2 w-full text-center'>DashBoard</li>
          <li className='p-2 w-full text-center'>My Courses</li>
          <li className='p-2 w-full text-center'>Add Course</li>
        </ul>
        <hr className='border- border-gray-300 mt-5 ' />
        <ul className='flex flex-col items-center justify-center mt-3 gap-2'>
          <li className='w-full text-center p-1'>Setting</li>
          <li
            onClick={handleLogout}
            className='cursor-pointer text-center w-full p-1'
          >
            Logout
          </li>
        </ul>
      </div>

      <div className='profile-section flex-1 text-black flex flex-col'>
        <div className='container p-8 flex flex-col gap-10'>
          <div className='heading text-3xl mt-3'>My Profile</div>
          <div className='user-info flex justify-between items-center bg-gray-50 p-3'>
            <div className='user-name'>
              <h2>{name}</h2>
              <h2>{email}</h2>
            </div>

            <button className='border p-2 text-sm bg-white rounded-md border-yellow-300 font-semibold'>Edit</button>
          </div>
          <div className='about flex justify-between items-center bg-gray-50 p-3'>
            <div className='about-heading'>
              <h3>About</h3>
              <p>I m full stack developer</p>
            </div>

            <button className='border p-2 text-sm bg-white rounded-md border-yellow-300 font-semibold'>Edit</button>
          </div>
          <div className='personal details flex justify-between items-center bg-gray-50 p-3'>
            <div className='personal-heading'>
              <p>{phoneNumber}</p>
              <p>{role}</p>
              <p>{isActive.toString()}</p>
            </div>
            <button className='border p-2 text-sm bg-white rounded-md border-yellow-300 font-semibold'>Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard