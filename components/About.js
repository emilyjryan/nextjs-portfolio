import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#87ACA3]'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <h3 className='py-2 text-gray-600'>
                    Hey there! I'm a software engineer with a background in medicine and biology. I'm passionate about developing innovative technology to improve the user experience. In my five years of nursing, I have honed my ability to think critically under pressure, collaborate inclusively with coworkers, and advocate strongly for patients and families. Compassion, concise communication, and effective teaching skills have characterized my past work experience. I have an innate curiosity and eagerness to learn, with a keen eye for patterns and sharp attention to detail. I face new challenges head-on and take a flexible and creative approach to problem solving. I look forward to applying my unique skills and strengths to make a positive impact on the world of tech! Feel free to check out my projects. And drop me a note to say hi! 👋🏼
                    </h3>
                    <p className='py-2 text-gray-600'>Check out some of my latest <span className='underline cursor-pointer'><a href='/#projects'>projects!</a></span></p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image className='rounded-xl'
                        src='/../public/assets/prof_pic_em.png'
                        alt='/'
                        width='500'
                        height='800'
                    />
                </div>
            </div>
        </div>
    )
}

export default About
