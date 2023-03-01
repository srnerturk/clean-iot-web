/* eslint-disable jsx-a11y/alt-text */
import react, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Home() {
  const [questions, setQuestions] = useState([
    {
      id: 0,
      text: "What is the starting price of a M2M IoT solution",
      collapsed: false,
    },
    { id: 1, text: "About customer dashboard", collapsed: false },
    {
      id: 2,
      text: "What is the starting price of a M2M IoT solution",
      collapsed: false,
    },
    { id: 3, text: "About customer dashboard", collapsed: false },
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
    <div className="home w-full bg-primary">
      <section className="top w-full h-auto bg-primary relative">
        <Image
          className="w-full h-auto max-h-[810px] overflow-hidden object-cover"
          src="/main.png"
          width={0}
          height={0}
          alt="Vercel Logo"
          sizes="100vw"
        />
      </section>
      <section className="card relative top-[-100px] container ml-auto mr-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={animationVariant(0.5, 0.5)}
          className="card-content bg-black rounded-[60px] w-full h-[480px] flex"
        >
          <div className="left flex-[0.5] p-20">
            <div className="title flex items-center space-x-2">
              <Image src="/star.png" width={40} height={40} alt="Vercel Logo" />
              <h1 className="text-white tracking-wide">Star</h1>
              <h1 className="text-white">your journey.</h1>
            </div>
            <h2 className="text-white mt-5 mb-20">with this simple step.</h2>
            <div className="slidecontainer w-full">
              <div className="input">
                <input
                  type="range"
                  min="1"
                  max="100"
                  className="slider rounded-full w-full bg-white appearance-none h-[20px]"
                  id="myRange"
                  defaultValue={50}
                />
              </div>
              <div className="values mt-2 w-full flex justify-between">
                <p className="text-white">15 QTY</p>
                <p className="text-white">500 MB</p>
                <p className="text-white">$400 TOTAL</p>
              </div>
              <div className="actions mt-10">
                <button className="button px-20">Order Now!</button>
              </div>
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={animationVariant(0.5, 0.5)}
            className="right flex-[0.5] relative bottom-[-120px] right-[-100px] flex items-end justify-end"
          >
            <Image
              className="w-full h-auto"
              objectFit="contain"
              src="/cards.png"
              width={0}
              height={0}
              alt="Vercel Logo"
              sizes="100vw"
            />
          </motion.div>
        </motion.div>
      </section>
      <section className="boxes container ml-auto mr-auto">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={animationVariant(0.5, 0.5)}
            className="box p-10 w-full h-[400px] bg-black flex flex-col justify-between"
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={animationVariant(0.5, 1)}
            className="box p-10 w-full h-[400px] bg-green flex flex-col justify-between"
          >
            <div className="top flex w-full justify-start">
              <div className="square w-[60px] h-[60px] bg-black"></div>
            </div>
            <div className="title">
              <h3>We Develope Special IOT Solutions for you</h3>
            </div>
            <div className="body">
              <h5>
                Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit,sed
                diam nonummy nibh euismod tincidunt ut laoreet{" "}
              </h5>
            </div>
            <div className="footer flex justify-end">
              <button className="button bg-gray px-5">Contact Now</button>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={animationVariant(0.5, 1.5)}
            className="box p-10 w-full h-[400px] bg-black flex flex-col justify-between"
          >
            <div className="top flex w-full justify-start">
              <div className="square w-[60px] h-[60px] bg-white"></div>
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
      </section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={animationVariant(0.5, 0.5)}
        className="top container mt-20 ml-auto mr-auto h-auto bg-primary relative"
      >
        <Image
          className="w-full h-auto rounded-[60px]"
          objectFit="contain"
          src="/video.png"
          width={0}
          height={0}
          alt="Vercel Logo"
          sizes="100vw"
        />
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={animationVariant(0.5, 0.5)}
        className="questions container mt-20 ml-auto mr-auto mb-40"
      >
        <div className="title flex items-center space-x-1 mb-10">
          <h1 className="text-green">?</h1>
          <h2>Freaquentlyasked questions</h2>
        </div>
        <div className="body flex flex-col space-x-2">
          {questions.map((item, index) => (
            <div
              key={index}
              className="question-item cursor-pointer border-b border-b-gray flex h-[100px] items-center justify-between"
            >
              <h5>{item.text}</h5>
              <Image
                alt="arrow"
                className="image"
                src="/arrow.png"
                width={36}
                height={18}
              />
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
