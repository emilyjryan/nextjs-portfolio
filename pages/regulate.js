import React from 'react'
import regulateImg from 'public/projects/regulate/emotions.png'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const regulate = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10'></div>
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={regulateImg} alt='/'/>
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 px-8'>
          <h2>Regulate</h2>
          <h3>Typescript, MERN Stack</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2 className=''>Overview</h2>
          <p>
          Having and maintaining a consistent routine and daily structure is vital to making a child with special needs such as autism feel safe, supported, and regulated. This is an app designed for these children to help them practice good habits that promote independence. Habits include managing a schedule and completing important daily tasks, developing healthy coping strategies for times of frustration or overstimulation, and identifying specific emotions in order to express themselves and their needs better.
          </p>
          <button className='px-8 py-2 mt-4 mr-8'><a href='https://unique-lollipop-eb6497.netlify.app/'>Demo</a></button>
          <button className='px-8 py-2 mt-4'><a href='https://github.com/emilyjryan/project-4'>Code</a></button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Typescript</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>React</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Express</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Node</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Mongo</p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default regulate