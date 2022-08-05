import React from "react";
import "./OfferSlider.css";
import SwiperCore, { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
SwiperCore.use([Autoplay]);

const OfferSlider = ({ offerData }) => {
  return (
    <div className="t-wrapper">
      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={true}
      >
        {offerData.map((offfer, index) => {
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
