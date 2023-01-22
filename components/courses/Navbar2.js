import styles from "@/styles/Account.module.css";
import Image from "next/image";
import Logo from "../../public/Images/account/Enrich.png";
import ProfileImg from "../../public/icons/user-profile-svgrepo-com.svg";
import DownArrow from "../../public/icons/down-arrow-backup-2-svgrepo-com.svg";
import {useState} from "react";

const Navbar2 = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [display, setDisplay] = useState('hidden');

    const handleDropDown = () => {
        if(display === 'visible')
            setDisplay('hidden');
        else
            setDisplay('visible');
    }

    return (
        <>
            <div className={styles.accountHeader}>
                <div className={styles.logo}>
                    <Image src={Logo} alt="logo" />
                </div>
                <div className={styles.navItems}>
                    <ul>
                        <li className={styles.navItem}>Dashboard</li>
                        <li className={styles.navItem}>My Subjects</li>
                    </ul>
                </div>
                <div className={styles.user}>
                    <div >
                        <Image className={styles.profileImg} src={ProfileImg} />
                    </div>
                    <div>
                        <span>Gimhan</span>
                        <button className={styles.dropDownBtn}>
                            <Image className={styles.dropdown} src={DownArrow} onClick={() => handleDropDown()}/>
                        </button>
                    </div>
                </div>
            </div>

            <div className={styles.dropDown} style={{visibility: `${display}`}}>
                <a href="#">
                    <span>Dashboard</span>
                </a>
                <a href="#">
                    <span>Settings</span>
                </a>
                <a href="#">
                    <span>Help Center</span>
                </a>
                <a href="#">
                    <span>Logout</span>
                </a>
            </div>
        </>
    )
}

export default Navbar2