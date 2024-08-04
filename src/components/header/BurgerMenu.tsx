import Links from "./Links";
import { useEffect, useRef } from "react";

const BurgerMenu:React.FC<{ isMenuActive: boolean, handleCloseMenu: () => void }> = ({ isMenuActive, handleCloseMenu }) => {
    const modalMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalMenuRef.current && !modalMenuRef.current.contains(event.target as Node)) {
                handleCloseMenu();
            }
        }

        if (isMenuActive) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuActive, handleCloseMenu]);


    return (
      <>
        
        <div
          ref={modalMenuRef}
          className={`fixed flex opacity-90 items-center justify-center z-30 bg-customOrange top-0 right-0 w-[45%] h-screen transition-transform duration-500 transform ${
            isMenuActive ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <span className="block bg-customOrange w-[100%] h-[9999px] absolute "></span>
          <div className="flex flex-col items-center relative z-10 justify-center space-y-4 py-10 font-daysOne text-black">
            <Links />
          </div>
        </div>
      </>
      
    );
  };
  BurgerMenu.displayName = "BurgerMenu";

export default BurgerMenu;
