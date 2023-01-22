
import AccaStyles from "@/styles/Acca.module.css";
import Image from "next/image";
import OK from "public/icons/Vector.png";

import cor_1 from "public/Images/acca/cor_1.png";

import Im1 from "public/Images/acca/1.png";
import Im2 from "public/Images/acca/2.png";
import Im3 from "public/Images/acca/young-latin-man-smiles-making-video-call-with-his-laptop-from-terrace-coffee-shop-concept-technology-urban-lifestyle 1.png";
import Im4   from "public/Images/acca/10.png";
import Im5 from "public/Images/acca/distance-education-concept-young-mixed-race-woman-sitting-desk-library-using-laptop-watching-lecture-webinar 1.png";
import Im6 from "public/Images/acca/6.png";
import Im7 from "public/Images/acca/7.png";
import Im8 from "public/Images/acca/8.png";
import Im9 from "public/Images/acca/9.png";
import Im10 from "public/Images/acca/10.png";
import Im11 from "public/Images/acca/11.png";
import Im12 from "public/Images/acca/12.png";
import Im13 from "public/Images/acca/13.png";
import Im14 from "public/Images/acca/14.png";
import Im15 from "public/Images/acca/15.png";
import Im16 from "public/Images/acca/16.png";
import Im17 from "public/Images/acca/17.png";
import Im18 from "public/Images/acca/18.png";
import Im19 from "public/Images/acca/19.png";

import NavigationIcon from "public/icons/navigation.png";

import ExpandBtn from "public/icons/navexpand.png";
import Accordion from "../../components/courses/Accordion";
import {useState} from "react";

