import Title from "./Title";
import {useTranslations} from 'next-intl';
import {Item} from "@/models/bec-you";
import BecYouItem from "./BecYouItem"
import linesHome2M from "/public/linesHome2M.svg"
export default function BecYou() {
    const  t  = useTranslations('bec-you');
    const  t1  = useTranslations('bec-you.company');
    const  t2  = useTranslations('bec-you.student');

    const itemsS: Item[] = [
        { title: t1("title1"), text: t1("text1") },
        { title: t1("title2"), text: t1("text2") },
        { title: t1("title3"), text: t1("text3") },
        { title: t1("title4"), text: t1("text4") },
    ];
    const itemsC: Item[] = [
        { title: t2("title1"), text: t2("text1") },
        { title: t2("title2"), text: t2("text2") },
        { title: t2("title3"), text: t2("text3") },
        { title: t2("title4"), text: t2("text4") },
    ];
 
    return (
        <article  className="bec-you relative overflow-hidden">
             {/* <span className=' bg-linesHome2M absolute top-[25%] right-[-100%] bg-no-repeat h-[680px] w-[680px] min-[1024px]:opacity-0  transform '></span> */}
            <Title>{t("main-title")}</Title>
            <div>
                <BecYouItem title={t("title1")} text1={t("text1")} subText={t("sub-text")} more={itemsS}/>
                <BecYouItem title={t("title2")} text1={t("text2")} subText={t("sub-text")} more={itemsC}/>
            </div>       
        </article>

          
    );
}


