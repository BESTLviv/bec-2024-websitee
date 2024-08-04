'use client'
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import '/node_modules/slick-carousel/slick/slick.css';
import '/node_modules/slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import Slide from './Slide';
import arrowLeft from '/public/arrow-left.svg'
import arrowRight from '/public/arrow-right.svg'
import {useTranslations} from 'next-intl';
import Slides from './data';


interface ArrowProps {
  onClick: () => void;
}

const TeamSlider = () => {
  const  t  = useTranslations('core-team');

  const CustomDots: React.FC<{dots: React.ReactNode}> = ({dots}) => {
    return (
      <div className='dots-bar-container'>
        <ul className='dots-bar'> {dots} </ul>
      </div>
    );
  } 

  const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
         <Image src={arrowRight} alt='right'/>
      </div>
    );
  };

  const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
         <Image src={arrowLeft} alt='left'/>
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState<number>(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    appendDots: (dots: React.ReactNode) => <CustomDots dots={dots} />,
    slidesToShow: 3,
    centerMode: true,
    className: "slider-team",
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
    beforeChange: (current: any, next: any) => setImageIndex(next),
    responsive: [
      {
        
        breakpoint: 1024, 
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };



  return (
    <div className='slider-container'>
       <Slider {...settings}>
          {Slides.map((item, index) => (
            <Slide key={index} img={Slides[index].img} position={t(`position${index+1}`)} name={t(`name${index+1}`)} className={index === imageIndex ? "slide activeSlide" : "slide"}/>
          ))}
        </Slider>
    </div>

  )
}
// t(item.position)

    

;

export default TeamSlider;
