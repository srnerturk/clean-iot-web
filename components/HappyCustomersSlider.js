import Image from "next/image";
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const HappyCustomersSlider = () => {
  const [customers, setCustomers] = useState([
    {
      id: 0,
      alt: "Denali Logo",
      image: "/Denali.png",
    },
    {
      id: 0,
      alt: "Evam Logo",
      image: "/Evam.png",
    },
    {
      id: 0,
      alt: "Nova Logo",
      image: "/Nova.png",
    },
    {
      id: 0,
      alt: "pia Logo",
      image: "/pia.png",
    },
    {
      id: 0,
      alt: "ThirdEye Logo",
      image: "/ThirdEye.png",
    },
    {
      id: 0,
      alt: "Tmobile Logo",
      image: "/Tmobile.png",
    },
  ]);

  return (
    <section className="p-2 lg:p-5 bg-black partners">
      <h3 className="text-lg text-white text-center font-normal pb-3">
        happy <strong>Customers</strong>
      </h3>

      <div className="relative px-7">
        <div className="lg:hidden absolute h-full flex items-center left-2">
          <Image alt="" src={"/sliderArrow.png"} width={12} height={23} />
        </div>
        <div className="lg:hidden absolute h-full flex items-center right-2 rotate-180">
          <Image alt="" src={"/sliderArrow.png"} width={12} height={23} />
        </div>
        <div className="sm:hidden pb-3">
          <Swiper slidesPerView={3} spaceBetween={30} freeMode={true}>
            {customers.map((item, index) => (
              <SwiperSlide className="happy-customer-slide-item " key={index}>
                <div className="customer-item flex items-center h-full w-full justify-center ">
                  <Image
                    src={`${item.image}`}
                    alt={item.alt}
                    width={120}
                    height={120}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden sm:block lg:hidden pb-3">
          <Swiper slidesPerView={4} spaceBetween={30} freeMode={true}>
            {customers.map((item, index) => (
              <SwiperSlide className="happy-customer-slide-item" key={index}>
                <div className="customer-item flex items-center h-full w-full justify-center ">
                  <Image
                    src={`${item.image}`}
                    alt={item.alt}
                    width={120}
                    height={120}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden lg:block pb-3">
          <Swiper slidesPerView={6} spaceBetween={30} freeMode={true}>
            {customers.map((item, index) => (
              <SwiperSlide className="happy-customer-slide-item" key={index}>
                <div className="customer-item flex items-center h-full w-full justify-center ">
                  <Image
                    src={`${item.image}`}
                    alt={item.alt}
                    width={120}
                    height={120}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HappyCustomersSlider;
