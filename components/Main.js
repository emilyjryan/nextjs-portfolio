import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'

const Main = () => {
    return (
      <div id='home' className='w-full h-screen'>
        <div className='max-w-[1240px] w-full h-full p-2 flex justify-center items-center'>
            <div>
                <h1 className='py-4 text-gray-700'>
                    Hey there, I'm <span className='text-[#87ACA3] animate-pulse'>Emily</span>
                </h1>
                <h1 className='py-4 text-gray-700'>
                    A Full-Stack Software Engineer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%]'>
                    I'm a software engineer with a background in biology and healthcare, ready to make a difference in the world of tech.
                </p>
                <div className='flex items-center justify-between max-w-[330px] py-4'>
                    <a
                        href='https://www.linkedin.com/in/emilyjudithryan/'
                        target='_blank'
                        rel='noreferrer'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-200'>
                        <FaLinkedinIn/>
                    </div>
                    </a>
                    <a
                        href='https://github.com/emilyjryan'
                        target='_blank'
                        rel='noreferrer'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-200'>
                        <FaGithub/>
                    </div>
                    </a>
                    <a href='mailto:emilyryandev@gmail.com?body=Hey Emily, excited to connect!'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-200'>
                        <AiOutlineMail/>
                    </div>
                    </a>
                    <Link href='#resume'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-200'>
                        <BsPersonLinesFill/>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    )
}


export default Main