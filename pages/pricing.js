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
    <div className="orders w-ful">
      <section className="top w-full h-auto relative">
        <div className="container mx-auto bg-white">
          <h2 className="py-10 px-5">Top choices by our customers </h2>
          <div className="grid grid-cols-4 gap-5">
            <div className="info-box p-5 bg-gray flex space-y-5 flex-col justify-between">
              <div className="title">
                <h3 className="font-bold">150 mb</h3>
              </div>
              <div className="body">
                <p className="text-sm">
                  Best for manufacturing ·Best for tracking ·Best for small
                  fleet applications
                </p>
              </div>
              <div className="price">
                <h5 className="font-extrabold">$4.95/mo</h5>
              </div>
              <div className="actions">
                <button className="button w-full text-sm">Start Now!</button>
              </div>
            </div>

            <div className="info-box p-5 bg-black flex space-y-5 flex-col justify-between">
              <div className="title">
                <h3 className="text-white font-bold">250 mb</h3>
              </div>
              <div className="body">
                <p className="text-white text-sm">
                  ·Best for smart city projects ·Best for IoT sensors ·Best for
                  busy fleet applications
                </p>
              </div>
              <div className="price">
                <h5 className="text-white font-extrabold">$5.95/mo</h5>
              </div>
              <div className="actions">
                <button className="button w-full text-sm">Start Now!</button>
              </div>
            </div>

            <div className="info-box p-5 bg-gray flex space-y-5 flex-col justify-between">
              <div className="title">
                <h3 className="font-bold">5 GB</h3>
              </div>
              <div className="body">
                <p className="text-sm">
                  ·Best for complex aplications ·Best for network ·Best for busy
                  fleet applications
                </p>
              </div>
              <div className="price">
                <h5 className="font-extrabold">$$56.45/mo</h5>
              </div>
              <div className="actions">
                <button className="button w-full text-sm">Start Now!</button>
              </div>
            </div>

            <div className="info-box p-5 bg-black flex space-y-5 flex-col justify-between">
              <div className="title">
                <h3 className="text-white font-bold">NB-IOT</h3>
              </div>
              <div className="body">
                <p className="text-white text-sm">
                  ·Best for smart city projects ·Best for IoT sensors ·Best for
                  busy fleet applications
                </p>
              </div>
              <div className="price">
                <h5 className="text-white font-extrabold">$2.95/mo</h5>
              </div>
              <div className="actions">
                <button className="button w-full text-sm">Start Now!</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="top w-full h-auto relative py-10 px-5">
        <div className="container ml-auto mr-auto">
          <div className="flex flex-row items-center justify-between">
            <h2 className="flex-1">Tailored plans for your needs </h2>
            <p className="flex-1 text-lg font-light leading-relaxed">
              Get the perfect IoT connectivity plan with our tailored plans,
              customized to meet your specific needs and requirements
            </p>
          </div>
          <table className="w-full mt-10">
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

      <section className="top w-full h-auto relative p-10">
        <div className="container ml-auto mr-auto">
          <div className="flex flex-row items-center justify-between space-x-5">
            <p className="flex-[0.7] text-lg font-light leading-relaxed">
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
            <div className="box p-5 w-full h-[300px] bg-black flex flex-col justify-between flex-[0.3]">
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
