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
    <section className="grid place-items-center h-full">
      <div className='absolute left-0 bottom-0'>
        <img src="./images/paintingFlower.png" className='w-[275px]' alt="" />
      </div>
      <div className="container relative grid grid-cols-2 mb-[100px]">
        <div className="flex justify-around">
          <div className="vertical-text font-Crimson cursor-default text-center font-bold text-6xl rotate-180 uppercase text-greySemiBold flex justify-between ">
            <span>w</span>
            <span>e</span>
            <span>l</span>
            <span>c</span>
            <span>o</span>
            <span>m</span>
            <span>e</span>
          </div>
          <div className="flex flex-col justify-center space-y-5">
            <div className="uppercase text-greyBold font-bold">
              hello, my name is
            </div>
            <div className="h-12">
              <span className="text-5xl font-bold typed-name" ref={typedName}></span>
            </div>
            <div className="news-letter">
              <span className="font-Crimson">I</span>
              <span className="ml-2">just created this website for myself.
              If you see this I hope you like it.</span>
              <br />
              <span className="ml-2">wish you all the best, happiness and...</span>
              <br/>
              <span>Have a nice day!!!</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to={'https://www.facebook.com/profile.php?id=100036095643578'} target="_blank"><FontAwesomeIcon icon={faFacebookF} size="lg" /></Link>
              <Link to={'https://github.com/mnhthng2112'} target="_blank"><FontAwesomeIcon icon={faGithub} size="lg" /></Link>
            </div>
          </div>
        </div>
        <div className="vertical-dashed !left-[-20px]"></div>
        <div className="vertical-dashed"></div>
        <div className="vertical-dashed !right-[-20px]"></div>
        <div className="horizontal-dashed !top-[-20px]"></div>
        <div className="horizontal-dashed !bottom-[-20px]"></div>
        <div className="bg-gradient-to-br from-greyLight to-greySemiBold p-5 w-3/4 my-auto mx-auto">
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
              <img src={"./images/banner-1.jpg"} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={"./images/banner-1.jpg"} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={"./images/banner-1.jpg"} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Banner;
