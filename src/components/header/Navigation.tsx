"use client";
import logo from "/public/BEC Logo Final.svg";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";
import { useState } from "react";

import BurgerMenu from "./BurgerMenu";
import NavigationBar from "./NavigationBar";

export default function Navigation() {
    const isMobile = useIsMobile();
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  
    function handleOpenMenu() {
        setIsMenuActive(true);
    }

    function handleCloseMenu() {
        setIsMenuActive(false);
    }

    return (
        <>
            <nav
                className={`fixed w-full navigation justify-between z-30 flex items-center flex-shrink-0 filter backdrop-blur-sm`}
            >
                <div className="shrink-0 grow-0 w-[120px]">
                    <Image src={logo} alt="Logo" />
                </div>
                <NavigationBar isMenuActive={isMenuActive} isMobile={isMobile} handleOpenMenu={handleOpenMenu} handleCloseMenu={handleCloseMenu}/>
                <BurgerMenu handleCloseMenu={handleCloseMenu} isMenuActive={isMenuActive} />
            </nav>
        </>
    );
}
