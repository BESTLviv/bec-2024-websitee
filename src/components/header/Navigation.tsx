"use client"
import logo from "/public/BEC Logo Final.svg"
import Image from "next/image"
import useIsMobile from "@/hooks/useIsMobile";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import Links from "./Links";

export default function Navigation() {
    const isMobile = useIsMobile()
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

    function handleOpenMenu() {
        setIsMenuActive(true)
    }
    function handleCloseMenu() {
        setIsMenuActive(false)
    }


    let modalMenuContent = (
        <div className= "fixed flex opacity-90 items-center justify-center z-10 bg-customOrange top-0 right-0 w-[40%] h-full transition-transform transform " >     
            <div className="flex flex-col items-center relative z-10 justify-center space-y-4 py-10 font-daysOne text-black">
                <Links/>
            </div>
        </div>
    );
    
    let options = (
        <div className="options flex relative shrink-0 flex-row items-center justify-between">
            {!isMobile && <Links/>}
            <LanguageSwitcher/>
            {isMobile && isMenuActive && (
                <div onClick={handleCloseMenu} className="relative flex z-50 flex-col w-7 items-center space-y-[5px] right-[-12px] top-[-2px]">
                    <span className="absolute block w-6 h-[3px] translate-x-[-50%] transform rotate-[-45deg] bg-white"></span>
                    <span className="absolute block w-6 h-[3px] translate-x-[-50%]  translate-y-[-4.9px] transform rotate-[45deg] bg-white"></span>
                </div>
            )}
            {isMobile && !isMenuActive && (
                <div onClick={handleOpenMenu}  className="flex-shrink-0 w-7 inline-flex flex-col items-center space-y-[5px]">
                    <span className="block w-7 h-[3px] bg-white"></span>
                    <span className="block w-7 h-[3px] bg-white"></span>
                    <span className="block w-7 h-[3px] bg-white"></span>
                </div>
            )}
        </div>
    )

    return (
            <nav className={`fixed w-full navigation justify-between z-30 flex items-center flex-shrink-0 filter backdrop-blur-sm`}>
                <div className="shrink-0 grow-0 w-[120px] ">
                    <Image src={logo} alt="Logo" />
                </div>
                {options}
                {isMenuActive && modalMenuContent}
            </nav>
    )
}

