import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Customers() {
  const [prices, setPrices] = useState([
    {
      id: 0,
      data: "1mb",
      price: "$1.70/mo",
      simType: "M2M",
      dataOverage: "4 cents/MB",
    },
    {
      id: 0,
      data: "10mb",
      price: "$1.90/mo",
      simType: "M2M",
      dataOverage: "4 cents/MB",
    },
    {
      id: 1,
      data: "25mb",
      price: "$2.10/mo",
      simType: "M2M",
      dataOverage: "4 cents/MB",
    },
    {
      id: 2,
      data: "50mb",
      price: "$1.70/mo",
      simType: "M2M",
      dataOverage: "4 cents/MB",
    },
    {
      id: 3,
      data: "75mb",
      price: "$1.70/mo",
      simType: "M2M",
      dataOverage: "4 cents/MB",
    },
    {
      id: 4,
      data: "100mb",
      price: "$1.70/mo",
      simType: "M2M",
      dataOverage: "4 cents/MB",
    },
    {
      id: 5,
      data: "150mb",
      price: "$1.70/mo",
      simType: "M2M",
      dataOverage: "4 cents/MB",
    },
    {
      id: 6,
      data: "200mb",
      price: "$1.70/mo",
      simType: "M2M",
      dataOverage: "4 cents/MB",
    },
    {
      id: 7,
      data: "250mb",
      price: "$1.70/mo",
      simType: "M2M",
      dataOverage: "4 cents/MB",
    },
    {
      id: 8,
      data: "500mb",
      price: "$1.70/mo",
      simType: "M2M",
      dataOverage: "4 cents/MB",
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
    <div className="orders w-full bg-primary">
      <section
        className="top w-full h-auto bg-primary relative"
      >
        <div className="container ml-auto mr-auto">
          <h1 className="mb-20 mt-20">Top choices by our customers </h1>
          <div className="grid grid-cols-4 gap-5">
            <div className="info-box p-5 bg-gray flex space-y-5 flex-col">
              <div className="title">
                <h2>150 mb</h2>
              </div>
              <div className="body">
                <h5>
                  Best for manufacturing ·Best for tracking ·Best for small
                  fleet applications
                </h5>
              </div>
              <div className="price">
                <h2>$4.95/mo</h2>
              </div>
              <div className="actions">
                <button className="button w-full">Start Now!</button>
              </div>
            </div>

            <div className="info-box p-5 bg-black flex space-y-5 flex-col">
              <div className="title">
                <h2 className="text-white">250 mb</h2>
              </div>
              <div className="body">
                <h5 className="text-white">
                  ·Best for smart city projects ·Best for IoT sensors ·Best for
                  busy fleet applications
                </h5>
              </div>
              <div className="price">
                <h2 className="text-white">$5.95/mo</h2>
              </div>
              <div className="actions">
                <button className="button w-full">Start Now!</button>
              </div>
            </div>

            <div className="info-box p-5 bg-gray flex space-y-5 flex-col">
              <div className="title">
                <h2>5 GB</h2>
              </div>
              <div className="body">
                <h5>
                  ·Best for complex aplications ·Best for network ·Best for busy
                  fleet applications
                </h5>
              </div>
              <div className="price">
                <h2>$$56.45/mo</h2>
              </div>
              <div className="actions">
                <button className="button w-full">Start Now!</button>
              </div>
            </div>

            <div className="info-box p-5 bg-black flex space-y-5 flex-col">
              <div className="title">
                <h2 className="text-white">NB-IOT</h2>
              </div>
              <div className="body">
                <h5 className="text-white">
                  ·Best for smart city projects ·Best for IoT sensors ·Best for
                  busy fleet applications
                </h5>
              </div>
              <div className="price">
                <h2 className="text-white">$2.95/mo</h2>
              </div>
              <div className="actions">
                <button className="button w-full">Start Now!</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="top w-full h-auto bg-primary relative mt-20"
      >
        <div className="container ml-auto mr-auto">
          <div className="flex flex-row items-center justify-between">
            <h1 className="flex-1">Tailored plans for your needs </h1>
            <h3 className="flex-1">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore.
            </h3>
          </div>
          <table className="w-full mt-20">
            <thead>
              <tr className="bg-black h-[50px]">
                <td className="font-bold">Data Amount</td>
                <td className="font-bold">Price</td>
                <td className="font-bold">Sim Type</td>
                <td className="font-bold">Data Overage</td>
              </tr>
            </thead>
            <tbody>
              {prices.map((item, index) =>
                index % 2 === 0 ? (
                  <tr className=" bg-green h-[30px]" key={index}>
                    <td className="text-black">{item.data}</td>
                    <td className="text-black">{item.price}</td>
                    <td className="text-black">{item.simType}</td>
                    <td className="text-black">{item.dataOverage}</td>
                  </tr>
                ) : (
                  <tr className="bg-gray h-[30px]" key={index}>
                    <td className="text-black">{item.data}</td>
                    <td className="text-black">{item.price}</td>
                    <td className="text-black">{item.simType}</td>
                    <td className="text-black">{item.dataOverage}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section
        className="top w-full h-auto bg-primary relative mt-20"
      >
        <div className="container ml-auto mr-auto">
          <div className="flex flex-row items-center justify-between">
            <h5 className="flex-[0.7]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad scipit lobortis nisl ut aliquip ex
              ea commodo consequat equat.
            </h5>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={animationVariant(0.5, 0.5)}
              className="box p-10 w-full h-[400px] bg-black flex flex-col justify-between flex-[0.3]"
            >
              <div className="top flex w-full justify-start">
                <div className="square w-[60px] h-[60px] bg-primary"></div>
              </div>
              <div className="title">
                <h3 className="text-white">
                  We Develope Special IOT Solutions for you
                </h3>
              </div>
              <div className="body">
                <h5 className="text-white">
                  Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit,sed
                  diam nonummy nibh euismod tincidunt ut laoreet{" "}
                </h5>
              </div>
              <div className="footer flex justify-end">
                <button className="button px-5">Contact Now</button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
