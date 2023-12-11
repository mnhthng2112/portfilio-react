import React from "react";
import Banner from '../../components/elements/swiperMainContent/Banner';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from 'swiper';
import Favorite from "../../components/elements/swiperMainContent/Favorite";
import About from "../../components/elements/swiperMainContent/About";
import Header from "../../components/elements/header/Header";
import Project from "../../components/elements/swiperMainContent/Project";

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
                    <Project />
                </SwiperSlide>
                <SwiperSlide>
                    <Favorite />
                </SwiperSlide>
            </Swiper>
            {/* <Banner />
            <About />
            <Project />
            <Favorite /> */}

        </React.Fragment>
    );
};

export default IndexClient;