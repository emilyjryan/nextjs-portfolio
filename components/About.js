import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <div className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p>About</p>
                    <h2>Who I Am</h2>
                    <p>
                        Chunk of text about myself
                    </p>
                    <p>
                        Another chunk of informative text
                    </p>
                    <p>Check out some of my latest projects</p>
                </div>
                <div>
                    <Image
                        src='/../public/assets/IMG_3284.png'
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
