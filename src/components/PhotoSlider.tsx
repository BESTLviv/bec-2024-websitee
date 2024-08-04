'use client'
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Title from './Title';
import '/node_modules/slick-carousel/slick/slick.css';
import '/node_modules/slick-carousel/slick/slick-theme.css';
import {useTranslations} from 'next-intl';
import slide1 from '/public/slide1.png';
import slide2 from '/public/slide2.png';
import slide3 from '/public/slide3.png';
import slide4 from '/public/slide4.png';
import slide5 from '/public/slide5.png';
import slide6 from '/public/slide6.png';
import slide7 from '/public/slide7.png';
import slide8 from '/public/slide8.png';

const images = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
];




const PhotoSlider = () => {
  const  t  = useTranslations('');

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    centerMode: true,
    rows: 2,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 400, 
        settings: {
          slidesToShow: 1,
        }
      },
     
    ]
  };


  return (
    <div className=' relative'>
    <span className=' bg-linesHome2M absolute  top-[-160%] right-[-90%] bg-no-repeat h-[680px] w-[680px]  min-[390px]:top-[-130%]  min-[390px]:right-[-80%] min-[510px]:top-[-120%]  min-[510px]:right-[-60%] min-[650px]:scale-[1.2]  min-[650px]:top-[-100%]  min-[650px]:right-[-50%]  min-[786px]:top-[-90%]  min-[786px]:right-[-40%]
     min-[1024px]:scale-[1.7] min-[1024px]:scale-x-[1.7] min-[1024px]:top-[-74%]  min-[1024px]:right-[-30%] min-[1100px]:right-[-25%] min-[1300px]:scale-[2] min-[1300px]:top-[-60%] min-[1500px]:scale-x-[2.7] min-[1800px]:top-[-40%] min-[1800px]:scale-[2.5] min-[1800px]:scale-x-[3.2] min-[2220px]:scale-x-[4.5] transform '></span>
    
    <Title>{t('photos')}</Title>
    <Slider className='slider overflow-hidden' {...settings}>
      {images.map((image, index) => (

          <Image key={index} className=' object-cover  '
            src={image}
            alt={`slide${index + 1}`}
          />
      ))}
    </Slider>
    </div>
  )
}


    

;

export default PhotoSlider;
