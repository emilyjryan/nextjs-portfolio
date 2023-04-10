// this is going to be our /about route:
// import css module
import styles from "../styles/About.module.css"

export default function About() {
    return (
        <div>
            <h1>A little about myself:</h1>

            <p className={styles.coolColor}>{`Hey there! I'm a software engineer with a background in medicine and biology. I'm passionate about developing innovative technology to improve the user experience. In my five years of nursing, I have honed my ability to think critically under pressure, collaborate inclusively with coworkers, and advocate strongly for patients and families. Compassion, concise communication, and effective teaching skills have characterized my past work experience. I have an innate curiosity and eagerness to learn, with a keen eye for patterns and sharp attention to detail. I face new challenges head-on and take a flexible and creative approach to problem solving. I look forward to applying my unique skills and strengths to make a positive impact on the world of tech! Feel free to check out my projects. And drop me a note to say hi! 👋🏼`}</p>

        </div>
    )
}