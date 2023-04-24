import React from 'react';
import * as image from '../../../assets/images/assets';
import './banner.css';
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from 'swiper';
import Typed from 'typed.js';

const Banner = () => {
    const typedName = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (typedName.current) {
        const typed = new Typed(typedName.current, {
          strings: ["Do Manh Thang", "Thặng Mánh", "mnh.thng"],
          startDelay: 500,
          typeSpeed: 120,
          backSpeed: 120,
          backDelay: 1500,
          loop: true,
        });
        return () => {
          typed.destroy();
        };
      }
    }, [typedName]);

    return (
        <React.Fragment>
            <section className='h-screen'>
                <div className='container grid grid-cols-2 mx-auto h-full'>
                    <div className='flex flex-col justify-center'>
                        <div className='uppercase text-greyBold font-bold mb-2'>hello, my name is</div>
                        <div className='mb-5 h-12'>
                            <span className='text-5xl font-bold typed-name' ref={typedName}>Do Manh Thang</span>
                        </div>
                        <div>If you are reading this, I wish you all the best and happiness and always have a nice day.</div>
                    </div>
                    <div className='bg-gradient-to-br from-greyLight to-greySemiBold p-5 w-3/4 my-auto ml-auto'>
                      <Swiper 
                        autoplay={{
                          delay: 4000,
                          disableOnInteraction: false,
                        }}
                        loop = {true}
                        modules={[Autoplay]}
                        className="mySwiper"
                      >
                        <SwiperSlide><img src={image.BannerSlide} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={image.BannerSlide} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={image.BannerSlide} alt="" /></SwiperSlide>
                      </Swiper>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Banner;