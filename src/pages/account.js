import styles from "@/styles/Account.module.css";
import Image from "next/image";
import CAImg from 'public/Images/account/CA.png'
import RightArrow from "public/icons/right-arrow-svgrepo-com.svg";
import Logo from 'public/Images/account/Enrich.png';
import ProfileImg from "public/icons/user-profile-svgrepo-com.svg";
import DownArrow  from  "public/icons/down-arrow-backup-2-svgrepo-com.svg";
import {useState} from "react";

export default function account()
{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [display, setDisplay] = useState('hidden');

    const handleDropDown = () => {
        setDisplay('visible');
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h3>Dashboard</h3>
                </div>
                <div className={styles.subTitle}>
                    <h4>Subjects</h4>
                </div>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <Image className={styles.CAImg} src={CAImg}/>
                        <div className={styles.cardDetails}>
                            <div className={styles.cardTitle}>
                                <span>Charted (Course) . </span>
                                <span>Strategic (Level)</span>
                            </div>
                            <span className={styles.subjectName}>Subject Name</span>
                            <div className={styles.progress}>
                                <div className={styles.progressBar}>
                                    <div></div>
                                </div>
                                <span>44%</span>
                            </div>

                            <button className={styles.btn}>
                                <span>Continue subject</span>
                                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                <Image src={RightArrow} className={styles.arrow}/>
                            </button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <Image className={styles.CAImg} src={CAImg}/>
                        <div className={styles.cardDetails}>
                            <div className={styles.cardTitle}>
                                <span>Charted (Course) . </span>
                                <span>Strategic (Level)</span>
                            </div>
                            <span className={styles.subjectName}>Subject Name</span>
                            {/*<div className={styles.progress}>*/}
                            {/*    <div className={styles.progressBar}>*/}
                            {/*        <div></div>*/}
                            {/*    </div>*/}
                            {/*    <span>44%</span>*/}
                            {/*</div>*/}

                            <div className={styles.progress}>
                                <div className={styles.progressBar2}>
                                    <div></div>
                                </div>
                                <span>100%</span>
                            </div>

                            {/*<button className={styles.btn}>*/}
                            {/*    <span>Continue subject</span>*/}
                            {/*    /!* eslint-disable-next-line jsx-a11y/alt-text *!/*/}
                            {/*    <Image src={RightArrow} className={styles.arrow}/>*/}
                            {/*</button>*/}
                            <div className={styles.status}>
                                <span >Completed</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

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