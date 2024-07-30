"use client"
import { BecYouItemProps } from "@/models/bec-you";
import ModalWindow from "./ModalWindow";
import { useState } from "react";

const BecYouItem: React.FC<BecYouItemProps> = ({ title, text1, subText, more }) => {
    const [isActive, setIsActive] = useState<boolean>(false)
    function handleOpen() {
        setIsActive(true)
        document.body.style.overflow = 'hidden';
    }
    function handleClose() {
        setIsActive(false)
        document.body.style.overflow = 'auto';
    }

    return (
        <>
            {isActive && <ModalWindow handleClose={handleClose} items={more}/>}
            
            <section className=" bec-you-item flex items-center relative z-10 text-white filter backdrop-blur-[2px]">
            <div>
                <h2 className="text-title font-daysOne">{title}</h2>
                <div className="font-rubik">
                    <p>{text1}</p>
                    <button onClick={handleOpen}>{subText}</button>
                </div>
            </div>
            </section>
        </>
    );
}

export default BecYouItem