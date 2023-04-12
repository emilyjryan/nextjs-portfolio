import React from 'react'
import Image from 'next/image'
import html from '../public/assets/skills/html.png'
import css from '../public/assets/skills/css.png'
import javascript from '../public/assets/skills/js.png'
import typescript from '../public/assets/skills/typescript.png'
import react from '../public/assets/skills/react.webp'
import github from '../public/assets/skills/github.png'
import mongo from '../public/assets/skills/mongo.png'
import sql from '../public/assets/skills/sql.jpeg'
import python from '../public/assets/skills/python.png'
import express from '../public/assets/skills/express.png'
import node from '../public/assets/skills/node.png'
import tailwind from '../public/assets/skills/tailwind.png'
import bootstrap from '../public/assets/skills/bootstrap.png'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#87aca3]'>Skills</p>
            <h2 className='py-4'>My Tech Stack</h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src={html}
                                alt='/'
                                width='64'
                                height='64'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={css}
                                alt='/'
                                width='64'
                                height='64'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src={javascript}
                                alt='/'
                                width='64'
                                height='64'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src={typescript}
                                alt='/'
                                width='64'
                                height='64'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Typescript</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src={react}
                                alt='/'
                                width='85'
                                height='85'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>React</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src={github}
                                alt='/'
                                width='64'
                                height='64'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Github</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src={mongo}
                                alt='/'
                                width='90'
                                height='90'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Mongo</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 pt-9 bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src={sql}
                                alt='/'
                                width='64'
                                height='64'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>SQL</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src={python}
                                alt='/'
                                width='64'
                                height='64'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Python</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 pt-10 bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src={express}
                                alt='/'
                                width='120'
                                height='100'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Express</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src={node}
                                alt='/'
                                width='120'
                                height='80'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Node</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src={tailwind}
                                alt='/'
                                width='64'
                                height='64'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tailwind</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src={bootstrap}
                                alt='/'
                                width='64'
                                height='64'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Bootstrap</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills