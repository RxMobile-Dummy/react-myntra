import React from "react";
import "./OfferSlider.css";
import SwiperCore, { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
SwiperCore.use([Autoplay]);

interface Props {
  offerData: any;
}

const OfferSlider = (props: Props) => {
  return (
    <div className="t-wrapper">
      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={true}
      >
        {props.offerData.map((offfer: any, index: number) => {
          return (
            <SwiperSlide key={index}>
              <div className="offer-div">
                <img src={offfer.image} alt="" width="100%" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default OfferSlider;
