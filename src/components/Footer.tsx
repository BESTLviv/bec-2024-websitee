import BestLviv from "/public/BestLviv.svg"
import instagram from "/public/instagram.svg"
import telegram from "/public/telegram.svg"
import linkedin from "/public/linkedin.svg"
import Image from "next/image"
export default function Footer() {
    return (
        <footer className="bg-side relative items-center justify-between h-6 flex text-white    ">
            <p className=" footer__text font-daysOne ">2024</p>
            <Image className=" absolute left-1/2 footer__best  transform translate-x-[-50%] " src={BestLviv} alt="" />
            <div className="flex justify-center items-center  ">
                <a href="https://www.instagram.com/best_lviv/" target="_blank" rel="noopener noreferrer"><Image className="mr-[17px] footer__social " src={instagram} alt="" /></a><a target="_blank" rel="noopener noreferrer" href="https://t.me/bestlviv"><Image className="mr-[17px] footer__social" src={telegram} alt="" /></a><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/bestlviv/"> <Image className="footer__social" src={linkedin} alt="" /></a>
            </div>
        </footer>
    );
}