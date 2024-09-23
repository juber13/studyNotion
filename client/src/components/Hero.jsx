import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
const Hero = () => {
  return (
  <div className='main-section flex items-center justify-center w-full height'>
    <div className='hero-section gap-5 flex flex-col items-center justify-center max-w-2xl m-auto'>
      <button className='flex items-center  border gap-2 rounded-md shadow-md p-2'>
        Become a instructor
        <span>
          <BsArrowRight className='mt-1 text-xs'/>
        </span>
      </button>
      <h3 className='text-4xl'>Empower Your Future with Coding Skills</h3>
      <p className='text-sm text-center'>
        With our online coding courses, you can learn at your own pace, from
        anywhere in the world, and get access to a wealth of resources,
        including hands-on projects, quizzes, and personalized feedback from
        instructors.
      </p>

      <div className="btn flex gap-3">
        <a href="" className='p-3 border bg-yellow-300 rounded-md shadow-md text-sm'>Learn More</a>
        <a href="" className='p-3 border bg-black text-white rounded-md shadow-md text-sm'>Book demo</a>
      </div>
      </div>
     </div>
  );
}

export default Hero