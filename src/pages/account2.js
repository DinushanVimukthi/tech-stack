import styles from "@/styles/Account2.module.css";
import Image from "next/image";
import Person from "public/Images/partners/Ellipse 4.png";
import DownArrow  from  "public/icons/down-arrow-backup-2-svgrepo-com.svg";
import Edit from "public/icons/edit-svgrepo-com.svg";
import Plus from "public/icons/plus-svgrepo-com.svg";

export default function account2()
{
    return(
        <>
            <div className={styles.container}>
                <h3 className={styles.title}>Management Accounting (Subject Name)</h3>
                <div className={styles.details}>
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <Image className={styles.personImg} src={Person}/>
                    <div>
                        <h4>Dr.Nimali Perera</h4>
                        <span>BSc. MSc. (Qualifications)</span>
                    </div>
                </div>
                <div>
                    <div className={styles.general}>
                        <div className={styles.header}>
                            <div>
                                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                <Image className={styles.downArrow} src={DownArrow}/>
                                <h4>General</h4>
                            </div>
                            <div>
                                <span>Expand All</span>
                            </div>
                        </div>
                        <div className={styles.info}>
                            <span>Add info here</span>
                        </div>
                    </div>
                    <div className={styles.module}>
                        <div className={styles.moduleHeader}>
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <Image className={styles.downArrow} src={DownArrow}/>
                            <h4>Module name 01</h4>
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <Image className={styles.edit} src={Edit}/>
                        </div>
                        <div className={styles.btn}>
                            <button>
                                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                <Image className={styles.plus} src={Plus}/>
                                Add module video or resource
                            </button>
                        </div>
                    </div>
                    <div className={styles.module}>
                        <div className={styles.moduleHeader}>
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <Image className={styles.downArrow} src={DownArrow}/>
                            <h4>Module name 02</h4>
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <Image className={styles.edit} src={Edit}/>
                        </div>
                        <div className={styles.btn}>
                            <button>
                                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                <Image className={styles.plus} src={Plus}/>
                                Add module video or resource
                            </button>
                        </div>
                    </div>
                    <div className={styles.module}>
                        <div className={styles.moduleHeader}>
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <Image className={styles.downArrow} src={DownArrow}/>
                            <h4>Module name 03</h4>
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <Image className={styles.edit} src={Edit}/>
                        </div>
                        <div className={styles.btn}>
                            <button>
                                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                <Image className={styles.plus} src={Plus}/>
                                Add module video or resource
                            </button>
                        </div>
                    </div>
                    <div className={styles.module}>
                        <div className={styles.moduleHeader}>
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <Image className={styles.downArrow} src={DownArrow}/>
                            <h4>Module name 04</h4>
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <Image className={styles.edit} src={Edit}/>
                        </div>
                        <div className={styles.btn}>
                            <button>
                                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                <Image className={styles.plus} src={Plus}/>
                                Add module video or resource
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}