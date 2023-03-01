/* eslint-disable jsx-a11y/alt-text */
import react, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Iot() {
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
    <div className="home w-full bg-primary">
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={animationVariant(0.5, 0.5)}
        className="top w-full h-auto bg-primary relative"
      >
        <div className="content w-full">
          <div className="container ml-auto mr-auto flex flex-row-reverse mt-10 mb-10">
            <Image
              className="flex-[0.3]"
              src="/iot-r.png"
              width={470}
              height={890}
              alt="Vercel Logo"
              sizes="100vw"
            />
            <div className="left flex-[0.7] p-10">
              <h1 className="mb-5">IOT</h1>
              <h2>connectivity</h2>
              <p className="mt-10">
                IoT connectivity is typically how we refer to the methods used
                to connect IoT devices. The term “IoT” (Internet of Things)
                mostly refers to wireless devices including applications,
                sensors, tracking devices, gateways and network
              </p>
              <p className="mt-2">
                IoT devices requiring less maintenance of technologies such as
                Ethernet and WiFi networks. Which can be less reliable and have
                problems of their own compared to cellular network.
              </p>
              <p className="mt-2">
                What is IoT?To understand what IoT SIM cards are in the first
                place, it is necessary to explain the term IoT. This is in fact
                the abbreviation for the term Internet of Things. With the
                Internet of Things, it is possible for smart devices to connect
                to each other on the one hand and to the outside world on the
                other. To make it easier to understand, you can also imagine
                that through these SIM cards the devices have the ability to
                talk to each other without involving a human being. This makes
                it possible for everyday objects to become intelligent devices.
              </p>
            </div>
          </div>

          <section className="card relative top-[-250px] container ml-auto mr-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={animationVariant(0.5, 0.5)}
              className="card-content bg-black rounded-[60px] w-full h-[480px] flex"
            >
              <div className="content flex">
                <div className="left flex-[0.6] p-20">
                  <div className="title fle items-center space-x-2">
                    <div className="title">
                      <h1 className="text-white tracking-wide mb-2">
                        M2M vs NB-Iot
                      </h1>
                      <h2 className="text-white mb-5">Which one to choose</h2>
                    </div>
                  </div>
                  <div className="content w-full flex">
                    <p className="text-white">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud exerci tation ullamcorper suscipit lobortis
                      nisl ut aliquip ex ea commod.
                    </p>
                  </div>
                </div>
                <div className="right flex-[0.4] p-20">
                  <ul className="list-r p-5">
                    <li className="text-left">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </li>
                    <li className="text-left">
                      Aliquam tincidunt mauris eu risus.
                    </li>
                    <li className="text-left">
                      Vestibulum auctor dapibus neque.
                    </li>
                    <li className="text-left">
                      unc dignissim risus id metus.
                    </li>
                    <li className="text-left">Cras ornare tristique elit.</li>
                    <li className="text-left">
                      Vivamus vestibulum ntulla nec ante.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </motion.section>
    </div>
  );
}
