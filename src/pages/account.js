import styles from "@/styles/Account.module.css";
import Image from "next/image";
import CAImg from 'public/Images/account/CA.png'
import RightArrow from "public/icons/right-arrow-svgrepo-com.svg";
import Layout2 from "../../components/courses/Layout2";



export default function account()
{
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


        </>
    )
}

account.getLayout = function getLayout(page) {
    return <Layout2>{page}</Layout2>
}