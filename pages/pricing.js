import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
export default function Customers() {
  const [prices, setPrices] = useState([
    {
      planId: 1,
      value: "1",
      unit: "MB",
      price: "1.70",
      perPrice: [
        {
          value: "4 cents",
          unit: "MB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 2,
      value: "10",
      unit: "MB",
      price: "1.95",
      perPrice: [
        {
          value: "4 cents",
          unit: "MB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 3,
      value: "25",
      unit: "MB",
      price: "2.45",
      perPrice: [
        {
          value: "4 cents",
          unit: "MB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 4,
      value: "50",
      unit: "MB",
      price: "2.95",
      perPrice: [
        {
          value: "4 cents",
          unit: "MB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 5,
      value: "100",
      unit: "MB",
      price: "3.45",
      perPrice: [
        {
          value: "4 cents",
          unit: "MB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 6,
      value: "150",
      unit: "MB",
      price: "4.45",
      perPrice: [
        {
          value: "4 cents",
          unit: "MB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 7,
      value: "250",
      unit: "MB",
      price: "5.45",
      perPrice: [
        {
          value: "4 cents",
          unit: "MB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 8,
      value: "500",
      unit: "MB",
      price: "7.45",
      perPrice: [
        {
          value: "4 cents",
          unit: "MB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 9,
      value: "750",
      unit: "MB",
      price: "9.95",
      perPrice: [
        {
          value: "4 cents",
          unit: "MB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 10,
      value: "1",
      unit: "GB",
      price: "11.95",
      perPrice: [
        {
          value: "4 cents",
          unit: "MB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 11,
      value: "2",
      unit: "GB",
      price: "23.95",
      perPrice: [
        {
          value: "4 cents",
          unit: "MB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 12,
      value: "3",
      unit: "GB",
      price: "34.95",
      perPrice: [
        {
          value: "4 cents",
          unit: "MB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 13,
      value: "4",
      unit: "GB",
      price: "45.95",
      perPrice: [
        {
          value: "4 cents",
          unit: "MB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 14,
      value: "5",
      unit: "GB",
      price: "56.45",
      perPrice: [
        {
          value: "4 cents",
          unit: "MB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 15,
      value: "10",
      unit: "GB",
      price: "109.95",
      perPrice: [
        {
          value: "4 cents",
          unit: "MB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 16,
      value: "25",
      unit: "GB",
      price: "159.95",
      perPrice: [
        {
          value: "8 dollars",
          unit: "GB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 17,
      value: "50",
      unit: "GB",
      price: "299.95",
      perPrice: [
        {
          value: "8 dollars",
          unit: "GB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 18,
      value: "NB",
      unit: "-IOT",
      price: "2.95",
      perPrice: [
        {
          value: "1 cents",
          unit: "MB",
        },
      ],
    },
  ]);

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
  return (
    <div className="orders w-full">
      <section className="top w-full h-auto relative">
        <div className="container mx-auto bg-white">
          <h2 className="py-10 font-normal pl-5">
            <strong>Top</strong> choices by <br /> our{" "}
            <strong>customers</strong>
          </h2>
          <div className="grid lg:grid-cols-4  grid-cols-1 gap-5 max-w-5xl mx-auto">
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

      <section className="top w-full h-auto relative  lg:px-10 px-5">
        <div className="container mx-auto bg-white">
          <div className="flex lg:flex-row flex-col items-center lg:justify-between space-x-5">
            <p className="flex-1 text-lg font-light leading-relaxed">
              We understand that every business has unique needs when it comes
              to IoT connectivity. Thats why we offer tailored plans that are
              designed to meet your specific requirements. Our flexible plans
              allow you to choose the data usage and speed that works best for
              your IoT devices, ensuring that you only pay for the data you
              need. Whether you require low-data usage or high-speed data
              transfer, we have a plan that can meet your needs. Contact us
              today to learn more about our tailored plans and how they can
              benefit your business.
            </p>
            <div className="box p-5 w-full lg:h-[300px] bg-black flex flex-col lg:justify-between  flex-1">
              <div className="top flex w-full justify-start">
                <div className="square w-[40px] h-[40px] bg-primary"></div>
              </div>
              <div className="title">
                <h5 className="text-white">
                  We Develope Special IOT Solutions for you
                </h5>
              </div>
              <div className="body">
                <p className="text-white">
                  Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit,sed
                  diam nonummy nibh euismod tincidunt ut laoreet{" "}
                </p>
              </div>
              <div className="footer flex justify-end mt-5">
                <button className="button px-5 text-sm">Contact Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
