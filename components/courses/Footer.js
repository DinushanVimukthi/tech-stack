import FooterStyles from '@/styles/Footer.module.css'
import Link from "next/link";
import Image from "next/image";
import Facebook from "public/icons/facebook-icon.svg";
import Instagram from "public/icons/instagram-icon.svg";
import Twitter from "public/icons/twitter-icon.svg";
import Pinterest from "public/icons/pinterest-icon.svg";
import Linkedin from "public/icons/linkedin-icon.svg";

const Footer = () => {
    const Email = "";
    return (
        <>
            <div className={FooterStyles.footer}>
                <div className={FooterStyles.footerContent}>
                    <div className={FooterStyles.footerSection}>
                        <div className={FooterStyles.brandTitle}>Enrich Business School</div>
                            <div>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                The success of every learner is at the heart of MyEnrich.lk. It drives everything we do. It's simply why we exist in the world. Working as one team, we all help to inspire & enrich our learners to succeed.
                            </div>
                    </div>
                    <div className={FooterStyles.footerSection}>
                            <div className={FooterStyles.footerSectionTitle}>Quick Links</div>
                            <div>
                                <ul className={FooterStyles.links}>
                                    <Link href="/">About Us</Link>
                                    <Link href="/">Blog</Link>
                                    <Link href="/">Privacy Policy</Link>
                                    <Link href="/">Terms and Conditions</Link>
                                    <Link href="/">Contact us</Link>
                                </ul>
                            </div>
                    </div>
                    <div className={FooterStyles.footerSection}>
                        <div className={FooterStyles.footerSectionTitle}>Contact</div>
                        <div className={FooterStyles.contactDetails}>
                            <div className={FooterStyles.contactItem}>
                                <div>Phone: 123-12345678</div>
                                <div>info@enrichbusinessschool.lk</div>
                            </div>
                            <div className={FooterStyles.contactItem}>
                                <div className={FooterStyles.socialLinks}>
                                    <Image src={Facebook} alt="fb_logo" width={30} height={30} />
                                    <Image src={Instagram} alt="instagram_logo" width={30} height={30} />
                                    <Image src={Linkedin} alt="linkedin_logo" width={30} height={30} />
                                    <Image src={Pinterest} alt="pinterest_logo" width={30} height={30} />
                                    <Image src={Twitter} alt="twitter_logo" width={30} height={30} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={FooterStyles.footerSection}>
                        <div className={FooterStyles.footerSectionTitle}>Newsletter</div>
                        <div className={FooterStyles.subscribe}>
                            <input className={FooterStyles.Email} placeholder="Enter Email Address"/>
                            <button className={FooterStyles.subscribeButton}>Subscribe</button>
                        </div>
                        <div className={FooterStyles.tip}>
                            We never spam you!
                        </div>
                    </div>
                </div>
                <div className={FooterStyles.line}></div>
                <div className={FooterStyles.footerBottom}>
                    <div className={FooterStyles.footerBottomContent}>
                        Terms of Use  |  Privacy Policy <br/>
                        © 2022 Enrich Business School
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
