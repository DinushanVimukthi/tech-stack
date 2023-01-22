
import AboutStyle from '@/styles/Aboutus.module.css'
import Image from "next/image";
import Image1 from "public/Images/Aboutus1.png";
import Integrity from "public/icons/icons8-integrity-100 1.png";
import GrowKnowledge from "public/icons/icons8-learning-100 1.png";
import Teamwork from "public/icons/icons8-teamwork-100 1.png";
import Empower from "public/icons/icons8-positive-attitude-100.png";
import Mindset from "public/icons/icons8-mindset-growth-100.png";
import Partner1 from "public/Images/partners/Ellipse 1.png";
import Partner2 from "public/Images/partners/Ellipse 2.png";
import Partner3 from "public/Images/partners/Ellipse 3.png";
import Partner4 from "public/Images/partners/Ellipse 4.png";
import Partner5 from "public/Images/partners/Ellipse 5.png";
export default function Aboutus() {
    return (
        <>
        <div className={AboutStyle.intro}>
            <h1 className={AboutStyle.subTitle}>About Us</h1>
            <h2>Who <span className={AboutStyle.RedText}>we are ?</span></h2>
            <div className={AboutStyle.content1}>
                The success of every learner is at the heart of our business. It drives everything we do. It's simply why we exist in the world. Working as one team, we all help to inspire our learners to succeed.
            </div>
            <div className={AboutStyle.content1}>
                We have chosen the best in class lecturers with sound academic and professional backgrounds and have been recognized as outstanding personalities in their respective areas of expertise. These lecturers have years of proven lecturing experience and contributed to producing several local and world price winners in professional accountancy examinations.
            </div>
        </div>
        <div>
            <Image className={AboutStyle.image1} src={Image1} alt="Picture of the author"/>
        </div>
            <div className={AboutStyle.VisMis}>
                <div className={AboutStyle.Vission}>
                    <h2>Our <span className={AboutStyle.RedText}>Vision</span></h2>
                    <div className={AboutStyle.visionContent}>
                        Your Partner in Professional Education.
                    </div>
                </div>
                <div className={AboutStyle.Mission}>
                    <h2>Our
                        <span className={AboutStyle.RedText}> Mission</span>
                    </h2>
                    <div className={AboutStyle.missionContent}>
                        We shall excel in service delivery with a prime focus on quality and help students to success in their professional education journey by creating learning opportunities beyond the tradition which can be followed anytime, anywhere, and any number of times.
                    </div>
                </div>
            </div>
            <div className={AboutStyle.values}>
                <div className={AboutStyle.subsubTitle}>Our <span className={AboutStyle.RedText}>Values</span></div>
                <div className={AboutStyle.cards}>
                    <div className={AboutStyle.card}>
                        <div className={AboutStyle.cardIcon}>
                            <Image src={Integrity} className={AboutStyle.Invert} alt="Picture of the author" width={44} height={44}/>
                        </div>
                        <div className={AboutStyle.cardTitle}>
                            <h3>Integrity</h3>
                        </div>
                        <div className={AboutStyle.cardContent}>
                            We hold ourselves to the highest ethical standards in everything we do.
                        </div>
                    </div>
                    <div className={AboutStyle.card}>
                        <div className={AboutStyle.cardIcon}>
                            <Image src={GrowKnowledge} alt="Picture of the author" width={44} height={44}/>
                        </div>
                        <div className={AboutStyle.cardTitle}>
                            <h3>Grow Knowledge</h3>
                        </div>
                        <div className={AboutStyle.cardContent}>
                            We offer expert resources to help you achieve your academic and career best.
                        </div>
                    </div>
                    <div className={AboutStyle.card}>
                        <div className={AboutStyle.cardIcon}>
                            <Image src={Empower} alt="Picture of the author" width={44} height={44}/>
                        </div>
                        <div className={AboutStyle.cardTitle}>
                            <h3>Empower and Support</h3>
                        </div>
                        <div className={AboutStyle.cardContent}>
                            We give you the tools you need to succeed.
                        </div>
                    </div>
                    <div className={AboutStyle.card}>
                        <div className={AboutStyle.cardIcon}>
                            <Image src={Mindset} alt="Picture of the author" width={44} height={44}/>
                        </div>
                        <div className={AboutStyle.cardTitle}>
                            <h3>Create Opportunity</h3>
                        </div>
                        <div className={AboutStyle.cardContent}>
                            We open doors and broaden access to education.
                        </div>
                    </div>
                    <div className={AboutStyle.card}>
                        <div className={AboutStyle.cardIcon}>
                            <Image src={Teamwork} alt="Picture of the author" width={44} height={44}/>
                        </div>
                        <div className={AboutStyle.cardTitle}>
                            <h3>Drive Results Together</h3>
                        </div>
                        <div className={AboutStyle.cardContent}>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            We're dedicated to helping you achieve your goals – we succeed when you succeed.
                        </div>
                    </div>

                </div>
            </div>
            <div className={AboutStyle.partners}>
                <h1 className={AboutStyle.successPartner}>Success <span className={AboutStyle.RedText}>Partners</span></h1>
                <div className={AboutStyle.partnerCards}>
                <div className={AboutStyle.partnerCard}>
                    <div className={AboutStyle.roundCardIcon}>
                        <Image src={Partner1} alt="Picture of the author" width={172} height={172}/>
                    </div>
                    <div className={AboutStyle.partnerCardTitle}>
                        Name
                    </div>
                    <div className={AboutStyle.cardContent}>
                        Designation
                    </div>
                </div>
                <div className={AboutStyle.partnerCard}>
                    <div className={AboutStyle.roundCardIcon}>
                        <Image src={Partner2} alt="Picture of the author" width={172} height={172}/>
                    </div>
                    <div className={AboutStyle.partnerCardTitle}>
                        Name
                    </div>
                    <div className={AboutStyle.cardContent}>
                        Designation
                    </div>
                </div>
                <div className={AboutStyle.partnerCard}>
                    <div className={AboutStyle.roundCardIcon}>
                        <Image src={Partner3} alt="Picture of the author" width={172} height={172}/>
                    </div>
                    <div className={AboutStyle.partnerCardTitle}>
                        Name
                    </div>
                    <div className={AboutStyle.cardContent}>
                        Designation
                    </div>
                </div>
                <div className={AboutStyle.partnerCard}>
                    <div className={AboutStyle.roundCardIcon}>
                        <Image src={Partner4} alt="Picture of the author" width={172} height={172}/>
                    </div>
                    <div className={AboutStyle.partnerCardTitle}>
                        Name
                    </div>
                    <div className={AboutStyle.cardContent}>
                        Designation
                    </div>
                </div>
                <div className={AboutStyle.partnerCard}>
                    <div className={AboutStyle.roundCardIcon}>
                        <Image src={Partner5} alt="Picture of the author" width={172} height={172}/>
                    </div>
                    <div className={AboutStyle.partnerCardTitle}>
                        Name
                    </div>
                    <div className={AboutStyle.cardContent}>
                        Designation
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}