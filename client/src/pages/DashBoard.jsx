
import { setLogout } from '../store/userSlice';
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Profile from '../components/Profile';
import AddCourses from '../components/AddCourses';
import MyCourse from '../components/MyCourse';
import WishList from '../components/WishList';
import Setting from '../components/Setting';
import EnrolledCourses from '../components/EnrolledCourses';
import { useState } from 'react';

// import { toast } from 'react-toastify';
const DashBoard = () => {
    const dispatch = useDispatch(); 
    const navigate = useNavigate();
    const [currentComponent , setCurrentComponent] = useState("profile")

    const [myComponents , setMyComponents] = useState([
      {myCourse : <MyCourse />},
      {profile : <Profile />},
      {wishList : <WishList />},
      {setting : <Setting />},
      {enrolledCourses : <EnrolledCourses />},
      {addCourses : <AddCourses />},
    ])


    const { role } = useSelector((state) => state.user.user.loggedInUser);
    const handleLogout = () => {
      dispatch(setLogout(null));
      navigate("/login");
    };
  return (
    <div className='w-full h-auto flex gap-13'>
      <div className='sidebar w-[230px] fixed top h-screen  text-black bg-white border-r-1 shadow-md border-gray-300'>
        <ul className='flex flex-col items-center justify-center gap-2 mt-20'>
          <li
            className={`p-2 w-full text-center   cursor-pointer ${
              currentComponent === "profile"
                ? "bg-gray-50 border-r-2 border-orange-400"
                : ""
            }`}
            onClick={() => setCurrentComponent("profile")}
          >
            My Profile
          </li>
          <li
            className={`p-2 w-full text-center  cursor-pointer ${
              currentComponent === "wishList"
                ? "bg-gray-50 border-r-2 border-orange-400"
                : ""
            }`}
            onClick={() => setCurrentComponent("wishList")}
          >
            Wish List{" "}
          </li>
          <li
            className={`p-2 w-full text-center cursor-pointer ${
              currentComponent === "enrolledCourses"
                ? "bg-gray-50 border-r-2 border-orange-400"
                : ""
            }`}
            onClick={() => setCurrentComponent("enrolledCourses")}
          >
            Enrolled Courses
          </li>
          {role !== "student" && (
            <>
              <li
                className={`p-2 w-full text-center  cursor-pointer ${
                  currentComponent === "myCourses"
                    ? "bg-gray-50 border-r-2 border-orange-400"
                    : ""
                }`}
                onClick={() => setCurrentComponent("myCourses")}
              >
                My Courses
              </li>
              <li
                className={`p-2 w-full text-center cursor-pointer ${
                  currentComponent === "addCourses"
                    ? "bg-gray-50 border-r-2 border-orange-400"
                    : ""
                }`}
                onClick={() => setCurrentComponent("addCourses")}
              >
                Add Course
              </li>
            </>
          )}
        </ul>
        <hr className='border- border-gray-300 mt-5 ' />
        <ul className='flex flex-col items-center justify-center mt-3 gap-2'>
          <li
            className={`p-2 w-full text-center cursor-pointer ${
              currentComponent === "setting"
                ? "bg-gray-50 order-2 border-orange-400"
                : ""
            }`}
            onClick={() => setCurrentComponent("setting")}
          >
            Setting
          </li>
          <li
            onClick={handleLogout}
            className='cursor-pointer text-center w-full p-1 hover:bg-gray-50'
          >
            Logout
          </li>
        </ul>
      </div>

      <div className='w-[calc(100%-300px)] ml-[300px] mt-10'>
        {myComponents.map((item) => {
          if (item[currentComponent]) {
            return item[currentComponent];
          }
        })}
      </div>
    </div>
  );
}

export default DashBoard