/* eslint-disable jsx-a11y/alt-text */
import react, { useState } from "react";
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
  return (
    <div className="home">
      <div className="container mx-auto">
        <section className="top h-auto bg-primary relative">
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
          <div className="card-content bg-black rounded-[60px] w-full h-[480px] flex">
            <div className="left flex-[0.5] p-20">
              <div className="title flex items-center space-x-2">
                <Image
                  src="/star.png"
                  width={40}
                  height={40}
                  alt="Vercel Logo"
                />
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
            <div className="right flex-[0.5] relative bottom-[-120px] right-[-100px] flex items-end justify-end">
              <Image
                className="w-full h-auto"
                objectFit="contain"
                src="/cards.png"
                width={0}
                height={0}
                alt="Vercel Logo"
                sizes="100vw"
              />
            </div>
          </div>
        </section>

        <section className="boxes container ml-auto mr-auto">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="box p-5 w-full h-[300px] bg-black flex flex-col justify-between">
              <div className="top flex w-full justify-start">
                <div className="square w-[40px] h-[40px] bg-primary mb-5"></div>
              </div>
              <div className="title">
                <h5 className="text-white">
                  We Develope Special IOT Solutions for you
                </h5>
              </div>
              <div className="body">
                <p className="text-white text-sm">
                  Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit,sed
                  diam nonummy nibh euismod tincidunt ut laoreet{" "}
                </p>
              </div>
              <div className="footer flex justify-end">
                <button className="button px-5">Contact Now</button>
              </div>
            </div>
            <div className="box p-5 w-full h-[300px] bg-green flex flex-col justify-between">
              <div className="top flex w-full justify-start">
                <div className="square w-[40px] h-[40px] bg-black mb-5"></div>
              </div>
              <div className="title">
                <h5>We Develope Special IOT Solutions for you</h5>
              </div>
              <div className="body">
                <p className="text-white text-sm">
                  Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit,sed
                  diam nonummy nibh euismod tincidunt ut laoreet{" "}
                </p>
              </div>
              <div className="footer flex justify-end">
                <button className="button bg-gray px-5">Contact Now</button>
              </div>
            </div>
            <div className="box p-5 w-full h-[300px] bg-black flex flex-col justify-between">
              <div className="top flex w-full justify-start">
                <div className="square w-[40px] h-[40px] bg-white mb-5"></div>
              </div>
              <div className="title">
                <h5 className="text-white">
                  We Develope Special IOT Solutions for you
                </h5>
              </div>
              <div className="body">
                <p className="text-white text-sm">
                  Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit,sed
                  diam nonummy nibh euismod tincidunt ut laoreet{" "}
                </p>
              </div>
              <div className="footer flex justify-end">
                <button className="button px-5">Contact Now</button>
              </div>
            </div>
          </div>
        </section>
        <section className="questions container mt-20 ml-auto mr-auto mb-40">
          <div className="title flex items-center space-x-1 mb-10">
            <h1 className="text-green">?</h1>
            <h2>Freaquentlyasked questions</h2>
          </div>
          <div className="body flex flex-col space-x-2">
            {questions.map((item, index) => (
              <div
                key={index}
                className="question-item cursor-pointer border-b border-b-gray flex h-[54px] items-center justify-between"
              >
                <p className="text-sm font-bold">{item.text}</p>
                <Image
                  alt="arrow"
                  className="image"
                  src="/arrow.png"
                  width={18}
                  height={9}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
