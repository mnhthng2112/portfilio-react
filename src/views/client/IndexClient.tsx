import React from "react";
import Banner from '../../components/elements/banner/banner';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from 'swiper';

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