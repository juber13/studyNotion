import React, { useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'
import { setUser , setError , setToken , setLoading } from '../store/userSlice'
const SignUp = () => {
  const [userInfo , setUserInfo] = useState({name : "" , lastName : "" , email : "" , password : "" , phoneNumber : "" , confirmPassword : "" , role : ""});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  console.log(user);  

  const handleChange = (e) => {
    const {name , value} = e.target;
    setUserInfo({...userInfo , [name] : value});
  }
  
  const handleSignUp = async(e) => {
    e.preventDefault();
    try{
      const res = await axios.post('http://localhost:5050/api/user/register' , userInfo);
      Object.keys(userInfo).forEach(key => userInfo[key] = "");
      toast.success(res.data.message)
      navigate('/login'); 
    }catch(err){
      toast.error(err.response.data.error , { style : {fontSize : "12px" }, duration : 1000 });
      console.log(err); 
    }finally{
      dispatch(setLoading(false));
    }
  }


  return (
    <div className='w-full border shadow-md max-w-xl m-auto mt-10 p-10'>
      <div className='signup-section max-w-6xl m-auto'>
        <div className='left'>
          <div className='heading flex gap-4 flex-col'>
            <h2 className='text-2xl'>Register</h2>
          </div>

          <form className='flex flex-col gap-3' onSubmit={handleSignUp}>
            <div className='role flex gap-2 mt-3'>
              <input
                type='radio'
                className='bg-white border p-1 rounded-md text-sm cursor-pointer'
                name='role'
                value='student'
                onChange={handleChange}
              />
              Student
              <input
                type='radio'
                className='bg-white border p-1 rounded-md text-sm cursor-pointer'
                name='role'
                value='instructor'
                onChange={handleChange}
              />
              Instructor
            </div>

            <div className='flex gap-3 w-full'>
              <div className='flex flex-col flex-1'>
                <label htmlFor='name' className='text-xs'>
                  First Name <span className='text-red'>*</span>
                </label>
                <input
                  name='name'
                  className='border rounded-md p-3 outline-none text-xs'
                  type='text'
                  placeholder='Enter First Name'
                  onChange={handleChange}
                />
              </div>
              <div className='flex flex-col flex-1'>
                <label htmlFor='Email' className='text-xs'>
                  Last Name <span className='text-red'>*</span>
                </label>
                <input
                  name='lastName'
                  className='border rounded-md p-3 outline-none text-xs '
                  type='text'
                  placeholder='Enter Last Name'
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className='flex gap-3'>
              <div className='flex flex-col flex-1'>
                <label htmlFor='Email' className='text-xs'>
                  Email Address <span className='text-red'>*</span>
                </label>
                <input
                  name='email'
                  className='border rounded-md p-3 outline-none text-xs'
                  type='text'
                  placeholder='Enter Email'
                  onChange={handleChange}
                />
              </div>

              <div className='flex flex-col flex-1'>
                <label htmlFor='phone' className='text-xs'>
                  Phone Number <span className='text-red'>*</span>
                </label>
                <input
                  name='phoneNumber'
                  className='border rounded-md p-3 outline-none text-xs'
                  type='text'
                  placeholder='Phone code '
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className='flex gap-3'>
              <div className='flex flex-col flex-1'>
                <label htmlFor='password' className='text-xs'>
                  Enter Password <span className='text-red'>*</span>
                </label>
                <input
                  name='password'
                  className='border rounded-md p-3 outline-none text-xs'
                  type='password'
                  placeholder='Enter Password'
                  onChange={handleChange}
                />
              </div>
              <div className='flex flex-col flex-1'>
                <label htmlFor='confirm-password' className='text-xs'>
                  Confirm Password <span className='text-red'>*</span>
                </label>
                <input
                  name='confirmPassword'
                  className='border rounded-md p-3 outline-none text-xs'
                  type='password'
                  placeholder='Confirm Password'
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className='flex gap-3'>
              <button
                className='p-2 rounded-md text-xs bg-yellow-500 text-white font-semibold'
                type='submit'
              >
                Create Account
              </button>
              <button className='p-2 text-xs rounded-md bg-yellow-500 text-white font-semibold'>
                Login With google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp