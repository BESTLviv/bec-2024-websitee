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
  
      let startX: number | null = null;
  
      function handleTouchStart(event: TouchEvent) {
          startX = event.touches[0].clientX;
      }
  
      function handleTouchEnd(event: TouchEvent) {
          if (startX === null) return;
  
          const endX = event.changedTouches[0].clientX;
          const diffX = endX - startX;
  
          if (diffX > 50) {
              handleCloseMenu();
          }
  
          startX = null; 
      }
  
      if (isMenuActive) {
          document.addEventListener("mousedown", handleClickOutside);
          document.addEventListener("touchstart", handleTouchStart);
          document.addEventListener("touchend", handleTouchEnd);
      } else {
          document.removeEventListener("mousedown", handleClickOutside);
          document.removeEventListener("touchstart", handleTouchStart);
          document.removeEventListener("touchend", handleTouchEnd);
      }
  
      return () => {
          document.removeEventListener("mousedown", handleClickOutside);
          document.removeEventListener("touchstart", handleTouchStart);
          document.removeEventListener("touchend", handleTouchEnd);
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
          <div className=" menu-links flex flex-col items-center relative z-10 justify-center space-y-4 py-10 font-daysOne text-black">
            <Links />
          </div>
        </div>
      </>
      
    );
  };
  BurgerMenu.displayName = "BurgerMenu";

export default BurgerMenu;
