"use client"
import { Item } from '@/models/bec-you';
import { ModalWindowProps } from '@/models/bec-you';
import {useTranslations} from 'next-intl';



const ModalWindow: React.FC<ModalWindowProps> = ({items, handleClose}) => {


    return (
        <div className='w-full h-full fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm '>
            <div className="modal-window relative z-10 w-[90%] h-[80%] lg:h-auto bg-side">
                <button onClick={handleClose} className="cross"></button>
                <div className="dialog-container relative flex flex-col ">
                    {items.map((item, index) => (
                        <ModalItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>
       
    );
}


const ModalItem: React.FC<Item> = ({title, text}) => {
    return(
        <section className="modal-item">
            <h2 className='font-rubikB'>{title}</h2>
            <p className='font-rubik'>{text}</p>
        </section>
    )
}
export default ModalWindow;