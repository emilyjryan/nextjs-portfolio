import styles from "../styles/Resume.module.css"
import Image from "next/image"

export default function Resume() {
    return (
        <div>
            <h1>My Resume</h1>
            <Image src="/pics/Emily_Ryan_Resume_Mar 2023.png" alt="Emily Ryan resume" width={400} height={500}/>

        </div>
    )
}