
import AccaStyles from "@/styles/Acca.module.css";
import Image from "next/image";
import OK from "public/icons/Vector.png";

import cor_1 from "public/Images/ca/cor_1.png";

import Im1 from "public/Images/ca/1.png";
import Im3 from "public/Images/ca/2.png";
import Im2 from "public/Images/ca/cheerful-attractive-young-woman-with-black-hair-walking 1.png";
import Im4 from "public/Images/ca/3.png";
import Im5 from "public/Images/ca/4.png";
import Im6 from "public/Images/ca/5.png";

// import Im3 from "public/Images/acca/young-latin-man-smiles-making-video-call-with-his-laptop-from-terrace-coffee-shop-concept-technology-urban-lifestyle 1.png";
// import Im4   from "public/Images/acca/10.png";
// import Im5 from "public/Images/acca/distance-education-concept-young-mixed-race-woman-sitting-desk-library-using-laptop-watching-lecture-webinar 1.png";
// import Im6 from "public/Images/acca/6.png";
import pan from "public/Images/ca/focus-indian-boy-who-standing-sepately-group-international-students-standing-together-park-university 1.png"
import Im7 from "public/Images/ca/group-teenager-student-walking-leaning-library-school-university-library-education-student-learning-concept 1.png"
import Im8 from "public/Images/ca/caucasian-cheerful-beautiful-female-student-studying-library-with-lot-books-smiling-while-looking-away-studying-concept 1.png"
import Im9 from "public/Images/ca/serious-adult-student-doing-research-library 1.png"
import Im10 from "public/Images/ca/happy-college-girl-working-her-assignment-with-tablet-styluspen-modern-living-room 1.png"
import pan2 from "public/Images/ca/kyle-gregory-devaras-6RTM8EsD1T8-unsplash 1.png"
import Im11 from "public/Images/ca/brunette-boy-with-beard-working-laptop-typing 1.png"
import Im12 from "public/Images/ca/freelance-digital-nomad-nature-concept-attractive-young-fe 1.png"
import Im13 from "public/Images/ca/fully-concentrated-group-young-people-casual-clothes-working-modern-office 1.png"
import Im14 from "public/Images/ca/asian-female-startup-entrepreneur-working-open-space-cafe-wide-shot-negative-space-student-learning-campus 1.png"
import pan3 from "public/Images/ca/kyle-gregory-devaras-6RTM8EsD1T8-unsplash 1.png"
import pan4 from "public/Images/ca/kyle.png"
import Im15 from "public/Images/ca/smiling-pretty-indian-businesswoman-headphones-working-laptop-outdoors 1.png"
import Im16 from "public/Images/ca/pretty-young-smiling-african-man-formalwear-using-his-laptop-while-leaning-bar 1.png"
import Im17 from "public/Images/ca/happy-young-entrepreneur-woman-sitting-tanning-bed-beside-pool-using-laptop-computer 1.png"
import Im18 from "public/Images/ca/front-view-young-handsome-man-striped-shirt-working-inside-conference-hall-using-his-silver-laptop-during-daytime-work-activity-building 1.png"
import Im19 from "public/Images/ca/front-view-young-handsome-man-striped-shirt-working-inside-conference-hall-using-his-silver-laptop-during-daytime-work-activity-building 1.png"


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
                <div className={AccaStyles.ImageText} style={{
                    maxWidth: "60vw",
                    fontWeight: "600",
                }}>
                    <h1> Institute of Chartered Accountants of Sri Lanka  </h1>
                    <div className={AccaStyles.imageContent}>
                        CA Sri Lanka is a great option if you’re looking to become a chartered accountant and work in accountancy and finance. It opens a wealth of opportunities, as you can specialize in specific areas or sectors, or work broadly across multiple industries.                    </div>
                </div>
            </div>
            <div className={AccaStyles.levels}>
                <div className={AccaStyles.subTitle}>
                    We offer 4 CA Sri Lanka levels that make up the full qualification
                </div>
                <div>
                    You can study part time and at home - learning on your own terms. The average time to complete the full qualification syllabus is 3 - 6 years. And you can be confident in our courses as we have over few years of experience delivering high quality content and expertise.
                </div>
                <div className={AccaStyles.levelCards} >
                    <div className={AccaStyles.levelCard} style={{
                        pointerEvents:'none',
                        width:'300px',
                        height:'500px'
                    }}>
                        <div className={AccaStyles.levelCardTitle}>
                            Business Level – I
                            <div className={AccaStyles.line}></div>
                        </div>
                        <div className={AccaStyles.levelCardContent}>
                            <ul className={AccaStyles.lists}>
                                <li><div className={AccaStyles.list}><div>Financial Accounting</div><button className={AccaStyles.btn}>View</button></div></li>
                                <li><div className={AccaStyles.list}><div>Business Mathematics & Statistics </div><button className={AccaStyles.btn}>View</button></div></li>
                                <li><div className={AccaStyles.list}><div>Business Law</div><button className={AccaStyles.btn}>View</button></div></li>
                                <li><div className={AccaStyles.list}><div>Business Environment & Economics</div><button className={AccaStyles.btn}>View</button></div></li>
                            </ul>
                        </div>
                        <div className={AccaStyles.levelCardAction}>
                            <button className={AccaStyles.levelCardButton}>Purchase Full Level</button>
                        </div>
                    </div>
                    <div className={AccaStyles.levelCard} style={{
                        width: "300px",
                        height:'500px'
                    }}>
                        <div className={AccaStyles.levelCardTitle}>
                            Business Level – II
                            <div className={AccaStyles.line}></div>
                        </div>
                        <div className={AccaStyles.levelCardContent}>
                            <ul className={AccaStyles.lists}>
                                <li><div className={AccaStyles.list}><div>Audit, Business Processes & Digitization  </div><button className={AccaStyles.btn}>View</button></div></li>
                                <li><div className={AccaStyles.list}><div>Management Accounting</div><button className={AccaStyles.btn}>View</button></div></li>
                                <li><div className={AccaStyles.list}><div>Business Taxation </div><button className={AccaStyles.btn}>View</button></div></li>
                                <li><div className={AccaStyles.list}><div>Digital Business Strategy </div><button className={AccaStyles.btn}>View</button></div></li>
                            </ul>
                        </div>
                        <div className={AccaStyles.levelCardAction}>
                            <button className={AccaStyles.levelCardButton}>Purchase Full Level</button>
                        </div>
                    </div>
                    <div className={AccaStyles.levelCard} style={{
                        width: "300px",
                        height:'500px'
                    }}>
                        <div className={AccaStyles.levelCardTitle}>
                            Corporate Level
                            <div className={AccaStyles.line}></div>
                        </div>
                        <div className={AccaStyles.levelCardContent}>
                            <ul className={AccaStyles.lists}>
                                <li><div className={AccaStyles.list}><div>Advanced Audit & Assurance</div><button className={AccaStyles.btn}>View</button></div></li>
                                <li><div className={AccaStyles.list}><div>Financial Reporting & Governance</div><button className={AccaStyles.btn}>View</button></div></li>
                                <li><div className={AccaStyles.list}><div>Advanced Management Accounting</div><button className={AccaStyles.btn}>View</button></div></li>
                                <li><div className={AccaStyles.list}><div>Corporate Law</div><button className={AccaStyles.btn}>View</button></div></li>
                            </ul>
                        </div>
                        <div className={AccaStyles.levelCardAction}>
                            <button className={AccaStyles.levelCardButton}>Purchase Full Level</button>
                        </div>
                    </div>
                    <div className={AccaStyles.levelCard} style={{
                        width: "300px",
                        height:'500px'
                    }}>
                        <div className={AccaStyles.levelCardTitle}>
                            Strategic Level
                            <div className={AccaStyles.line}></div>
                        </div>
                        <div className={AccaStyles.levelCardContent}>
                            <ul className={AccaStyles.lists}>
                                <li><div className={AccaStyles.list}><div>Advanced Business Reporting</div><button className={AccaStyles.btn}>View</button></div></li>
                                <li><div className={AccaStyles.list}><div>Corporate Finance & Risk Management</div><button className={AccaStyles.btn}>View</button></div></li>
                                <li><div className={AccaStyles.list}><div>Corporate Taxation</div><button className={AccaStyles.btn}>View</button></div></li>
                                <li><div className={AccaStyles.list}><div>Strategic Management & Leadership</div><button className={AccaStyles.btn}>View</button></div></li>
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
                                    "Overall, it is very structured. I know where I am at, at that particular point, where I’m heading and how many more topics do I need to study and it’s very easy to navigate. The support is there and also, there are mock exams which I value most!"
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
                                    }}>Name of the student</span>
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
                            title="2. Do I have to register with CA Sri Lanka?"
                            content="Yes - you will need to register with CA Sri Lanka approximately 6-8 weeks prior to the exam entry deadline. You can find more information about registration on the CA Sri Lanka website (https://www.casrilanka.com/casl/index.php?option=com_content&view=article&id=67&Itemid=78&lang=en) " />
                        <Accordion
                            title="3. How do I apply to be an ACCA student?"
                            content="You can access your learning and testing materials by clicking on the 'courses' tab on MyEnrich.lk. From here, you can then select the course you wish to access, and start studying!" />
                        <Accordion
                            title="4. What are the Examinations at CA Sri Lanka?"
                            content="You can access your learning and testing materials by clicking on the 'courses' tab on MyEnrich.lk. From here, you can then select the course you wish to access, and start studying!" />
                        <Accordion
                            title="5. Practical Training requirement as a student"
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
                        Business Level - I
                    </div>
                    <div className={AccaStyles.sectionContent}>
                        <div style={{
                            fontSize: '16px',
                        }}>
                            <div style={{
                                marginBottom: '1rem',
                            }}>
                                Business Level I will develop your accountancy skills and technical knowledge, so you continue to add value to your company. You’ll achieve a globally-recognized qualification, and gain a deeper understanding of accountancy and finance, and how it relates to a wider business scale.
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
                                This level consists of four mandatory subjects (Financial Accounting, Business Mathematics & Statics, Business Law, and Business Environment & Economics) which can be sat in any order. Once you’ve completed all four subjects, you can move on to the next level – Business Level II.
                               <br/>
                                <br/>
                                You need to achieve a mark of 50% or higher to pass these subjects.
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
                                Three Simple Passes at G.C.E. Advanced Level in any Stream at one sitting (London/Cambridge/Indian A/L)
                                <br/><b>Or</b><br/>
                                G.C.E Ordinary Level with a first degree offered by UGC-recognized institutions or other accredited institutions
                                <br/><b>Or</b><br/>
                                The qualifications equivalent to NVQ Level 4 which is equivalent to Advanced Level Certificate (GCE A/L or equivalent)
                                    <br/><b>Or</b><br/>
                                Final Examination of the Association of Accounting Technicians of Sri Lanka. (A.A.T., Sri Lanka)
                                <br/><b>Or</b><br/>
                                Any other qualification approved by the CA Sri Lanka
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
                                            Financial Accounting
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
                                            Business Mathematics & Statics
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
                                            Business Law
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
                                            <Image src={Im6} alt="icon" style={{
                                                width: '100%',
                                            }} />
                                        </div>
                                        <div className={AccaStyles.contentCardTitle}>
                                            Business Environ. & Economics
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
                        Business Level - II
                    </div>
                    <div className={AccaStyles.sectionContent}>
                        <div style={{
                            fontSize: '16px',
                        }}>
                            <div style={{
                                marginBottom: '1rem',
                            }}>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Business Level - II builds on your technical knowledge and teaches you how to apply technical knowledge to real-life scenarios.
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
                            <Image src={pan} alt="icon" style={{
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
                                If you have completed Business Level I, the final level of AAT, the Foundation Diploma, or any other qualification approved by the CA Sri Lanka, you will start studying at Business Level II.                            </div>

                        </div>
                        <div className={AccaStyles.subSection}>
                            <div className={AccaStyles.subTitle}>
                                Syllabus
                            </div>
                            <div className={AccaStyles.subContent} style={{
                                flexDirection: 'column'
                            }}>
                                Subjects can be sat in any order.
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
                                    <div className={AccaStyles.contentCard} style={{
                                        width: 'auto',
                                        height: 'auto',
                                        padding: '0.5rem',
                                        pointerEvents:'none',
                                    }}>
                                        <div className={AccaStyles.contentCardIcon}>
                                            <Image src={Im9} alt="icon" style={{
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
                                    <div className={AccaStyles.contentCard} style={{
                                        width: 'auto',
                                        height: 'auto',
                                        padding: '0.5rem',
                                        pointerEvents:'none',
                                    }}>
                                        <div className={AccaStyles.contentCardIcon}>
                                            <Image src={Im10} alt="icon" style={{
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
                        Corporate Level
                    </div>
                    <div className={AccaStyles.sectionContent}>
                        <div style={{
                            fontSize: '16px',
                        }}>
                            <div style={{
                                marginBottom: '1rem',
                            }}>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                This is the 3rd level of CA Qualification. You’ll learn advanced techniques, skills, and the professional ethics required of an accountant or consultant operating at a senior level.

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
                            <Image src={pan3} alt="icon" style={{
                                width: '100%',
                                height: '100%',
                            }} />
                        </div>
                        <div className={AccaStyles.subSection}>
                            <div className={AccaStyles.subTitle}>
                                Structure
                            </div>
                            <div className={AccaStyles.subContent}>
                                The corporate level consists of four subjects. You will sit four of these exams to complete this level.
                                <br/>
                                <br/>
                                You should also be aware with all subjects at this level there will be a certain amount of assumed knowledge from earlier subjects at the Business level I & II, so if you were exempt or sat these some time ago, you should use the resources and advice at the beginning of your course to refresh your understanding.
                                </div>
                            <div className={AccaStyles.subTitle} style={{
                            }}>
                                Entry Requirement
                            </div>
                            <div style={{
                                lineHeight: '24px'
                            }}>
                                You should have completed the previous two CA Sri Lanka Levels; Business Level I and Business Level II, and have been awarded exemptions from these levels by the CA Sri Lanka.
                            </div>

                        </div>
                        <div className={AccaStyles.subSection}>
                            <div className={AccaStyles.subTitle}>
                                Syllabus
                            </div>
                            <div className={AccaStyles.subContent} style={{
                                flexDirection: 'column'
                            }}>
                                You’ll learn about the role of accounting in the business environment and develop the practical skills and techniques required for an accountant.                                <br/>
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
                                            <Image src={Im11} alt="icon" style={{
                                                width: '100%',
                                            }} />
                                        </div>
                                        <div className={AccaStyles.contentCardTitle}>
                                            Advanced Audit & Assurance
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
                                            <Image src={Im12} alt="icon" style={{
                                                width: '100%',
                                            }} />
                                        </div>
                                        <div className={AccaStyles.contentCardTitle}>
                                            Financial Reporting & Governance
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
                                            <Image src={Im13} alt="icon" style={{
                                                width: '100%',
                                            }} />
                                        </div>
                                        <div className={AccaStyles.contentCardTitle}>
                                            Advanced Management Accounting
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
                                            <Image src={Im14} alt="icon" style={{
                                                width: '100%',
                                            }} />
                                        </div>
                                        <div className={AccaStyles.contentCardTitle}>
                                            Corporate Law
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
                                Most students complete this level within 6 to 24 months, however, this varies and will depend on how quickly you want to complete the course. Corporate Level exams are physical exams.
                            </div>
                            <div className={AccaStyles.subTitle} style={{
                                margin: '0 0'
                            }}>
                                Tutor Support
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
                        Strategic Level
                    </div>
                    <div className={AccaStyles.sectionContent}>
                        <div style={{
                            fontSize: '16px',
                        }}>
                            <div style={{
                                marginBottom: '1rem',
                            }}>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                This is the final level of CA Qualification. You’ll learn professional techniques, skills, and the professional ethics required of an accountant or consultant operating at a top level.
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
                            <Image src={pan4} alt="icon" style={{
                                width: '100%',
                                height: '100%',
                            }} />
                        </div>
                        <div className={AccaStyles.subSection}>
                            <div className={AccaStyles.subTitle}>
                                Structure
                            </div>
                            <div className={AccaStyles.subContent}>
                                The corporate level consists of four subjects. You will sit four of these exams to complete this level.
                                <br/>
                                <br/>
                                You should also be aware with all subjects at this level there will be a certain amount of assumed knowledge from earlier subjects at the Business level I & II,
                                so if you were exempt or sat these some time ago, you should use the resources and advice at the beginning of your course to refresh your understanding.
                                </div>
                            <div className={AccaStyles.subTitle} style={{
                            }}>
                                Entry Requirement
                            </div>
                            <div style={{
                                lineHeight: '24px'
                            }}>
                                You should have completed the previous three CA qualification Levels; Business Level I, Business Level II and corporate level and have been awarded exemptions from these levels by the CA Sri Lanka.                            </div>

                        </div>
                        <div className={AccaStyles.subSection}>
                            <div className={AccaStyles.subTitle}>
                                Syllabus
                            </div>
                            <div className={AccaStyles.subContent} style={{
                                flexDirection: 'column'
                            }}>
                                You’ll learn about the role of accounting in the business environment and develop the practical skills and techniques required for an accountant. <br/>
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
                                            <Image src={Im15} alt="icon" style={{
                                                width: '100%',
                                            }} />
                                        </div>
                                        <div className={AccaStyles.contentCardTitle}>
                                            Advanced Business Reporting
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
                                            <Image src={Im16} alt="icon" style={{
                                                width: '100%',
                                            }} />
                                        </div>
                                        <div className={AccaStyles.contentCardTitle}>
                                            Corporate Finance & Risk Management
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
                                            <Image src={Im17} alt="icon" style={{
                                                width: '100%',
                                            }} />
                                        </div>
                                        <div className={AccaStyles.contentCardTitle}>
                                            Corporate Taxation
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
                                            <Image src={Im18} alt="icon" style={{
                                                width: '100%',
                                            }} />
                                        </div>
                                        <div className={AccaStyles.contentCardTitle}>
                                            Strategic Management & Leadership
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
                                Most students complete this level within 6 to 36 months, however, this varies and will depend on how quickly you want to complete the course. Strategic Level exams are physical exams.
                            </div>
                            <div className={AccaStyles.subTitle} style={{
                                margin: '0 0'
                            }}>
                                Tutor Support
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