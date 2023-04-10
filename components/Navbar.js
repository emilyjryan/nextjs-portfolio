// import Link from next
import Link from 'next/link'
import styles from "../styles/Home.module.css"
// Links are for internal sources, just for our pages. You can use ahref tags for links to outside websites

import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <button className={styles.link}>
            <a href="/">
                Home
            </a>
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