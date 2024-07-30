import Title from "../Title";
import {useTranslations} from 'next-intl';
import Image from "next/image";
import bestImage from "/public/best.svg"
import TeamSlider from "./TeamSlider";


export default function Organizers() {
    const  t  = useTranslations('organizers');
    return (
        <article className="organizers relative">
            <span className=' bg-lines1Organizers  absolute bottom-[-32%] left-[0%] bg-no-repeat h-[1350px] w-[1350px] max-[1024px]:opacity-0 min-[1500px]:scale-[1.3] min-[1500px]:h-[1500px]  min-[1500px]:left-[10%] min-[1500px]:bottom-[-36%] min-[2100px]:scale-[1.4] min-[2100px]:h-[2100px]  min-[2100px]:left-[10%] min-[2100px]:bottom-[-84%] transform '></span>
            <span className=' bg-lines1OrganizersM absolute top-[3%] right-[-61%] bg-no-repeat h-[680px] w-[680px] min-[1024px]:opacity-0 min-[590px]:scale-[1.2]  min-[660px]:scale-[1.4] min-[660px]:top-[8%] min-[660px]:left-[62%] min-[820px]:top-[5%]  transform '></span>
            <Title>{t("main-title")}</Title>
            <section>
                <div className="organizers-best filter backdrop-blur-[2px] flex flex-col lg:flex-row ">
                    <div className="lg:w-[59%] font-rubik">
                        <h2 className=" font-rubikB">{t('title')}</h2>
                        <p>{t('text1')}</p>
                        <p>{t('text2')}</p>
                    </div>
                    <div className=" flex justify-center items-center lg:w-[40%]">
                        <Image src={bestImage} alt="bestImage"/>
                    </div>
                </div>
            </section>
            <TeamSlider/>
        </article>
    )
}