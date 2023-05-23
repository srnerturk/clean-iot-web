import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import HappyCustomersSlider from "../components/HappyCustomersSlider";

export default function Customers({ prices }) {
  const animationVariant = (duration, delay) => {
    return {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          duration,
          delay,
        },
      },
    };
  };

  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="orders w-full">
      <section className="top w-full h-auto relative">
        <div className="container mx-auto bg-white">
          <h2 className="py-10 font-normal pl-5">
            <strong>Top</strong> choices by <br /> our{" "}
            <strong>customers</strong>
          </h2>
          <div className=" lg:hidden relative">
            <div className=" hidden xs:block absolute bg-gradient-to-r from-transparent top-0 bottom-0 right-0 h-80 to-white w-28 z-50"></div>
            <div className="hidden xs:block absolute bg-gradient-to-l from-transparent top-0 bottom-0 left-0 h-80 to-white w-28 z-50"></div>
            <Swiper
              slidesPerView={windowWidth > 740 ? 3 : windowWidth > 545 ? 2 : 1}
              spaceBetween={30}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              grabCursor={true}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="info-box max-w-[250px] h-80 mx-auto rounded-md overflow-hidden pb-5 bg-[#E2E4E5] flex flex-col justify-start">
                  <div className="title p-5 mb-1">
                    <h3 className="font-normal text-3xl">
                      <strong>150</strong> MB
                    </h3>
                  </div>
                  <div className="body italic px-5 pb-6 flex-1">
                    <p className="text-sm font-semibold">
                      ·Best for manufacturing
                    </p>
                    <p className="text-sm font-semibold">·Best for tracking</p>
                    <p className="text-sm font-semibold">
                      ·Best for small fleet applications
                    </p>
                  </div>
                  <div className="price px-5 pb-2">
                    <h5 className="font-normal text-3xl">
                      <strong>$4.95</strong>/mo
                    </h5>
                  </div>
                  <div className="actions mx-5">
                    <Link
                      href={"/contact"}
                      className="w-full text-2xl text-black bg-green py-2 block text-center"
                    >
                      Start <strong>Now!</strong>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="info-box max-w-[250px] h-80 mx-auto rounded-md overflow-hidden pb-5 bg-[#231F20] flex flex-col justify-start">
                  <div className="title p-5 mb-1">
                    <h3 className="text-white font-normal text-3xl">
                      <strong>250</strong> MB
                    </h3>
                  </div>
                  <div className="body px-5 pb-6 italic flex-1">
                    <p className="text-white text-sm font-semibold">
                      ·Best for smart city projects
                    </p>
                    <p className="text-white text-sm font-semibold">
                      ·Best for IoT sensors
                    </p>
                    <p className="text-white text-sm font-semibold">
                      ·Best for busy fleet applications
                    </p>
                  </div>
                  <div className="price px-5 pb-2">
                    <h5 className="font-normal text-white text-3xl">
                      <strong>$5.95</strong>/mo
                    </h5>
                  </div>
                  <div className="actions mx-5">
                    <Link
                      href={"/contact"}
                      className="w-full text-2xl text-black bg-green py-2 block text-center"
                    >
                      Start <strong>Now!</strong>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="info-box max-w-[250px] h-80 mx-auto rounded-md overflow-hidden pb-5 bg-[#E2E4E5] flex  flex-col justify-start">
                  <div className="title bg-[#231F20] p-5 mb-1">
                    <h3 className="font-normal text-3xl text-white">
                      <strong>5</strong> GB
                    </h3>
                  </div>
                  <div className="body italic pb-6 px-5 flex-1">
                    <p className="text-sm font-semibold">
                      ·Best for complex aplications
                    </p>
                    <p className="text-sm mt-1 font-semibold">
                      ·Best for network
                    </p>
                    <p className="text-sm mt-1 font-semibold">
                      ·Best for busy fleet applications
                    </p>
                  </div>
                  <div className="price px-5 pb-2">
                    <h5 className="font-normal text-3xl">
                      <strong>$56.45</strong>/mo
                    </h5>
                  </div>
                  <div className="actions mx-5">
                    <Link
                      href={"/contact"}
                      className="w-full text-2xl text-black bg-green py-2 block text-center"
                    >
                      Start <strong>Now!</strong>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="info-box max-w-[250px] h-80 mx-auto rounded-md overflow-hidden pb-5 bg-[#E2E4E5] flex flex-col justify-start">
                  <div className="title p-5 mb-1 bg-[#231F20]">
                    <h3 className="font-normal text-white text-3xl">
                      NB-<strong>IoT</strong>
                    </h3>
                  </div>
                  <div className="body px-5 pb-6 italic flex-1">
                    <p className="text-sm font-semibold">
                      ·Best for smart city projects
                    </p>
                    <p className="text-sm font-semibold">
                      ·Best for IoT sensors
                    </p>
                    <p className="text-sm font-semibold">
                      ·Best for busy fleet applications
                    </p>
                    <p className="text-sm"></p>
                  </div>
                  <div className="price px-5 pb-2">
                    <h5 className="font-normal text-3xl">
                      <strong>$2.95</strong>/mo
                    </h5>
                  </div>
                  <div className="actions mx-5">
                    <Link
                      href={"/contact"}
                      className="w-full border-4 text-2xl text-black border-black bg-green py-2 block text-center justify-end justify-self-start"
                    >
                      Start <strong>Now!</strong>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="hidden lg:grid lg:grid-cols-4 grid-cols-1 gap-5 max-w-5xl mx-auto">
            <div className="info-box rounded-md overflow-hidden pb-5 bg-[#E2E4E5] flex flex-col justify-start">
              <div className="title p-5 mb-1">
                <h3 className="font-normal text-3xl">
                  <strong>150</strong> MB
                </h3>
              </div>
              <div className="body italic px-5 pb-6 flex-1">
                <p className="text-sm font-semibold">·Best for manufacturing</p>
                <p className="text-sm font-semibold">·Best for tracking</p>
                <p className="text-sm font-semibold">
                  ·Best for small fleet applications
                </p>
              </div>
              <div className="price px-5 pb-2">
                <h5 className="font-normal text-3xl">
                  <strong>$4.95</strong>/mo
                </h5>
              </div>
              <div className="actions mx-5">
                <Link
                  href={"/contact"}
                  className="w-full text-2xl text-black bg-green py-2 block text-center"
                >
                  Start <strong>Now!</strong>
                </Link>
              </div>
            </div>

            <div className="info-box rounded-md overflow-hidden pb-5 bg-[#231F20] flex flex-col justify-start">
              <div className="title p-5 mb-1">
                <h3 className="text-white font-normal text-3xl">
                  <strong>250</strong> MB
                </h3>
              </div>
              <div className="body px-5 pb-6 italic flex-1">
                <p className="text-white text-sm font-semibold">
                  ·Best for smart city projects
                </p>
                <p className="text-white text-sm font-semibold">
                  ·Best for IoT sensors
                </p>
                <p className="text-white text-sm font-semibold">
                  ·Best for busy fleet applications
                </p>
              </div>
              <div className="price px-5 pb-2">
                <h5 className="font-normal text-white text-3xl">
                  <strong>$5.95</strong>/mo
                </h5>
              </div>
              <div className="actions mx-5">
                <Link
                  href={"/contact"}
                  className="w-full text-2xl text-black bg-green py-2 block text-center"
                >
                  Start <strong>Now!</strong>
                </Link>
              </div>
            </div>

            <div className="info-box rounded-md overflow-hidden pb-5 bg-[#E2E4E5] flex  flex-col justify-start">
              <div className="title bg-[#231F20] p-5 mb-1">
                <h3 className="font-normal text-3xl text-white">
                  <strong>5</strong> GB
                </h3>
              </div>
              <div className="body italic pb-6 px-5 flex-1">
                <p className="text-sm font-semibold">
                  ·Best for complex aplications
                </p>
                <p className="text-sm mt-1 font-semibold">·Best for network</p>
                <p className="text-sm mt-1 font-semibold">
                  ·Best for busy fleet applications
                </p>
              </div>
              <div className="price px-5 pb-2">
                <h5 className="font-normal text-3xl">
                  <strong>$56.45</strong>/mo
                </h5>
              </div>
              <div className="actions mx-5">
                <Link
                  href={"/contact"}
                  className="w-full text-2xl text-black bg-green py-2 block text-center"
                >
                  Start <strong>Now!</strong>
                </Link>
              </div>
            </div>
            <div className="info-box rounded-md overflow-hidden pb-5 bg-[#E2E4E5] flex flex-col justify-start">
              <div className="title p-5 mb-1 bg-[#231F20]">
                <h3 className="font-normal text-white text-3xl">
                  NB-<strong>IoT</strong>
                </h3>
              </div>
              <div className="body px-5 pb-6 italic flex-1">
                <p className="text-sm font-semibold">
                  ·Best for smart city projects
                </p>
                <p className="text-sm font-semibold">·Best for IoT sensors</p>
                <p className="text-sm font-semibold">
                  ·Best for busy fleet applications
                </p>
                <p className="text-sm"></p>
              </div>
              <div className="price px-5 pb-2">
                <h5 className="font-normal text-3xl">
                  <strong>$2.95</strong>/mo
                </h5>
              </div>
              <div className="actions mx-5">
                <Link
                  href={"/contact"}
                  className="w-full border-4 text-2xl text-black border-black bg-green py-2 block text-center justify-end justify-self-start"
                >
                  Start <strong>Now!</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="top w-full h-auto relative">
        <div className="container ml-auto mr-auto py-10 bg-white">
          <div className="bg-black lg:bg-white py-10">
            <div className="max-w-4xl mx-auto lg:flex">
              <h2 className="text-white lg:text-black font-normal text-center md:text-start px-5 lg:px-0 lg:w-64">
                <strong>Tailored</strong> plans
                <br className="hidden lg:block" /> for your{" "}
                <strong>needs</strong>
              </h2>
              <p className="text-white lg:text-black px-5 text-center md:text-start italic mt-3 lg:mt-0 font-thin text-base">
                Get the perfect IoT connectivity plan with our tailored plans,
                customized to meet your specific needs and requirements
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-evenly px-3 max-w-[1036px] mx-auto lg:justify-between gap-5 mt-9">
            {prices.map((item, index) => (
              <div
                key={index}
                className="flex rounded-md overflow-hidden w-full max-w-xs shadow-slate-500 shadow-lg"
              >
                <div className="basis-5/12 flex flex-col justify-center pl-4 py-2">
                  <div>
                    <div className="text-3xl text-black">
                      <strong>{item.value} </strong>
                      {item.unit}
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-end">
                    <div className="text-sm text-black italic font-semibold">
                      Sim Type
                    </div>
                    <div className="text-black font-semibold">M2M</div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-end justify-start text-end pr-4 py-2 text-white bg-black">
                  <div className="text-3xl font-thin">
                    <strong className="font-normal">${item.price}</strong>/mo
                  </div>
                  <div className="text-sm italic mb-2">Overage</div>
                  {item.perPrice.map((price, i) => (
                    <div className="italic text-sm" key={i}>
                      <span>{price.value}</span>
                      <span>{price.unit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="top w-full h-auto relative">
        <div className="container mx-auto bg-white px-5 lg:px-10">
          <div className="pb-0 lg:pb-24 pt-11 flex flex-col max-w-[55rem] mx-auto lg:flex-row lg:gap-6 items-center lg:items-stretch lg:justify-between">
            <div className="flex-1 mb-5 lg:mr-3 lg:basis-7/12">
              <p className="text-lg lg:text-xl mb-1 font-light leading-relaxed">
                Our customers have spoken, and we&apos;re proud to share some of
                their top choices for IoT solutions:
              </p>
              <ul className="list-inside list-decimal pl-2">
                <li className="text-lg lg:text-xl mb-1 font-light leading-relaxed text-black">
                  Our IoT SIM cards, which offer reliable and secure
                  connectivity to support a wide range of IoT devices.
                </li>
                <li className="text-lg lg:text-xl mb-1 font-light leading-relaxed text-black">
                  Our customized IoT solutions, designed to meet the specific
                  needs of each business and optimize performance, security, and
                  scalability.
                </li>
                <li className="text-lg lg:text-xl mb-1 font-light leading-relaxed text-black">
                  Our tailored plans, which provide flexible options for data
                  usage and speed to fit the unique needs of each business.
                </li>
                <li className="text-lg lg:text-xl mb-1 font-light leading-relaxed text-black">
                  Our excellent customer support, which is always available to
                  answer questions and provide assistance with any issues that
                  may arise.
                </li>
              </ul>
              <p className="text-lg lg:text-xl mb-1 font-light leading-relaxed">
                At our company, we are committed to providing the highest level
                of service and support to our customers. We take great pride in
                their satisfaction with our IoT solutions and will continue to
                work hard to meet their evolving needs. Contact us today to
                learn more about how our IoT solutions can benefit your
                business.
              </p>
            </div>
            <div className="box mb-5 p-5 w-full lg:basis-1/4 bg-black flex flex-col lg:justify-start flex-1">
              <div className="top flex w-full justify-start mb-3 lg:mb-4">
                <Image alt="qr" src="/qr.svg" width={50} height={50} />
              </div>
              <h5 className="text-white mb-2 lg:mb-3 lg:text-2xl lg:mr-8 font-normal">
                We Develop Special IOT Solutions for you
              </h5>

              <p className="text-white text-lg leading-6 font-thin italic flex-1">
                Our team of experts can develop customised IOT solution to meet
                your specific business needs and requirements
              </p>

              <div className="footer flex justify-end mt-5">
                <button className="py-1 w-full md:w-auto font-normal bg-green text-black px-5 lg:text-xl">
                  Contact <strong>Now!</strong>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <HappyCustomersSlider />
        </div>
      </section>
    </div>
  );
}
