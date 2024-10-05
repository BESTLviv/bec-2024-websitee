import fullScreen from "/public/full-screen.png"
import Image from "next/image"
import {useTranslations} from 'next-intl';

export default function Header() {
    const  t  = useTranslations('');

    return (
        <header className="relative flex justify-center h-screen text-white">
             <Image className="object-cover absolute inset-0 z-0 " fill src={fullScreen} alt="" />            
             <span className="absolute inset-0  bg-black bg-opacity-60"></span>
             <div className="hero flex flex-col  absolute top-1/2 transform translate-y-[-50%] ">
                <h2>BEST</h2>
                <h2>ENGINEERING</h2>
                <h2>COMPETITION</h2>
                <h3 className=" font-rubikB font-bold self-center">{t('date')}</h3>
                <a className=" bg-customOrange font-rubik link__bot flex justify-center self-center items-center text-black hover:scale-[1.1] transition-transform duration-500" href="https://t.me/bec24_bot" target="_blank">{t('registration')}</a>
             </div>
            
        </header>
    )
}