export default function acca() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [slide, setSlide] = useState(1);
    const maxSlide = 2;
    const NextSlide = () => {
        if (slide < maxSlide) {
            setSlide(slide + 1);
        }
    }
    const PrevSlide = () => {
        if (slide > 1) {
            setSlide(slide - 1);
        }
        console.log(slide)
    }
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
                    <div className={AccaStyles.levelCard} style={{
                        pointerEvents:'none',
                    }}>
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
                <button className={AccaStyles.fullWidthBtn}>Purchase Full Course</button>
            </div>
            <div className={AccaStyles.content}>
                <div className={AccaStyles.subTitle}>
                    Why study with <span className={AccaStyles.red}> Enrich Business School? </span>
                </div>
                <div className={AccaStyles.why}>
                    <div className={AccaStyles.bar} style={{
                        marginTop: '100px',
                    }}></div>
                    <div className={AccaStyles.carousel}>
                        <div className={AccaStyles.carouselPrev} onClick={PrevSlide} style={{
                            backgroundColor: slide>1 ? 'rgba(200, 0, 0, 1)':'white',
                        }}>
                            <Image src={NavigationIcon} alt="left" style={{
                                transform: 'rotate(180deg)',
                                filter: slide>1 ? 'invert(0)':'invert(1)',

                                color: slide>1 ? 'white':'black',
                                borderRadius: '50%',
                            }}/>
                        </div>
                        <div className={AccaStyles.carouselContainer}>
                            <div className={AccaStyles.carouselContent} id={'1'} style={{
                                display: slide === 1 ? 'flex' : 'none',
                            }}>
                                <div className={AccaStyles.carouselIcon}>
                                    <Image src={cor_1} alt="ACCA" width={160}/>
                                </div>
                                <div className={AccaStyles.carouselText}>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    "I completed my AAT qualification and then progressed to the ACCA qualification as I was confident that MyEnrich.lk would equip me with everything that I needed. The tutors are responsive and flexible to the needs of the students which really makes the difference."
                                    <br/>
                                    <br/>
                                    <span style={{
                                        fontWeight: 'bold'
                                    }}>Yashodha Virajani</span>
                                    MyEnrich.lk ACCA Student

                                </div>
                            </div>
                            <div className={AccaStyles.carouselContent} id={'2'} style={{
                                display: slide === 2 ? 'flex' : 'none',
                            }}>
                                <div className={AccaStyles.carouselIcon}>
                                    <Image src={cor_1} alt="ACCA" width={160}/>
                                </div>
                                <div className={AccaStyles.carouselText}>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    2
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    "I completed my AAT qualification and then progressed to the ACCA qualification as I was confident that MyEnrich.lk would equip me with everything that I needed. The tutors are responsive and flexible to the needs of the students which really makes the difference."
                                    <br/>
                                    <br/>
                                    <span style={{
                                        fontWeight: 'bold'
                                    }}>Yashodha Virajani</span>
                                    MyEnrich.lk ACCA Student

                                </div>
                            </div>
                        </div>
                        <div className={AccaStyles.carouselNext} onClick={NextSlide} style={{
                            backgroundColor: slide<maxSlide ? 'rgba(200, 0, 0, 1)':'white',
                        }}>
                            <Image src={NavigationIcon} alt="right" style={{
                                borderRadius: '50%',
                                filter: slide<maxSlide ? 'invert(0)':'invert(1)',
                            }}/>
                        </div>
                    </div>
                </div>


                <div className={AccaStyles.contentCards} style={{
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <div className={AccaStyles.contentCard} style={{

                    }}>
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
                <div className={AccaStyles.faq}>
                    <div className={AccaStyles.faqTitle}>
                        Frequently asked questions <span className={AccaStyles.red}> (FAQs)</span>
                    </div>
                    <div className={AccaStyles.accordion}>
                        <Accordion
                            title="1. How do I access my learning and testing materials?"
                            content="You can access your learning and testing materials by clicking on the 'courses' tab on MyEnrich.lk. From here, you can then select the course you wish to access, and start studying!" />
                        <Accordion
                            title="2. Do I have to register with ACCA?"
                            content="Yes - you will need to register with ACCA approximately 6-8 weeks prior to the exam entry deadline. You can find more information about registration on the ACCA website (https://www.accaglobal.com/acca-registration-intro.html) " />
                        <Accordion
                            title="3. How do I apply to be an ACCA student?"
                            content="You can access your learning and testing materials by clicking on the 'courses' tab on MyEnrich.lk. From here, you can then select the course you wish to access, and start studying!" />
                        <Accordion
                            title="4. What are the entry requirements for the ACCA Qualification?"
                            content="You can access your learning and testing materials by clicking on the 'courses' tab on MyEnrich.lk. From here, you can then select the course you wish to access, and start studying!" />
                        <Accordion
                            title="5. What documents do I need to register as a student?"
                            content="You can access your learning and testing materials by clicking on the 'courses' tab on MyEnrich.lk. From here, you can then select the course you wish to access, and start studying!" />
                        <Accordion
                            title="6. How long does it take to register as a student?"
                            content="You can access your learning and testing materials by clicking on the 'courses' tab on MyEnrich.lk. From here, you can then select the course you wish to access, and start studying!" />
                        <Accordion
                            title="7. What is a Joint Examination Scheme?"
                            content="You can access your learning and testing materials by clicking on the 'courses' tab on MyEnrich.lk. From here, you can then select the course you wish to access, and start studying!" />
                        <Accordion
                            title="8. What fees are payable?"
                            content="You can access your learning and testing materials by clicking on the 'courses' tab on MyEnrich.lk. From here, you can then select the course you wish to access, and start studying!" />
                        <Accordion
                            title="9. Can I submit my registration form and pay at a later date?"
                            content="You can access your learning and testing materials by clicking on the 'courses' tab on MyEnrich.lk. From here, you can then select the course you wish to access, and start studying!" />
                        <Accordion
                            title="10. What exams do I have to take to complete the ACCA Qualification?"
                            content="You can access your learning and testing materials by clicking on the 'courses' tab on MyEnrich.lk. From here, you can then select the course you wish to access, and start studying!" />
                    </div>
                    <div className={AccaStyles.seemore} style={{
                        marginTop: '1rem',
                        marginBottom: '1rem',
                        fontWeight: 'bold',
                    }}>
                        <div className={AccaStyles.red}>
                            See more
                        </div>
                    </div>
                </div>
                <div className={AccaStyles.section} >
                    <div className={AccaStyles.sectionTitle}>
                        ACCA - Applied Knowledge
                    </div>
                    <div className={AccaStyles.sectionContent}>
                        <div style={{
                            fontSize: '16px',
                        }}>
                            <div style={{
                                marginBottom: '1rem',
                            }}>
                                ACCA Applied Knowledge will develop your understanding of essential financial, business, and management accounting techniques. You’ll learn basic business and management principles and the skills required of an accountant working in the business.

                            </div>
                            <ul style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem',
                                paddingLeft: '1rem',
                            }}>
                                <li>View Structure</li>
                                <li>View Entry Requirements</li>
                                <li>View Syllabus</li>
                                <li>View course overview</li>
                            </ul>
                        </div>
                        <div className={AccaStyles.sectionContentImage}>
                            <Image src={Im2} alt="icon" style={{
                                width: '100%',
                                height: '100%',
                            }} />
                        </div>
                        <div className={AccaStyles.subSection}>
                            <div className={AccaStyles.subTitle}>
                                Structure
                            </div>
                            <div className={AccaStyles.subContent}>
                                This level consists of three mandatory subjects (Business and Technology (BT), Management Accounting (MA), and Financial Accounting (FA)) which can be sat in any order. Once you’ve completed all three subjects, you can move onto the next level - Applied Skills.
                                <br/>
                                <br/>
                                You need to achieve a mark of 50% or higher to pass these subjects. These are taken as two-hour computer-based exams.
                            </div>
                            <div className={AccaStyles.subTitle} style={{
                                alignSelf: 'center',
                            }}>
                                Entry Requirement
                            </div>
                            <div style={{
                                textAlign: 'center',
                                lineHeight: '24px'
                            }}>
                                    Students need to have 2 GCE Advanced Level passes (Grades A–C) with 3 GCE Ordinary Level passes (A-C). English Language may appear as Medium Language
                                <br/><b>Or</b><br/>
                                    Students need to pass (Minimum 3 S passes) the Sri Lankan General Certificate of Education (Advanced Level)
                                    <br/><b>Or</b><br/>
                                    Member or passed finalist in AAT (Association of Accounting Technicians)
                                    <br/><b>Or</b><br/>
                                    National Certificate recognized by the ACCA
                            </div>

                        </div>
                        <div className={AccaStyles.subSection}>
                            <div className={AccaStyles.subTitle}>
                                Syllabus
                            </div>
                            <div className={AccaStyles.subContent} style={{
                                flexDirection: 'column'
                            }}>
                                You’ll learn about the role of accounting in the business environment and develop the practical skills and techniques required of an accountant.                                <br/>
                                <div className={AccaStyles.contentCards}>
                                    <div className={AccaStyles.contentCard} style={{
                                        width: 'auto',
                                        height: 'auto',
                                        padding: '0.5rem',
                                        pointerEvents:'none',
                                    }}>
                                        <div className={AccaStyles.contentCardIcon}>
                                            <Image src={Im3} alt="icon" style={{
                                                width: '100%',
                                            }} />
                                        </div>
                                        <div className={AccaStyles.contentCardTitle}>
                                            Management Accounting (MA)
                                        </div>
                                        <div className={AccaStyles.contentCardText}>
                                            <button className={AccaStyles.btn}>View</button>
                                        </div>
                                    </div>
                                    <div className={AccaStyles.contentCard} style={{
                                        width: 'auto',
                                        height: 'auto',
                                        padding: '0.5rem',
                                        pointerEvents:'none',
                                    }}>
                                        <div className={AccaStyles.contentCardIcon}>
                                            <Image src={Im4} alt="icon" style={{
                                                width: '100%',
                                            }} />
                                        </div>
                                        <div className={AccaStyles.contentCardTitle}>
                                            Financial Accounting (FA)
                                        </div>
                                        <div className={AccaStyles.contentCardText}>
                                            <button className={AccaStyles.btn}>View </button>
                                        </div>
                                    </div>
                                    <div className={AccaStyles.contentCard} style={{
                                        width: 'auto',
                                        height: 'auto',
                                        padding: '0.5rem',
                                        pointerEvents:'none',
                                    }}>
                                        <div className={AccaStyles.contentCardIcon}>
                                            <Image src={Im5} alt="icon" style={{
                                                width: '100%',
                                            }} />
                                        </div>
                                        <div className={AccaStyles.contentCardTitle}>
                                            Business and Technology (BT)
                                        </div>
                                        <div className={AccaStyles.contentCardText}>
                                            <button className={AccaStyles.btn}>View </button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        <button className={AccaStyles.fullWidthBtn}>
                            Purchase Full Course
                        </button>
                        <div className={AccaStyles.subTitle} style={{
                            margin: '0 0'
                        }}>Course overview</div>
                        <div className={AccaStyles.subSection} style={{}}>
                            <div className={AccaStyles.subTitle} style={{
                                margin: '0 0'
                            }}>
                                Study methods available for this level
                            </div>
                            <div className={AccaStyles.subContent} style={{
                                flexDirection: 'column',
                                margin: '0 0'
                            }}>
                                Online Lecturers
                                <br/>
                                <br/>
                                The benefits of a traditional classroom but with the flexibility of an online environment. Live interactive classes at a scheduled time are delivered by expert lecturers following the same exam-focused material and structure as traditional classroom courses.
                            </div>
                            <div className={AccaStyles.subTitle} style={{
                                margin: '0 0'
                            }}>
                                Exams and sittings
                            </div>
                            <div className={AccaStyles.subContent} style={{
                                flexDirection: 'column',
                                margin: '0 0'
                            }}>
                                Timings and working towards a sitting
                                <br/>
                                <br/>
                                You must pass all three mandatory exams to complete this level. All exams are computer-based (CBE) and assess all areas of the syllabus. CBEs must be booked directly with the ACCA.
                            </div>
                        <div className={AccaStyles.subTitle} style={{
                                margin: '0 0'
                            }}>
                                How long does it take to pass?
                            </div>
                            <div className={AccaStyles.subContent} style={{
                                flexDirection: 'column',
                                margin: '0 0'
                            }}>
                                Most students complete this level within 6 to 12 months, however, this varies and will depend on how quickly you want to complete the course. Applied Knowledge exams are on-demand computer-based exams, which means that they can be sat at any point in the year as there are no specific exam sittings.
                            </div>
                            <div className={AccaStyles.subTitle} style={{
                                margin: '0 0'
                            }}>
                                Exams and sittings
                            </div>
                            <div className={AccaStyles.subContent} style={{
                                flexDirection: 'column',
                                margin: '0 0'
                            }}>
                                We’ll support you every step of the way throughout your learning experience with us. You can contact a tutor and get the help you need quickly and easily.
                                <br/>
                                <br/>
                                Provided by our Academic Support team (our dedicated team of expert tutors):
                                <ul style={{
                                    padding: '0 0 0 1rem'
                                }}>
                                    <li>LiveChat (instant feedback- Whatsapp)</li>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    <li>Email (we'll get back to you within 4 hrs)</li>
                                    <li>Online community (we’ll get back to you within 4 hrs)</li>
                                </ul>
                                </div>
                            <div className={AccaStyles.subTitle} style={{
                                margin: '0 0'
                            }}>
                                Testing and mocks
                            </div>
                            <div className={AccaStyles.subContent} style={{
                                flexDirection: 'column',
                                margin: '0 0'
                            }}>
                                We have a wealth of materials to help you revise for and pass your exams.
                                <br/>
                                <br/>
                                Smart Mocks
                                <br/>
                                <br/>
                                As you go along, knowledge checks help assess your understanding of a topic before you move on to the next one. So You will have a mock exam after finishing each lesson in the subject.
                                <br/>
                                <br/>
                                Practice your exam technique with a mock exam, which replicates the format of the final exam, so you can check your progress. Mocks are computer marked and correct answers can be viewed online so you can learn from your answers. We provide you with model answers so you can learn and look to improve your own answer.
                                <br/>
                                <br/>
                                Exam preparation tests
                                <br/>
                                <br/>
                                This includes a minimum of 2 exam preparation tests per subject.
                            </div>


                        </div>

                    </div>
                </div>
                <div className={AccaStyles.section} >
                    <div className={AccaStyles.sectionTitle}>
                        ACCA - Applied Skills
                    </div>
                    <div className={AccaStyles.sectionContent}>
                        <div style={{
                            fontSize: '16px',
                        }}>
                            <div style={{
                                marginBottom: '1rem',
                            }}>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                This level is suitable if you have relevant work experience in finance, and/or have completed the previous level, ACCA Applied Knowledge. You'll develop a broad understanding of accounting in business and learn how to understand and interpret financial information.
                            </div>
                            <ul style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem',
                                paddingLeft: '1rem',
                            }}>
                                <li>View Structure</li>
                                <li>View Entry Requirements</li>
                                <li>View Syllabus</li>
                                <li>View course overview</li>
                            </ul>
                        </div>
                        <div className={AccaStyles.sectionContentImage}>
                            <Image src={Im6} alt="icon" style={{
                                width: '100%',
                                height: '100%',
                            }} />
                        </div>
                        <div className={AccaStyles.subSection}>
                            <div className={AccaStyles.subTitle}>
                                Structure
                            </div>
                            <div className={AccaStyles.subContent}>
                                This follows on from ACCA Applied Knowledge and consists of six mandatory subjects which are examined individually. To be awarded the Advanced Diploma in Accounting and Business, you must successfully complete all six subjects in addition to the Ethics and Professional Skills module (EPSM). Ideally, you should complete the Ethics and Professional Skills module before, or alongside your first Strategic Professional subject. If you leave the EPSM until later on you’ll be at an unnecessary disadvantage. Please contact the ACCA directly to complete this module.
                            </div>
                            <div className={AccaStyles.subTitle} style={{
                            }}>
                                Entry Requirement
                            </div>
                            <div style={{
                                lineHeight: '24px'
                            }}>
                                If you have completed the Applied Knowledge level, the final level of AAT, or the Foundation Diploma, you will start studying at the Applied Skills Level.
                            </div>

                        </div>
                        <div className={AccaStyles.subSection}>
                            <div className={AccaStyles.subTitle}>
                                Syllabus
                            </div>
                            <div className={AccaStyles.subContent} style={{
                                flexDirection: 'column'
                            }}>
                                Subjects can be sat in any order, but you should sit AA with or after FR. Students can sit up to four subjects in one exam sitting and a maximum of eight per year. You can overlap with Applied Knowledge as long as this level is being completed.
                            </div>
                        </div>
                        <div className={AccaStyles.subSection}>
                            <div className={AccaStyles.subTitle}>
                                Mandatory
                            </div>
                            <div className={AccaStyles.subContent} style={{
                                flexDirection: 'column'
                            }}>
                                <div className={AccaStyles.contentCards} style={{
                                    justifyContent: 'flex-start'
                                }}>
                                    <div className={AccaStyles.contentCard} style={{
                                        width: 'auto',
                                        height: 'auto',
                                        padding: '0.5rem',
                                        pointerEvents:'none',
                                    }}>
                                        <div className={AccaStyles.contentCardIcon}>
                                            <Image src={Im7} alt="icon" style={{
                                                width: '100%',
                                            }} />
                                        </div>
                                        <div className={AccaStyles.contentCardTitle}>
                                            Audit & Assurance (AA)
                                        </div>
                                        <div className={AccaStyles.contentCardText}>
                                            <button className={AccaStyles.btn}>View</button>
                                        </div>
                                    </div>
                                    <div className={AccaStyles.contentCard} style={{
                                        width: 'auto',
                                        height: 'auto',
                                        padding: '0.5rem',
                                        pointerEvents:'none',
                                    }}>
                                        <div className={AccaStyles.contentCardIcon}>
                                            <Image src={Im8} alt="icon" style={{
                                                width: '100%',
                                            }} />
                                        </div>
                                        <div className={AccaStyles.contentCardTitle}>
                                            Financial Reporting (FR)
                                        </div>
                                        <div className={AccaStyles.contentCardText}>
                                            <button className={AccaStyles.btn}>View </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={AccaStyles.subSection}>
                            <div className={AccaStyles.subTitle}>
                                Optional
                            </div>
                            <div className={AccaStyles.subContent} style={{
                                flexDirection: 'column'
                            }}>
                                <div className={AccaStyles.contentCards} style={{
                                    justifyContent: 'flex-start'
                                }}>
                                    <div className={AccaStyles.contentCard} style={{
                                        width: '300px',
                                        height:'280px',
                                        padding: '0.5rem',
                                        pointerEvents:'none',
                                    }}>
                                        <div className={AccaStyles.contentCardIcon}>
                                            <Image src={Im9} alt="icon" style={{
                                                width: '100%',
                                            }} />
                                        </div>
                                        <div className={AccaStyles.contentCardTitle}>
                                            Corporate & Business Law (ENG)
                                        </div>
                                        <div className={AccaStyles.contentCardText}>
                                            <button className={AccaStyles.btn}>View</button>
                                        </div>
                                    </div>
                                    <div className={AccaStyles.contentCard} style={{
                                        width: '300px',
                                        height:'280px',
                                        padding: '0.5rem',
                                        pointerEvents:'none',
                                    }}>
                                        <div className={AccaStyles.contentCardIcon}>
                                            <Image src={Im10} alt="icon" style={{
                                                width: '100%',
                                            }} />
                                        </div>
                                        <div className={AccaStyles.contentCardTitle}>
                                            Performance Management (PM)
                                        </div>
                                        <div className={AccaStyles.contentCardText}>
                                            <button className={AccaStyles.btn}>View </button>
                                        </div>
                                    </div>
                                    <div className={AccaStyles.contentCard} style={{
                                        width: '300px',
                                        height:'280px',
                                        padding: '0.5rem',
                                        pointerEvents:'none',
                                    }}>
                                        <div className={AccaStyles.contentCardIcon}>
                                            <Image src={Im11} alt="icon" style={{
                                                width: '100%',
                                            }} />
                                        </div>
                                        <div className={AccaStyles.contentCardTitle}>
                                            Taxation (TX)
                                        </div>
                                        <div className={AccaStyles.contentCardText}>
                                            <button className={AccaStyles.btn}>View </button>
                                        </div>
                                    </div>
                                    <div className={AccaStyles.contentCard} style={{
                                        width: '300px',
                                        height:'280px',
                                        padding: '0.5rem',
                                        pointerEvents:'none',
                                    }}>
                                        <div className={AccaStyles.contentCardIcon}>
                                            <Image src={Im12} alt="icon" style={{
                                                width: '100%',
                                            }} />
                                        </div>
                                        <div className={AccaStyles.contentCardTitle}>
                                            Financial Management (FM)
                                        </div>
                                        <div className={AccaStyles.contentCardText}>
                                            <button className={AccaStyles.btn}>View </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <button className={AccaStyles.fullWidthBtn}>
                            Purchase Full Course
                        </button>
                        <div className={AccaStyles.subTitle} style={{
                            margin: '0 0'
                        }}>Course overview</div>
                        <div className={AccaStyles.subSection} style={{}}>
                            <div className={AccaStyles.subTitle} style={{
                                margin: '0 0'
                            }}>
                                Study methods available for this level
                            </div>
                            <div className={AccaStyles.subContent} style={{
                                flexDirection: 'column',
                                margin: '0 0'
                            }}>
                                Online Lecturers
                                <br/>
                                <br/>
                                The benefits of a traditional classroom but with the flexibility of an online environment. Live interactive classes at a scheduled time are delivered by expert lecturers following the same exam-focused material and structure as traditional classroom courses.
                            </div>
                            <div className={AccaStyles.subTitle} style={{
                                margin: '0 0'
                            }}>
                                Exams and sittings
                            </div>
                            <div className={AccaStyles.subContent} style={{
                                flexDirection: 'column',
                                margin: '0 0'
                            }}>
                                Timings and working towards a sitting
                                <br/>
                                <br/>
                                You must pass all three mandatory exams to complete this level. All exams are computer-based (CBE) and assess all areas of the syllabus. CBEs must be booked directly with the ACCA.
                            </div>
                        <div className={AccaStyles.subTitle} style={{
                                margin: '0 0'
                            }}>
                                How long does it take to pass?
                            </div>
                            <div className={AccaStyles.subContent} style={{
                                flexDirection: 'column',
                                margin: '0 0'
                            }}>
                                Most students complete this level within 6 to 12 months, however, this varies and will depend on how quickly you want to complete the course. Applied Knowledge exams are on-demand computer-based exams, which means that they can be sat at any point in the year as there are no specific exam sittings.
                            </div>
                            <div className={AccaStyles.subTitle} style={{
                                margin: '0 0'
                            }}>
                                Exams and sittings
                            </div>
                            <div className={AccaStyles.subContent} style={{
                                flexDirection: 'column',
                                margin: '0 0'
                            }}>
                                We’ll support you every step of the way throughout your learning experience with us. You can contact a tutor and get the help you need quickly and easily.
                                <br/>
                                <br/>
                                Provided by our Academic Support team (our dedicated team of expert tutors):
                                <ul style={{
                                    padding: '0 0 0 1rem'
                                }}>
                                    <li>LiveChat (instant feedback- Whatsapp)</li>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    <li>Email (we'll get back to you within 4 hrs)</li>
                                    <li>Online community (we’ll get back to you within 4 hrs)</li>
                                </ul>
                                </div>
                            <div className={AccaStyles.subTitle} style={{
                                margin: '0 0'
                            }}>
                                Testing and mocks
                            </div>
                            <div className={AccaStyles.subContent} style={{
                                flexDirection: 'column',
                                margin: '0 0'
                            }}>
                                We have a wealth of materials to help you revise for and pass your exams.
                                <br/>
                                <br/>
                                Smart Mocks
                                <br/>
                                <br/>
                                As you go along, knowledge checks help assess your understanding of a topic before you move on to the next one. So You will have a mock exam after finishing each lesson in the subject.
                                <br/>
                                <br/>
                                Practice your exam technique with a mock exam, which replicates the format of the final exam, so you can check your progress. Mocks are computer marked and correct answers can be viewed online so you can learn from your answers. We provide you with model answers so you can learn and look to improve your own answer.
                                <br/>
                                <br/>
                                Exam preparation tests
                                <br/>
                                <br/>
                                This includes a minimum of 2 exam preparation tests per subject.
                            </div>


                        </div>

                    </div>
                </div>
                <div className={AccaStyles.section} >
                    <div className={AccaStyles.sectionTitle}>
                        ACCA - Strategic Professional
                    </div>
                    <div className={AccaStyles.sectionContent}>
                        <div style={{
                            fontSize: '16px',
                        }}>
                            <div style={{
                                marginBottom: '1rem',
                            }}>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                This level is suitable if you have relevant work experience in finance, and/or have completed the previous level, ACCA Applied Knowledge. You'll develop a broad understanding of accounting in business and learn how to understand and interpret financial information.
                            </div>
                            <ul style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem',
                                paddingLeft: '1rem',
                            }}>
                                <li>View Structure</li>
                                <li>View Entry Requirements</li>
                                <li>View Syllabus</li>
                                <li>View course overview</li>
                            </ul>
                        </div>
                        <div className={AccaStyles.sectionContentImage}>
                            <Image src={Im13} alt="icon" style={{
                                width: '100%',
                                height: '100%',
                            }} />
                        </div>
                        <div className={AccaStyles.subSection}>
                            <div className={AccaStyles.subTitle}>
                                Structure
                            </div>
                            <div className={AccaStyles.subContent}>
                                Strategic Professional consists of six subjects from Essentials and Options. You will sit four of these exams to complete this level.
                                <br/>
                                <br/>
                                ACCA advises that you attempt their Ethics and Professional Skills module before you sit any exams on Strategic Professional. ACCA says that students who do so are statistically proven to increase their chances of passing the exams.
                                <br/>
                                <br/>
                                If you are considering studying AAA as one of your options subjects, please be aware that we strongly recommend that you attempt this after or at the same time as studying SBR.
                                <br/>
                                <br/>
                                You should also be aware with all subjects at this level there will be a certain amount of assumed knowledge from earlier subjects at the Applied Skills level, so if you were exempt or sat these some time ago, you should use the resources and advice at the beginning of your course to refresh your understanding.
                            </div>
                            <div className={AccaStyles.subTitle} style={{
                            }}>
                                Entry Requirement
                            </div>
                            <div style={{
                                lineHeight: '24px'
                            }}>
                                You should have completed the previous two ACCA levels; Applied Knowledge and Applied Skills, or have been awarded exemptions from Applied Knowledge and/or Applied Skills.
                            </div>

                        </div>
                        <div className={AccaStyles.subSection}>
                            <div className={AccaStyles.subTitle}>
                                Syllabus
                            </div>
                            <div className={AccaStyles.subContent} style={{
                                flexDirection: 'column'
                            }}>
                                You’ll learn about the role of accounting in the business environment and develop the practical skills and techniques required of an accountant.
                                <br/>
                                <br/>
                                The two Essentials subjects are mandatory - these are SBR and SBL. You can select two out of four subjects from the Options, which include AFM, APM, ATX, and AAA.
                            </div>
                        </div>
                        <div className={AccaStyles.subSection}>
                            <div className={AccaStyles.subTitle}>
                                Mandatory
                            </div>
                            <div className={AccaStyles.subContent} style={{
                                flexDirection: 'column'
                            }}>
                                <div className={AccaStyles.contentCards} style={{
                                    justifyContent: 'flex-start'
                                }}>
                                    <div className={AccaStyles.contentCard} style={{
                                        width: 'auto',
                                        height: 'auto',
                                        padding: '0.5rem',
                                        pointerEvents:'none',
                                    }}>
                                        <div className={AccaStyles.contentCardIcon}>
                                            <Image src={Im14} alt="icon" style={{
                                                width: '100%',
                                            }} />
                                        </div>
                                        <div className={AccaStyles.contentCardTitle}>
                                            Strategic Business Leader (SBL)
                                        </div>
                                        <div className={AccaStyles.contentCardText}>
                                            <button className={AccaStyles.btn}>View</button>
                                        </div>
                                    </div>
                                    <div className={AccaStyles.contentCard} style={{
                                        width: 'auto',
                                        height: 'auto',
                                        padding: '0.5rem',
                                        pointerEvents:'none',
                                    }}>
                                        <div className={AccaStyles.contentCardIcon}>
                                            <Image src={Im15} alt="icon" style={{
                                                width: '100%',
                                            }} />
                                        </div>
                                        <div className={AccaStyles.contentCardTitle}>
                                            Strategic Business Reporting (SBR)
                                        </div>
                                        <div className={AccaStyles.contentCardText}>
                                            <button className={AccaStyles.btn}>View </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={AccaStyles.subSection}>
                            <div className={AccaStyles.subTitle}>
                                Optional
                            </div>
                            <div className={AccaStyles.subContent} style={{
                                flexDirection: 'column'
                            }}>
                                <div className={AccaStyles.contentCards} style={{
                                    justifyContent: 'flex-start'
                                }}>
                                    <div className={AccaStyles.contentCard} style={{
                                        width: '300px',
                                        height:'280px',
                                        padding: '0.5rem',
                                        pointerEvents:'none',
                                    }}>
                                        <div className={AccaStyles.contentCardIcon}>
                                            <Image src={Im16} alt="icon" style={{
                                                width: '100%',
                                            }} />
                                        </div>
                                        <div className={AccaStyles.contentCardTitle}>
                                            Advanced Financial Management (AFM)
                                        </div>
                                        <div className={AccaStyles.contentCardText}>
                                            <button className={AccaStyles.btn}>View</button>
                                        </div>
                                    </div>
                                    <div className={AccaStyles.contentCard} style={{
                                        width: '300px',
                                        height:'280px',
                                        padding: '0.5rem',
                                        pointerEvents:'none',
                                    }}>
                                        <div className={AccaStyles.contentCardIcon}>
                                            <Image src={Im17} alt="icon" style={{
                                                width: '100%',
                                            }} />
                                        </div>
                                        <div className={AccaStyles.contentCardTitle}>
                                            Advanced Performance Management (APM)
                                        </div>
                                        <div className={AccaStyles.contentCardText}>
                                            <button className={AccaStyles.btn}>View </button>
                                        </div>
                                    </div>
                                    <div className={AccaStyles.contentCard} style={{
                                        width: '300px',
                                        height:'280px',
                                        padding: '0.5rem',
                                        pointerEvents:'none',
                                    }}>
                                        <div className={AccaStyles.contentCardIcon}>
                                            <Image src={Im18} alt="icon" style={{
                                                width: '100%',
                                            }} />
                                        </div>
                                        <div className={AccaStyles.contentCardTitle}>
                                            Advanced Taxation (ATX)
                                        </div>
                                        <div className={AccaStyles.contentCardText}>
                                            <button className={AccaStyles.btn}>View </button>
                                        </div>
                                    </div>
                                    <div className={AccaStyles.contentCard} style={{
                                        width: '300px',
                                        height:'280px',
                                        padding: '0.5rem',
                                        pointerEvents:'none',
                                    }}>
                                        <div className={AccaStyles.contentCardIcon}>
                                            <Image src={Im19} alt="icon" style={{
                                                width: '100%',
                                            }} />
                                        </div>
                                        <div className={AccaStyles.contentCardTitle}>
                                            Advanced Audit & Assurance (AAA)
                                        </div>
                                        <div className={AccaStyles.contentCardText}>
                                            <button className={AccaStyles.btn}>View </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <button className={AccaStyles.fullWidthBtn}>
                            Purchase Full Course
                        </button>
                        <div className={AccaStyles.subTitle} style={{
                            margin: '0 0'
                        }}>Course overview</div>
                        <div className={AccaStyles.subSection} style={{}}>
                            <div className={AccaStyles.subTitle} style={{
                                margin: '0 0'
                            }}>
                                Study methods available for this level
                            </div>
                            <div className={AccaStyles.subContent} style={{
                                flexDirection: 'column',
                                margin: '0 0'
                            }}>
                                Online Lecturers
                                <br/>
                                <br/>
                                The benefits of a traditional classroom but with the flexibility of an online environment. Live interactive classes at a scheduled time are delivered by expert lecturers following the same exam-focused material and structure as traditional classroom courses.
                            </div>
                            <div className={AccaStyles.subTitle} style={{
                                margin: '0 0'
                            }}>
                                Exams and sittings
                            </div>
                            <div className={AccaStyles.subContent} style={{
                                flexDirection: 'column',
                                margin: '0 0'
                            }}>
                                Timings and working towards a sitting
                                <br/>
                                <br/>
                                You must pass all three mandatory exams to complete this level. All exams are computer-based (CBE) and assess all areas of the syllabus. CBEs must be booked directly with the ACCA.
                            </div>
                        <div className={AccaStyles.subTitle} style={{
                                margin: '0 0'
                            }}>
                                How long does it take to pass?
                            </div>
                            <div className={AccaStyles.subContent} style={{
                                flexDirection: 'column',
                                margin: '0 0'
                            }}>
                                Most students complete this level within 6 to 12 months, however, this varies and will depend on how quickly you want to complete the course. Applied Knowledge exams are on-demand computer-based exams, which means that they can be sat at any point in the year as there are no specific exam sittings.
                            </div>
                            <div className={AccaStyles.subTitle} style={{
                                margin: '0 0'
                            }}>
                                Exams and sittings
                            </div>
                            <div className={AccaStyles.subContent} style={{
                                flexDirection: 'column',
                                margin: '0 0'
                            }}>
                                We’ll support you every step of the way throughout your learning experience with us. You can contact a tutor and get the help you need quickly and easily.
                                <br/>
                                <br/>
                                Provided by our Academic Support team (our dedicated team of expert tutors):
                                <ul style={{
                                    padding: '0 0 0 1rem'
                                }}>
                                    <li>LiveChat (instant feedback- Whatsapp)</li>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    <li>Email (we'll get back to you within 4 hrs)</li>
                                    <li>Online community (we’ll get back to you within 4 hrs)</li>
                                </ul>
                                </div>
                            <div className={AccaStyles.subTitle} style={{
                                margin: '0 0'
                            }}>
                                Testing and mocks
                            </div>
                            <div className={AccaStyles.subContent} style={{
                                flexDirection: 'column',
                                margin: '0 0'
                            }}>
                                We have a wealth of materials to help you revise for and pass your exams.
                                <br/>
                                <br/>
                                Smart Mocks
                                <br/>
                                <br/>
                                As you go along, knowledge checks help assess your understanding of a topic before you move on to the next one. So You will have a mock exam after finishing each lesson in the subject.
                                <br/>
                                <br/>
                                Practice your exam technique with a mock exam, which replicates the format of the final exam, so you can check your progress. Mocks are computer marked and correct answers can be viewed online so you can learn from your answers. We provide you with model answers so you can learn and look to improve your own answer.
                                <br/>
                                <br/>
                                Exam preparation tests
                                <br/>
                                <br/>
                                This includes a minimum of 2 exam preparation tests per subject.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}