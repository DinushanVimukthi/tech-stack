
import AccaStyles from "@/styles/Acca.module.css";
import Image from "next/image";
import OK from "public/icons/Vector.png";
import Im1 from "public/Images/acca/1.png";

export default function acca() {
    return (
        <>
            <div className={AccaStyles.ImageContainer}>
                <Image className={AccaStyles.Image} src={Im1} alt="ACCA"/>
                <div className={AccaStyles.ImageText}>
                    <h1> ACCA qualification </h1>
                    <div className={AccaStyles.imageContent}>
                        ACCA is ideal if you’re looking to progress your career and become a chartered accountant, or work in an accountancy, audit or tax firm. Choose your subjects, or simply subscribe to get access to the full course.
                    </div>
                </div>
            </div>
            <div className={AccaStyles.levels}>
                <div className={AccaStyles.subTitle}>
                    We offer 3 ACCA levels
                </div>
                <div>
                    You can study part-time and at home - learning on your own terms. The average time to complete the full qualification syllabus is 3 years. And you can be confident in our courses as we have over a few years’ of experience delivering high-quality content and expertise.
                </div>
                <div className={AccaStyles.levelCards}>
                    <div className={AccaStyles.levelCard}>
                        <div className={AccaStyles.levelCardTitle}>
                            Applied Knowledge
                            <div className={AccaStyles.line}></div>
                        </div>
                        <div className={AccaStyles.levelCardContent}>
                            <ul className={AccaStyles.lists}>
                                <li><div className={AccaStyles.list}><div>Management Accounting (MA)</div><button className={AccaStyles.btn}>View</button></div></li>
                                <li><div className={AccaStyles.list}><div>Financial Accounting (FA)</div><button className={AccaStyles.btn}>View</button></div></li>
                                <li><div className={AccaStyles.list}><div>Business and Technology (BT)</div><button className={AccaStyles.btn}>View</button></div></li>
                            </ul>
                        </div>
                        <div className={AccaStyles.levelCardAction}>
                            <button className={AccaStyles.levelCardButton}>Purchase Full Level</button>
                        </div>
                    </div>
                    <div className={AccaStyles.levelCard}>
                        <div className={AccaStyles.levelCardTitle}>
                            Applied Skills
                            <div className={AccaStyles.line}></div>
                        </div>
                        <div className={AccaStyles.levelCardContent}>
                            <ul className={AccaStyles.lists}>
                                <li><div className={AccaStyles.list}><div>Corporate & Business Law (ENG)</div><button className={AccaStyles.btn}>View</button></div></li>
                                <li><div className={AccaStyles.list}><div>Performance Management (PM)</div><button className={AccaStyles.btn}>View</button></div></li>
                                <li><div className={AccaStyles.list}><div>Taxation (TX)</div><button className={AccaStyles.btn}>View</button></div></li>
                                <li><div className={AccaStyles.list}><div>Financial Reporting (FR)</div><button className={AccaStyles.btn}>View</button></div></li>
                            </ul>
                        </div>
                        <div className={AccaStyles.levelCardAction}>
                            <button className={AccaStyles.levelCardButton}>Purchase Full Level</button>
                        </div>
                    </div>
                    <div className={AccaStyles.levelCard}>
                        <div className={AccaStyles.levelCardTitle}>
                            Strategic Professional
                            <div className={AccaStyles.line}></div>
                        </div>
                        <div className={AccaStyles.levelCardContent}>
                            <ul className={AccaStyles.lists}>
                                <li><div className={AccaStyles.list}><div>Strategic Business Leader (SBL)</div><button className={AccaStyles.btn}>View</button></div></li>
                                <li><div className={AccaStyles.list}><div>Strategic Business Reporting (SBR)</div><button className={AccaStyles.btn}>View</button></div></li>
                                <li><div className={AccaStyles.list}><div>Advanced Financial Management (AFM)</div><button className={AccaStyles.btn}>View</button></div></li>
                                <li><div className={AccaStyles.list}><div>Advanced Performance Management (APM)</div><button className={AccaStyles.btn}>View</button></div></li>
                                <li><div className={AccaStyles.list}><div>Advanced Taxation (ATX)</div><button className={AccaStyles.btn}>View</button></div></li>
                                <li><div className={AccaStyles.list}><div>AAdvanced Audit & Assurance (AAA)</div><button className={AccaStyles.btn}>View</button></div></li>
                            </ul>
                        </div>
                        <div className={AccaStyles.levelCardAction}>
                            <button className={AccaStyles.levelCardButton}>Purchase Full Level</button>
                        </div>
                    </div>
                </div>
                <button className={AccaStyles.fullWidthBtn}>Purchase Full Level</button>
            </div>
            <div className={AccaStyles.content}>
                <div className={AccaStyles.subTitle}>
                    Why study with <span className={AccaStyles.red}> Enrich Business School? </span>
                </div>
                <div className={AccaStyles.slider}></div>
                <div className={AccaStyles.contentCards}>
                    <div className={AccaStyles.contentCard}>
                        <div className={AccaStyles.contentCardTitle}>
                            <div className={AccaStyles.contentCardIcon}>
                                <Image src={OK} alt="icon" width={40} height={40}  className={AccaStyles.Image}/>
                            </div>
                            <div className={AccaStyles.contentCardText}>
                                <div className={AccaStyles.contentCardTextTitle}>
                                    Quality tuition
                                </div>
                                <div className={AccaStyles.contentCardTextContent}>
                                    Until late, 7 days a week, Response in 4 hours or less
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={AccaStyles.contentCard}>
                        <div className={AccaStyles.contentCardTitle}>
                            <div className={AccaStyles.contentCardIcon}>
                                <Image src={OK} alt="icon" width={40} height={40}  className={AccaStyles.Image}/>
                            </div>
                            <div className={AccaStyles.contentCardText}>
                                <div className={AccaStyles.contentCardTextTitle}>
                                    Flexible study
                                </div>
                                <div className={AccaStyles.contentCardTextContent}>
                                    Course offerings across all exam sitting for all study options available
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={AccaStyles.contentCard}>
                        <div className={AccaStyles.contentCardTitle}>
                            <div className={AccaStyles.contentCardIcon}>
                                <Image src={OK} alt="icon" width={40} height={40}  className={AccaStyles.Image}/>
                            </div>
                            <div className={AccaStyles.contentCardText}>
                                <div className={AccaStyles.contentCardTextTitle}>
                                    Exam Confidence
                                </div>
                                <div className={AccaStyles.contentCardTextContent}>
                                    Get exam confidence with testing at every stage of your studies
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={AccaStyles.contentCard}>
                        <div className={AccaStyles.contentCardTitle}>
                            <div className={AccaStyles.contentCardIcon}>
                                <Image src={OK} alt="icon" width={40} height={40} className={AccaStyles.Image}/>
                            </div>
                            <div className={AccaStyles.contentCardText}>
                                <div className={AccaStyles.contentCardTextTitle}>
                                    Value for money
                                </div>
                                <div className={AccaStyles.contentCardTextContent}>
                                    Lifetime pass guarantee* included to support you pass your exam<br/> (*T & C apply)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}