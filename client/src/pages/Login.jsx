import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setUser, setToken } from '../store/userSlice';
const Login = () => {
  const [userInfo, setUserInfo] = React.useState({email: '',password: ''});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleLogin = async() => {
     try{
       const res = await axios.post('http://localhost:5050/api/user/login',userInfo);
       dispatch(setUser(res.data.data));
       toast.success('Login Successfully');
       setUserInfo({email: '',password: ''});
       navigate('/');
     }catch(error){
       console.log(error);  
       toast.error(error.response.data.error, { style : {fontSize : "12px" }, duration : 1000 });
     }
  };


  return (
    <div className='right border shadow-md flex  flex-col gap-6 p-8 rounded-md text-xs max-w-sm m-auto mt-40'>
          <div className=''>
            <h2 className='text-2xl font-bold'>Login</h2>
          </div>
          <div className=''>
            <input
              type='text'
              className='rounded-md outline-none p-2 border text-sm w-full'
              placeholder='Email'
              onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
              value={userInfo.email}
            />
          </div>

          <div className='grid grid-cols-1'>
            <input
              type='password'
              className='rounded-md outline-none p-2 border text-sm'
              placeholder='Password'
              onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
              value={userInfo.password}
            />
          </div>
          <div className='grid grid-cols-1 gap-3'>
             <Link to="/forgot-password" className='font-bold text-blue-400 underline'>Forgot Password</Link>
             <Link to="/singup" className='font-bold text-blue-400 underline'>New user</Link>
            <button className='bg-yellow-500 p-2 rounded-md text-white font-semibold shadow-lg' onClick={handleLogin}>Login</button>
          </div>

        </div>
  )
}

export default Login