import Image from "next/image"
import resume from '../public/projects/ERyan_Resume_Mar 2023.png'

export default function Resume() {
    return (
        <div id='resume' className="w-full p-2">
          <div className="max-w-[1240px] mx-auto px-2 py-16">
            <p className="text-xl tracking-widest uppercase text-[#87aca3]">Resume</p>
            <h2 className="py-4">My Resume</h2>
            <h4 className="py-4">Download my resume <span className='uppercase text-[#0000EE]'><a href="/Emily Ryan_Resume_Mar 11 2023.pdf" alt="Emily Ryan resume" target="_blank" rel="noopener noreferrer">here</a></span></h4>
            <Image className='rounded p-4' src={resume} alt="Emily Ryan resume" width={600} height={800}/>
        </div>
        </div>
    )
}