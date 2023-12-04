import React from "react";
import * as image from "../../../assets/images/assets";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import Typed from "typed.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

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
        showCursor: false
      });
      return () => {
        typed.destroy();
      };
    }
  }, [typedName]);

  return (
    <React.Fragment>
      <div className="container grid grid-cols-2 mx-auto">
        <div className="flex flex-col justify-center space-y-5">
          <div className="uppercase text-greyBold font-bold mb-2">
            hello, my name is
          </div>
          <div className="h-12">
            <span className="text-5xl font-bold typed-name" ref={typedName}></span>
          </div>
          <div>
            If you are reading this, I wish you all the best and happiness and...
            <br/>
            Always have a nice day!!!
          </div>
          <div className="flex items-center space-x-4">
            <Link to={''}><FontAwesomeIcon icon={faFacebookF} size="lg" /></Link>
            <Link to={'https://github.com/mnhthng2112'}><FontAwesomeIcon icon={faGithub} size="lg" /></Link>
          </div>
        </div>

        <div className="bg-gradient-to-br from-greyLight to-greySemiBold p-5 w-3/4 my-auto ml-auto">
          <Swiper
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className="bannerSwiper"
          >
            <SwiperSlide>
              <img src={image.BannerSlide} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image.BannerSlide} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image.BannerSlide} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
