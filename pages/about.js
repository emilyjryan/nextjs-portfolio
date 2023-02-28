// this is going to be our /about route:
// import css module
import styles from "../styles/About.module.css"

export default function About() {
    return (
        <div>
            <h1>About Emily</h1>

            <img
                src='/next.svg'
                alt='logo of my new fav framework'
            />
            <p className={styles.coolColor}>{`Hey there! I'm a software engineer with a keen eye for detail and passion for learning. Through my background in nursing and biology, I've developed a flexible and patient approach to problem solving. Feel free to check out my projects. And drop me a note to say hi! 👋🏼`}</p>

            <h2>I am a different color</h2>

            <style jsx>{`
                h2 {
                    color: green;
                }
                `}</style>

        </div>
    )
}