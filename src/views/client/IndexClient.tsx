import React from "react";
import Banner from '../../components/elements/swiperSliders/Banner';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from 'swiper';
import Favorite from "../../components/elements/swiperSliders/Favorite";

const IndexClient = () => {
    return (
        <React.Fragment>
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
                    <Favorite />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid place-items-center h-full">
                        <Favorite />
                    </div>
                </SwiperSlide>
            </Swiper>
        </React.Fragment>
    );
};

export default IndexClient;