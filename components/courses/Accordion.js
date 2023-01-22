import { useState } from "react";
import AccaStyles from "@/styles/Acca.module.css";
import Image from "next/image";
import ExpandBtn from "../../public/icons/navexpand.png";

export default function Accordion(props) {
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
            dangerouslySetInnerHTML={{__html:props.content}}
            >
                {/* eslint-disable-next-line react/no-unescaped-entities */}

            </div>
        </div>
    );
}
