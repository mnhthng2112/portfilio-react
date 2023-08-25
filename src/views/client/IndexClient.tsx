import React, { useRef, useState } from "react";
import Banner from '../../components/elements/banner/banner';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper';

const IndexClient = () => {
    return (
        <React.Fragment>
            <Swiper
                direction={'vertical'}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="screenSwiper"
            >
                <SwiperSlide>
                    <div className="grid place-items-center h-full">
                        <Banner />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid place-items-center h-full">
                        Slide 2
                    </div>
                </SwiperSlide>
            </Swiper>
        </React.Fragment>
    );
};

export default IndexClient;