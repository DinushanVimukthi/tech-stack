import styles from "@/styles/Account2.module.css";
import Image from "next/image";
import Person from "public/Images/partners/Ellipse 4.png";
import DownArrow  from  "public/icons/down-arrow-backup-2-svgrepo-com.svg";
import Edit from "public/icons/edit-svgrepo-com.svg";
import Plus from "public/icons/plus-svgrepo-com.svg";
import Layout2 from "../../components/courses/Layout2";
import Video from "public/Images/account/image 4.png";
import Play from "public/Images/account/play.png";
import PDF from "public/icons/pdf-round-svgrepo-com.svg";
import {useState} from "react";

export default function account2()
{
    const [visibility1, setVisibility1] = useState('visible');
    const [desVisibility1, setDesVisibility1] = useState('none');
    const [visibility2, setVisibility2] = useState('visible');
    const [desVisibility2, setDesVisibility2] = useState('none');

    const handelModule1 = () => {

        if(visibility1 === 'visible')
        {
            setVisibility1('hidden');
            setDesVisibility1('block');
        }else{
            setVisibility1('visible');
            setDesVisibility1('none');
        }
    }

    const handelModule2 = () => {

        if(visibility2 === 'visible')
        {
            setVisibility2('hidden');
            setDesVisibility2('block');
        }else{
            setVisibility2('visible');
            setDesVisibility2('none');
        }
    }

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
                            <Image className={styles.downArrow} src={DownArrow} onClick={() => handelModule1()}/>
                            <h4>Module name 01</h4>
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <Image className={styles.edit} src={Edit} style={{visibility: `${visibility1}`}}/>
                        </div>
                        <div className={styles.btn} style={{visibility: `${visibility1}`}}>
                            <button>
                                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                <Image className={styles.plus} src={Plus}/>
                                Add module video or resource
                            </button>
                        </div>

                        <div className={styles.moduleDetails} style={{display: `${desVisibility1}`}}>
                            <div className={styles.btn}>
                                <button>
                                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                    <Image className={styles.edit} src={Edit}/>
                                    Edit module video or resource
                                </button>
                            </div>

                            <div className={styles.video}>
                                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                <Image className={styles.videoImg} src={Video}/>
                                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                <Image className={styles.playImg} src={Play}/>
                            </div>

                            <div className={styles.resources}>
                                <h5>Resources</h5>
                                <div className={styles.resource}>
                                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                    <Image className={styles.pdfImg} src={PDF}/>
                                    <span>Slideshow</span>
                                </div>
                                <div className={styles.resource}>
                                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                    <Image className={styles.pdfImg} src={PDF}/>
                                    <span>Additional reading</span>
                                </div>
                                <div className={styles.resource}>
                                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                    <Image className={styles.pdfImg} src={PDF}/>
                                    <span>Additional reading 02</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={styles.module}>
                        <div className={styles.moduleHeader}>
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <Image className={styles.downArrow} src={DownArrow} onClick={() => handelModule2()}/>
                            <h4>Module name 02</h4>
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <Image className={styles.edit} src={Edit} style={{visibility: `${visibility2}`}}/>
                        </div>
                        <div className={styles.btn} style={{visibility: `${visibility2}`}}>
                            <button>
                                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                <Image className={styles.plus} src={Plus}/>
                                Add module video or resource
                            </button>
                        </div>

                        <div className={styles.moduleDetails} style={{display: `${desVisibility2}`}}>
                            <div className={styles.btn}>
                                <button>
                                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                    <Image className={styles.edit} src={Edit}/>
                                    Edit module video or resource
                                </button>
                            </div>

                            <div className={styles.video}>
                                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                <Image className={styles.videoImg} src={Video}/>
                                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                <Image className={styles.playImg} src={Play}/>
                            </div>

                            <div className={styles.resources}>
                                <h5>Resources</h5>
                                <div className={styles.resource}>
                                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                    <Image className={styles.pdfImg} src={PDF}/>
                                    <span>Slideshow</span>
                                </div>
                                <div className={styles.resource}>
                                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                    <Image className={styles.pdfImg} src={PDF}/>
                                    <span>Additional reading</span>
                                </div>
                                <div className={styles.resource}>
                                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                    <Image className={styles.pdfImg} src={PDF}/>
                                    <span>Additional reading 02</span>
                                </div>

                            </div>
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

                        <div className={styles.moduleDetails}>
                            <div className={styles.btn}>
                                <button>
                                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                    <Image className={styles.edit} src={Edit}/>
                                    Edit module video or resource
                                </button>
                            </div>

                            <div className={styles.video}>
                                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                <Image className={styles.videoImg} src={Video}/>
                                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                <Image className={styles.playImg} src={Play}/>
                            </div>

                            <div className={styles.resources}>
                                <h5>Resources</h5>
                                <div className={styles.resource}>
                                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                    <Image className={styles.pdfImg} src={PDF}/>
                                    <span>Slideshow</span>
                                </div>
                                <div className={styles.resource}>
                                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                    <Image className={styles.pdfImg} src={PDF}/>
                                    <span>Additional reading</span>
                                </div>
                                <div className={styles.resource}>
                                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                    <Image className={styles.pdfImg} src={PDF}/>
                                    <span>Additional reading 02</span>
                                </div>

                            </div>
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

                        <div className={styles.moduleDetails}>
                            <div className={styles.btn}>
                                <button>
                                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                    <Image className={styles.edit} src={Edit}/>
                                    Edit module video or resource
                                </button>
                            </div>

                            <div className={styles.video}>
                                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                <Image className={styles.videoImg} src={Video}/>
                                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                <Image className={styles.playImg} src={Play}/>
                            </div>

                            <div className={styles.resources}>
                                <h5>Resources</h5>
                                <div className={styles.resource}>
                                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                    <Image className={styles.pdfImg} src={PDF}/>
                                    <span>Slideshow</span>
                                </div>
                                <div className={styles.resource}>
                                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                    <Image className={styles.pdfImg} src={PDF}/>
                                    <span>Additional reading</span>
                                </div>
                                <div className={styles.resource}>
                                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                    <Image className={styles.pdfImg} src={PDF}/>
                                    <span>Additional reading 02</span>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

account2.getLayout = function getLayout(page) {
    return <Layout2>{page}</Layout2>
}