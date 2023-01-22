import Link from "next/link";
import navStyles from '@/styles/Navbar.module.css'
import Image from 'next/image'
import Logo from 'public/logo.png'
import PlusIcon from 'public/icons/plusicon.png'
const Navbar = () => {
    return (
        <>
        <div className={navStyles.nav}>
            <div className={navStyles.logo}>
                <Image src={Logo} alt="logo" />
            </div>
            <ul className={navStyles.links}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/courses">Courses</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>

            </ul>
            <div className={navStyles.btns}>
                <Link href="/login" className={navStyles.login}><Image src={PlusIcon} alt="logo"  className={navStyles.btnIco}/>Log In </Link>
                <Link href="/login" className={navStyles.signup}>Sign Up for Free </Link>
            </div>
        </div>
        <div className={navStyles.subnav}>
            <ul className={navStyles.sublinks}>
                <li>
                    <Link href="/">View All Courses</Link>
                </li>
                <li>
                    <Link href="/">Ordinary Level</Link>
                </li>
                <li>
                    <Link href="/">Advanced Level</Link>
                </li>
                <li>
                    <Link href="/">Charted CA</Link>
                </li>
                <li>
                    <Link href="/">Charted(CA)</Link>
                </li>
                <li>
                    <Link href="/">CMA</Link>
                </li>
                <li>
                    <Link href="/">AAT</Link>
                </li>
                <li>
                    <Link href="/">Courses for Professionals</Link>
                </li>


            </ul>
        </div>
        </>
    )
}

export default Navbar;