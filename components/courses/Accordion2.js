import { useState } from "react";
import AccaStyles from "@/styles/Acca.module.css";
import Image from "next/image";
import ExpandBtn from "../../public/icons/navexpand.png";
import Video from "public/Images/subject/video.png";
import Material from "public/Images/subject/material.png";
import Revision from "public/Images/subject/Revision exam.png";
import RevisionVideo from "public/Images/subject/revision video.png";
import SubjectStyles from "@/styles/subject.module.css"
export default function Accordion2(props) {
    const [isShowing, setIsShowing] = useState(false);

    const toggle = () => {
        setIsShowing(!isShowing);
    };

    return (
        <div className={AccaStyles.accordionItem}>
            <div className={AccaStyles.accordionItemHeader}>
                <div className={AccaStyles.accordionItemHeaderTitle} onClick={toggle}>
                    {props.title}
                </div>
                <div className={AccaStyles.expbtn} onClick={toggle}>
                    <Image src={ExpandBtn} alt="" style={{
                        transform: isShowing ? "rotate(0deg)" : "rotate(180deg)"
                    }}></Image>
                </div>
            </div>
            <div className={AccaStyles.accordionItemContent} style={{
                display: isShowing ? "flex" : "none"
            }}
            >
                <div className={SubjectStyles.List}>
                    <div className={SubjectStyles.ListItem}>
                        <div className={SubjectStyles.Icon}>
                            <Image src={Video} alt=''/>
                        </div>
                        <div className={SubjectStyles.Name}>Theory Video</div>
                    </div>
                    <div className={SubjectStyles.ListItem}>
                        <div className={SubjectStyles.Icon}>
                            <Image src={Material} alt=''/>
                        </div>
                        <div className={SubjectStyles.Name}>Material</div>
                    </div>
                    <div className={SubjectStyles.ListItem}>
                        <div className={SubjectStyles.Icon}>
                            <Image src={Revision} alt=''/>
                        </div>
                        <div className={SubjectStyles.Name}>Revision Exam</div>
                    </div>
                    <div className={SubjectStyles.ListItem}>
                        <div className={SubjectStyles.Icon}>
                            <Image src={RevisionVideo} alt=''/>
                        </div>
                        <div className={SubjectStyles.Name}>Revision Video</div>
                    </div>

                </div>

                {/* eslint-disable-next-line react/no-unescaped-entities */}

            </div>
        </div>
    );
}
