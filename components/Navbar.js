// import Link from next
import Link from 'next/link'
// Links are for internal sources, just for our pages. You can use ahref tags for links to outside websites

export default function Navbar() {
    return (
        <nav>
            <Link href="/">
                {/* links take any child components */}
                Home |
            </Link>

            <Link href="/about">
                | About Meeee
            </Link>

            <a
                href="url">
            </a>

        </nav>
    )
}