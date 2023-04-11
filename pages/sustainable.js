import React from 'react'
import sustainableImg from 'public/projects/sustain-able/welcome.png'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const sustainable = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10'></div>
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={sustainableImg} alt='/'/>
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 px-8'>
          <h2>Sustain-ABLE</h2>
          <h3>MERN Stack, Bootstrap</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2 className=''>Overview</h2>
          <p className='p-4'>It's our responsiblity as inhabitants of this beautiful planet to steward its resources and care for the magnificent world we call home. And we are ABLE to change this global warming trajectory. Incorporating even a small daily change toward a more sustainable lifestyle can greatly decrease a person's environmental impact overall.</p>

          <p className='p-4'>That's where sustainABLE comes in. The sustainABLE app provides an online community to like-minded individuals who want to do their part in changing the world one small step at a time. Users can register for an account and add the sustainABLE habits that they use everyday. When a user finds a habit they like and want to incorporate into their daily lives, they can favorite it to reference in the future.</p>
     
          <p className='p-4'>Other contributors: Curtlen Aumiller, Cailin Shaffer</p>
          <button className='px-8 py-2 mt-4 mr-8'><a href='https://main--vermillion-melba-389997.netlify.app/'>Demo</a></button>
          <button className='px-8 py-2 mt-4'><a href='https://github.com/emilyjryan/sustainABLE-client'>Code</a></button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Mongo</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Express</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>React</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Node</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Bootstrap</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Axios</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>JWT-Decode</p>
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

export default sustainable