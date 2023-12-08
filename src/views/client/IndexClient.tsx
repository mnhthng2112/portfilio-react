import React from "react";
import Banner from '../../components/elements/swiperSliders/Banner';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from 'swiper';
import Favorite from "../../components/elements/swiperSliders/Favorite";
import About from "../../components/elements/swiperSliders/About";
import Header from "../../components/elements/header/Header";

const IndexClient = () => {
    return (
        <React.Fragment>
            <Header />
            <Swiper
                direction={'vertical'}
                pagination={{
                    clickable: true,
                }}
                mousewheel={true}
                modules={[Pagination, Mousewheel]}
                className="screenSwiper"
            >
                <SwiperSlide>
                    <Banner />
                </SwiperSlide>
                <SwiperSlide>
                    <About />
                </SwiperSlide>
                <SwiperSlide>
                    <Favorite />
                </SwiperSlide>
            </Swiper>
        </React.Fragment>
    );
};

export default IndexClient;