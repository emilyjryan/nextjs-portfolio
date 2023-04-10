import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <div className='fixed w-full h-20 shadow-xl z-[100]'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Image
                    src='/../public/assets/initials-logo.png'
                    alt='/'
                    width='125'
                    height='50'
                />
            <div>
                <ul className='hidden md:flex'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>
                    <Link href='/about'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                    </Link>
                    <Link href='/projects'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                    </Link>
                    <Link href='/resume'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Resume</li>
                    </Link>
                    <Link href='/contact'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                    </Link>
                </ul>
            </div>
            </div>
        </div>
    )
}