// import Link from next
import Link from 'next/link'
import styles from "../styles/Home.module.css"
// Links are for internal sources, just for our pages. You can use ahref tags for links to outside websites

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <button className={styles.link}>
            <Link  href="/">
                Home
            </Link>
            </button>
            <button className={styles.link}>
            <Link  href="/about">
                About
            </Link>
            </button>
            <button className={styles.link}>
            <Link  href="/projects">
                Projects
            </Link>
            </button>
            <button className={styles.link}>
            <Link  href="/resume">
                Resume
            </Link>
            </button>
            <button className={styles.link}>
            <Link  href="/contact">
                Contact
            </Link>
            </button>

        </nav>
    )
}