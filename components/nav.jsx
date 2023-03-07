import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/components/homepage/Nav.module.scss'

const Nav = () => {
    return (
        <>

            <nav className={styles.nav}>
                <div className="logo">
                    <Link href="/">
                        <Image src="/logo.png" width={128} height={77} />
                    </Link>
                </div>
                <ul className={styles.nav}>
                    <li>
                        <Link href="/home/about">About</Link>
                    </li>
                    <li>
                        <Link href="/home/speakers">Speakers</Link>
                    </li>
                    <li>
                        <Link href="/home/schedule">Schedule</Link>
                    </li>
                    <li>
                        <Link href="/login">Login</Link>
                    </li>
                    <li>
                        <Link href="/home/registrations">Registration</Link>
                    </li>
                    <li>
                        <Link href="/home/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default Nav