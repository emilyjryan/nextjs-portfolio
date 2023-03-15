// import Link from next
import Link from 'next/link'
import styles from "../styles/Home.module.css"
// Links are for internal sources, just for our pages. You can use ahref tags for links to outside websites

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <button>
            <Link className={styles.link} href="/">
                Home
            </Link>
            </button>
            <button>
            <Link className={styles.link} href="/about">
                About
            </Link>
            </button>
            <button>
            <Link className={styles.link} href="/projects">
                Projects
            </Link>
            </button>
            <button>
            <Link className={styles.link} href="/resume">
                Resume
            </Link>
            </button>
            <button>
            <Link className={styles.link} href="/contact">
                Contact
            </Link>
            </button>

        </nav>
    )
}