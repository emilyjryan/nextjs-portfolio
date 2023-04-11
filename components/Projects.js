import React from 'react'
import Image from 'next/image'
import ProjectItem from './ProjectItem'
import Link from 'next/link'
import languageimg from '../public/projects/language-game/example-phrase.png'
import drugimg from '../public/projects/discover-drug/welcome.png'
import sustainableimg from '../public/projects/sustain-able/profile-and-favs.png'
import regulateimg from '../public/projects/regulate/emotions.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#87aca3]'>Projects</p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>

            <ProjectItem 
                title='Language Quiz' 
                backgroundImg={languageimg} 
                projectUrl='/languagequiz'
                techStack='JavaScript, HTML, CSS'
            />

            <ProjectItem 
                title='DiscoverDrug' 
                backgroundImg={drugimg} 
                projectUrl='/discoverdrug'
                techStack='JavaScript, Node.js, HTML, Bootstrap, SQL'
            />

            <ProjectItem 
                title='Sustain-ABLE' 
                backgroundImg={sustainableimg} 
                projectUrl='/sustainable'
                techStack='React, Mongo, Mongoose, Bootstrap'
            />
            
            <ProjectItem 
                title='Regulate' 
                backgroundImg={regulateimg} 
                projectUrl='/regulate'
                techStack='Typescript, React, Mongo'
            />

        </div>

        </div>
    </div>
  )
}

export default Projects