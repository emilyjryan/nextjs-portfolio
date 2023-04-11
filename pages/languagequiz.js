import React from 'react'
import langImg from 'public/projects/language-game/example-phrase.png'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const languagequiz = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10'></div>
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={langImg} alt='/'/>
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 px-8'>
          <h2>Language Quiz</h2>
          <h3>JavaScript, HTML, CSS</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2 className=''>Overview</h2>
          <p>
          There are over 7,000 languages spoken around the globe! Think you could identify some of them? You'll be given phrases from random languages and it's up to you to identify which language they are in order to earn points. You will also be given a hint about each language to help you in your identification. When a phrase appears, click on the 👂🏼 to hear the audio. Then type in your best guess and click 'Submit'. If you guess correctly, you'll earn 1 point. Make sure to think fast, you only have 2 minutes on the clock! Press 'Play' to start!
          </p>
          <button className='px-8 py-2 mt-4 mr-8'><a href='https://emilyjryan.github.io/project-one-language-quiz/'>Demo</a></button>
          <button className='px-8 py-2 mt-4'><a href='https://github.com/emilyjryan/project-one-language-quiz'>Code</a></button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>JavaScript</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>HTML</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>CSS</p>
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

export default languagequiz