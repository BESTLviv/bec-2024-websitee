import Title from "./Title";
import {useTranslations} from 'next-intl';
import { CategoriesItemProps } from "@/models/categories";
import circle from "/public/circle.svg"
import circleM from "/public/circleM.svg"
import Image from "next/image";
import triangle1 from "/public/triangle1.svg"
import triangle2 from "/public/triangle2.svg"
import triangleM1 from "/public/triangleM1.svg"
import triangleM2 from "/public/triangleM2.svg"

export default function Categories() {
    const  t  = useTranslations('categories');
  
 
    return (
        <article className="categories relative">
            <Title>{t("main-title")}</Title>
            <div className=" relative flex justify-center max-lg:flex-col max-lg:items-center">  
                <CategoriesItem title={t("title1")} text={t("text1")} subText={t("example")} example={t("example1")} left={true} img={triangle1}/> 
               
                {/* Background for mobile */}
                <Image className=" w-full relative z-10 min-[1024px]:hidden"  src={triangleM1}  alt="circle"/>  
                <span className="min-[1024px]:hidden w-full relative lg:w-[20px] lg:h-full "><Image className=" absolute circle transform left-[50%] top-[49%] translate-y-[-49%] translate-x-[-50%]" src={circleM}  alt="circle"/> </span>  
                <Image className=" w-full relative z-10 min-[1024px]:hidden" src={triangleM2}  alt="circle"/> 
                
                {/* Background for desktop */}
                <Image className=" max-[1240px]:w-[10%] min-[1240px]:scale-y-[1] scale-y-[1.73]  min-[1035px]:scale-y-[1.50] min-[1130px]:scale-y-[1.4] min-[1150px]:scale-y-[1.30] min-[1400px]:w-[14%] relative z-10 hidden min-[1024px]:block transform"  src={triangle1}  alt="circle"/>
                <span className="  h-full hidden min-[1024px]:block"><Image className=" absolute circle transform left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50.5%] " src={circleM}  alt="circle"/> </span>  
                <Image className=" max-[1240px]:w-[10%] min-[1240px]:scale-y-[1] scale-y-[1.73] min-[1035px]:scale-y-[1.50] min-[1130px]:scale-y-[1.4] min-[1150px]:scale-y-[1.30] min-[1400px]:w-[14%] relative z-10 hidden min-[1024px]:block transform"  src={triangle2}  alt="circle"/>

                <CategoriesItem title={t("title2")} text={t("text2")} subText={t("example")} example={t("example2")} left={false} img={triangle2}/>
            </div>          
        </article>
    );
}

const CategoriesItem: React.FC<CategoriesItemProps> = ({ title, text, subText, example, left, img }) => {
    return (
        <>
            <section className={` relative flex flex-col  items-center text-white border-[1px] lg:w-[100%] `}>
                    <h2 className="text-title font-rubikB">{title}</h2>
                    <p className=" text-customGray">{text}</p>
                    <p><span className="font-rubikB">{subText}</span>{example}</p>              
            </section>
        </ >
    );
}

