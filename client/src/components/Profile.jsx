import React, { useState } from 'react'

import toast from "react-hot-toast";
import { setLoading } from "../store/userSlice";
import axios from "axios";
import { useSelector } from 'react-redux';

const Profile = () => {
    const { user } = useSelector((state) => state.user);
    const { name, phoneNumber, isActive, email, role, lastName } = user.loggedInUser;
    const [isEditMode, setIsEditMode] = useState(false);
    const [updatedInfo, setUpdatedInfo] = useState({
      name: "",
      phoneNumber: "",
      lastName: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setUpdatedInfo({ ...updatedInfo, [name]: value });
    };

    

    const handleUpdate = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.put(`http://localhost:5050/api/user/update`, {
          data: updatedInfo,
        });
        console.log(res);
        toast.success("Profile Updated Successfully");
      } catch (error) {
        console.log(error);
      }

      console.log("update");
    };  

  return (
    <>
    {isEditMode ? (
        <div className='edit-from mt-20 border p-5 flex-start'>
          <div className='heading flex items-center justify-between w-full'>
            <h2 className='text-2xl ml-3 font-semibold'>Edit Profile</h2>
            <div
              className='border p-2 text-sm font-semibold bg-orange-400 rounded-md text-white cursor-pointer'
              onClick={() => setIsEditMode(false)}
            >
              Cancel
            </div>
          </div>
          <form className='grid grid-cols-2 gap-3 mt-10 p-3' onSubmit={handleUpdate}>
            <div className='flex flex-col gap-2'>
              <label htmlFor='lastName'>Profile Picture</label>
              <input
                type='file'
                placeholder='lastName'
                name='lastName'
                className='p-1 border rounded-md'
                // onChange={handleChange}
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor='lastName'>LastName</label>
              <input
                type='text'
                placeholder='lastName'
                name='lastName'
                className='p-1 border rounded-md'
                value={updatedInfo.lastName}
                onChange={handleChange}
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor='lastName'>Name</label>
              <input
                type='text'
                placeholder='lastName'
                name='name'
                className='p-1 border rounded-md'
                value={updatedInfo.name}
                onChange={handleChange}
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor='phone'>Phone Number</label>
              <input
                type='text'
                placeholder='lastName'
                name='phoneNumber'
                className='p-1 border rounded-md'
                value={updatedInfo.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <button
              className='border p-2 mt-3 rounded-md bg-green-500 text-white font-semibold'
              type='submit'
            >
              Update Details
            </button>
          </form>
        </div>
      ) : (
        <div
          className={`profile-section flex-1 text-black flex flex-col ${
            isEditMode && "hidden"
          }`}
        >
          <div className='container p-8 flex flex-col gap-10'>
            <div className='heading text-3xl mt-3'>My Profile</div>
            <div className='user-info flex justify-between items-center bg-gray-50 p-3'>
              <div className='user-name'>
                <h2>
                  {name} {lastName}
                </h2>
                <h2>{email}</h2>
              </div>

              <button
                className='border p-2 text-sm bg-white rounded-md border-yellow-300 font-semibold'
                onClick={() => setIsEditMode(true)}
              >
                Edit
              </button>
            </div>
            <div className='about flex justify-between items-center bg-gray-50 p-3'>
              <div className='about-heading'>
                <h3>About</h3>
                <p>I m full stack developer</p>
              </div>

              <button
                className='border p-2 text-sm bg-white rounded-md border-yellow-300 font-semibold'
                onClick={() => setIsEditMode(true)}
              >
                Edit
              </button>
            </div>
            <div className='personal details flex justify-between items-center bg-gray-50 p-3'>
              <div className='personal-heading'>
                <p>{phoneNumber}</p>
                <p>{role}</p>
                <p>{isActive.toString()}</p>
              </div>
              <button
                className='border p-2 text-sm bg-white rounded-md border-yellow-300 font-semibold'
                onClick={() => setIsEditMode(true)}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Profile