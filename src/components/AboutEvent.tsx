import React from 'react';
import fullScreen from "/public/full-screen.png";
import Image, { StaticImageData } from "next/image";
import about1 from "/public/about1.png";
import about2 from "/public/about2.png";
import { useTranslations } from 'next-intl';
import Title from "./Title";
import lines1 from "/public/lines1Home.svg"

export default function AboutEvent() {
    const t = useTranslations('');
    
    return (
        <>
            
            
            <article className="about-event relative z-10">
                <AboutItem title={t("about-event.title")} text1={t("about-event.text1")} text2={t("about-event.text2")} image={about1}/>
                <AboutItem title={t("goals-event.title")} text1={t("goals-event.text1")} text2={t("goals-event.text2")} image={about2}/>
            </article>
            <Title>{t("mission-vision.main-title")}</Title>
            <article className="mission-vision flex flex-col justify-center items-center lg:items-stretch lg:flex-row  ">
                    <section>
                        <h2 className='font-rubikB'>{t("mission-vision.title1")}</h2>
                        <p>{t("mission-vision.text1")}</p>
                    </section>
                    <section>
                        <h2 className='font-rubikB'>{t("mission-vision.title2")}</h2>
                        <p>{t("mission-vision.text2")}</p>
                    </section>
            </article>
        </>
    );
}

interface AboutItemProps {
    title: string;
    text1: string;
    text2: string;
    image: StaticImageData;
}

const AboutItem: React.FC<AboutItemProps> = ({ title, text1, text2, image }) => {
    return (
        <section className="about-item flex justify-center items-center filter backdrop-blur-[2px]">
            <div>
                <h2 className="text-title font-daysOne">{title}</h2>
                <div className="font-rubik">
                    <p>{text1}</p>
                    <p>{text2}</p>
                </div>
            </div>
            <Image className='about-img' src={image} alt={title} />
        </section>
    );
}
