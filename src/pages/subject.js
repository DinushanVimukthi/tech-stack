
import SubjectStyles from "@/styles/subject.module.css"
import Image from "next/image";
import Girl from "public/Images/subject/young-girl-student-smiling-against-university 1.png"
import AccaStyles from "@/styles/Acca.module.css";
import Accordion from "../../components/courses/Accordion";
import Accordion2 from "../../components/courses/Accordion2";


export default function subject() {

    return (
        <>
            <div className={SubjectStyles.Title}>
                Financial Accounting
            </div>
            <div className={SubjectStyles.Overlook}>
                <div className={SubjectStyles.OverlookContent}>
                    <div className={SubjectStyles.ContentTitle}>Subject Overlook</div>
                    <div className={SubjectStyles.Content}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut beatae consectetur
                        dicta dolore eaque esse explicabo, fugiat harum hic iste molestiae nemo nisi non nostrum
                        numquam perspiciatis quia quod repellendus repudiandae saepe voluptate voluptatum. Aut
                        autem dolore hic maiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
                        doloribus earum exercitationem placeat quae, saepe suscipit vel veniam voluptas voluptatum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores blanditiis delectus
                        dicta, dignissimos dolores inventore laborum laudantium libero magnam mollitia quo recusandae
                        sed sit soluta suscipit temporibus. Hic, sequi.
                    </div>
                </div>
                <div className={SubjectStyles.OverlookImage}>
                    <Image className={SubjectStyles.Image} src={Girl} alt=""/>
                </div>
            </div>
            <div>
                <button className={SubjectStyles.PurchaseBtn}>Purchase</button>
            </div>
            <div className={SubjectStyles.Material}>
                <div className={AccaStyles.accordion}>
                    <Accordion2
                        title="Lesson Name - 01"
                    />
                    <Accordion2
                        title="Lesson Name - 02"
                    />
                    <Accordion2
                        title="Lesson Name - 03"
                    />
                    <Accordion2
                        title="Lesson Name - 04"
                    />
                    <Accordion2
                        title="Lesson Name - 05"
                    />

                </div>
            </div>
        </>
    )
}