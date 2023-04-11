import React from 'react'
import drugImg from 'public/projects/discover-drug/welcome.png'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const discoverdrug = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10'></div>
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={drugImg} alt='/'/>
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 px-8'>
          <h2>DiscoverDrug</h2>
          <h3>JavaScript, HTML, CSS, Bootstrap, SQL</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2 className=''>Overview</h2>
          <p>
          DiscoverDrug is an app that allows users to look up specific drugs to get their generic and brand names as well as route and administration instructions. Users can create a profile with an email and password, and then they can search the FDA's vast API to see details about any drug. They can also save different drugs that they may want to return to in the future. Additionally, users can add a comment on specific drugs, noting any side effects or tips and tricks they may want to share with the rest of the users.
          </p>
          <button href='https://discover-drug-app-deploy.herokuapp.com/' className='px-8 py-2 mt-4 mr-8'>Demo</button>
          <button href='https://github.com/emilyjryan/project-two' className='px-8 py-2 mt-4'>Code</button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>JavaScript</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>HTML</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>CSS</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Bootstrap</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Axios</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Express</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Node</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Method Override</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>PostgreSQL</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Sequelize</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Cookie-parser</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Crypto-JS</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Dotenv</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>EJS</p>
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

export default discoverdrug