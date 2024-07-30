import Title from "../Title";
import {useTranslations} from 'next-intl';
import Image from "next/image";
import partners from "./data";


export default function Partners() {
    const  t  = useTranslations('');
    return (
        <article className="partners relative z-10">
            <Title>{t("partners")}</Title>
            <section>
                <div className="partners-container flex flex-wrap justify-center filter backdrop-blur-[2px]">
                    {partners.map((partner, index) => (
                        <div className="flex justify-center relative items-center border bg-black border-white" key={index}><Image className=" transform scale-[0.7]" src={partner} fill alt={`${partner}`}/></div>
                    ))}
                </div>
            </section>
        </article>
    )
}