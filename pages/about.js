// this is going to be our /about route:
// import css module
import styles from "../styles/About.module.css"

export default function About() {
    return (
        <div>
            <h1>About Me</h1>

            {/* more than one style can use string interpolation */}
            <p className={styles.coolColor}>I am now a super cool software engineer</p>

            <p>{`don't use apostrophes unless they are in back ticks`}</p>

            <h2>I am a different color</h2>

            {/* styled jsx is great for conditional rendering, will apply to all elements on that page */}

            <style jsx>{`
                h2 {
                    color: hotpink;
                }
                `}</style>

            {/* 2 ways to render pics: stored locally and url */}
            <img
                src='/next.svg'
                alt='logo of my new fav framework'
            />

            {/* getting img from outside source */}
            <img
                src='https://placekitten.com/300/600'
                alt='magnificient kitteh'
            />
        </div>
    )
}