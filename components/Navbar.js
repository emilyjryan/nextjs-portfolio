// import Link from next
import Link from 'next/link'
// Links are for internal sources, just for our pages. You can use ahref tags for links to outside websites

export default function Navbar() {
    return (
        <nav>
            <Link href="/">
                Home |
            </Link>

            <Link href="/about">
                | About |
            </Link>

            <Link href="/projects">
                | Projects |
            </Link>

            <Link href="/resume">
                | Resume |
            </Link>

            <Link href="/contact">
                | Contact
            </Link>

            

            <a
                href="url">
            </a>

        </nav>
    )
}