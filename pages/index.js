/* eslint-disable jsx-a11y/alt-text */
import react, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [questions, setQuestions] = useState([
    {
      id: 0,
      text: "Getting started with CleanIoT",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      collapsed: false,
    },
    {
      id: 1,
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      text: "About SIM management platform",
      collapsed: false,
    },
    {
      id: 2,
      text: "What data plan should i choose?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      collapsed: false,
    },
    {
      id: 3,
      text: "I would like to buy a large number of SIM cards. Can i get volume discount?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      collapsed: false,
    },
    {
      id: 4,
      text: "How long does it take to activate a SIM card?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      collapsed: false,
    },
    {
      id: 5,
      text: "Which devices are compatible with the SIM cards?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      collapsed: false,
    },
    {
      id: 6,
      text: "IoT SIM models and their functionality",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      collapsed: false,
    },
  ]);

  const changeSelection = (id) => {
    setSelectedQuestion(id);
  };

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
    <div className="home relative">
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
          <div className="text-view text-center lg:text-start top-9 right-0 left-0 absolute lg:top-[50px] lg:left-[50px]">
            <h1 className="font-normal text-2xl md:text-4xl">
              We offer the latest in
            </h1>
            <h1 className="font-normal text-2xl md:text-4xl">
              <strong>IOT SIM Card</strong> Technologly
            </h1>
          </div>
          <div className="actions w-full flex flex-col gap-3 md:gap-0 md:flex-row items-end md:items-center justify-center absolute bottom-4 md:bottom-16 md:space-x-10">
            <button className="w-60 md:text-xl bg-black py-2 text-green px-4 mr-5 md:mr-0">
              Start your journey <strong>Now!</strong>
            </button>
            <button className="w-60 md:text-xl bg-black py-2 text-green text-start px-4 mr-5 md:mr-0">
              Book a <strong>Demo!</strong>
            </button>
          </div>
        </section>
        <section className="lg:p-5 bg-black partners">
          <div className="title">
            <h3 className="text-lg text-white text-center font-bold">
              Our Partners
            </h3>
          </div>
          <div className="body grid grid-cols-6 gap-5 p-5">
            {customers.map((item, index) => (
              <div
                className="customer-item flex items-center justify-center"
                key={index}
              >
                <Image
                  src={`${item.image}`}
                  alt={item.alt}
                  width={120}
                  height={120}
                />
              </div>
            ))}
          </div>
        </section>
        <section className="py-28 bg-white px-5">
          <div className="title max-w-5xl flex mx-auto lg:flex-row flex-col lg:space-x-20">
            <div className="flex-1 relative  flex items-center  justify-center space-x-2 ">
              <h3 className="text-black text-4xl lg:text-[42px] font-normal z-20">
                We offer the latest in <strong>IoT SIM Card</strong> Technology
              </h3>
              <Image
                className="absolute right-0 z-10"
                src="/star2.png"
                width={50}
                height={50}
                alt="star"
              />
            </div>
            <div className="mt-10 lg:mt-0 flex-1 justify-start items-center">
              <p className="text-xl font-light text-black leading-relaxed italic">
                Our SIM cards are designed specifically for IoT devices and
                provide reliable connectivity, security, and flexibility to
                support your business needs.
              </p>
            </div>
          </div>
        </section>
        <section className="card relative container ml-auto mr-auto lg:px-10 lg:pb-10 bg-white">
          <div className="card-content relative z-20 lg:mb-5 bg-black lg:rounded-[60px] w-full flex flex-col lg:flex-row">
            <div className="flex-[0.6] lg:pl-20 lg:py-20 p-5 lg:mx-0 lg:w-full relative">
              <div className="title space-x-2 max-w-lg mx-auto flex-1 lg:mx-0 lg:min-w-full">
                <div className="flex w-full flex-wrap md:flex-nowrap">
                  <Image
                    src="/star.png"
                    width={40}
                    height={40}
                    alt="Vercel Logo"
                    className="self-start"
                  />
                  <h1 className="text-white tracking-wide lg:text-6xl">
                    Start your journey.
                  </h1>
                </div>
                {/* <h1 className="text-white tracking-wide">
                  Start your journey.
                  <span>
                    with this <span>simple</span> step.
                  </span>
                </h1> */}
              </div>
              <h2 className="text-white mt-5 mb-20 lg:text-6xl font-normal lg:flex-nowrap max-w-lg xl:max-w-xl mx-auto lg:mx-0 lg:w-full">
                with this <span className="font-bold">simple</span> step.
              </h2>
              <div className="slidecontainer max-w-lg mx-auto lg:mx-0 lg:pr-36 lg:w-full">
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
                  <button className="button px-20 w-full">Order Now!</button>
                </div>
              </div>
            </div>
            <div className="lg:absolute xl:scale-[140%] max-w-xl mx-auto lg:mx-0 lg:w-full -bottom-14 top-28 xl:top-40 -right-8 xl:right-9">
              <Image
                className="w-full h-auto"
                objectFit="contain"
                src="/cards.png"
                width={0}
                height={0}
                alt="Vercel Logo"
                sizes="240vw"
              />
            </div>
          </div>
        </section>

        <section className="boxes relative container ml-auto mr-auto lg:p-10 lg:py-36 bg-white">
          <div className="absolute mt-28 sm:mt-20 z-0 lg:ml-72 lg:-top-[360px] ">
            <Image
              className="w-full h-auto lg:ml-16"
              objectFit="contain"
              src="/Rectangle.svg"
              width={0}
              height={0}
              alt="Vercel Logo"
              sizes="500vw"
            />
          </div>
          <div className="grid grid-cols-1 sm:gap-3 md:gap-6 lg:gap-10 sm:px-3 md:px-10 relative z-0 sm:grid-cols-2 lg:grid-cols-3">
            <div className="box p-5 pt-7 lg:max-w-[342px] w-full bg-black flex flex-col justify-start">
              <div className="top flex w-full pb-7 justify-start">
                <Image
                  className="w-28 h-auto"
                  objectFit="contain"
                  src={"/card-icons-green.svg"}
                  width={0}
                  height={0}
                  alt="Vercel Logo"
                  sizes="240vw"
                />
              </div>
              <div className="title pr-32 mb-5 flex-1">
                <h5 className="text-white text-2xl">
                  We Develope Special IOT Solutions for you
                </h5>
              </div>
              <div className="body">
                <p className="text-white text-base italic pr-4 flex-1 mb-14">
                  Our team of experts can develop customised IOT solution to
                  meet your specific business needs and requirements.
                </p>
              </div>
              <div className="footer flex justify-end w-full">
                <Link
                  href={"/contact"}
                  className="button px-5 w-full sm:w-auto"
                >
                  Contact <strong>Now!</strong>
                </Link>
              </div>
            </div>
            <div className="box p-5 pt-7 lg:max-w-[342px] w-full bg-green flex flex-col justify-start">
              <div className="top flex w-full pb-7 justify-start">
                <Image
                  className="w-28 h-auto"
                  objectFit="contain"
                  src={"/card-icons-black.svg"}
                  width={0}
                  height={0}
                  alt="Vercel Logo"
                  sizes="240vw"
                />
              </div>
              <div className="title pr-16 mb-5 sm:flex-1 xl:flex-none">
                <h5 className="text-2xl">
                  Tailored IOT Solutions: Optimized for performance & security
                </h5>
              </div>
              <div className="body flex-1">
                <p className="text-black text-base italic pr-3 mb-14">
                  From concept to deployment, we work closely with your IOT
                  solution is optimized for performance, security and
                  scalability.
                </p>
              </div>
              <div className="footer flex justify-end justify-self-start self-end md:mr-auto w-full">
                <Link
                  href={"/contact"}
                  className="button-black px-5 w-full sm:w-auto"
                >
                  Contact <strong>Now!</strong>
                </Link>
              </div>
            </div>
            <div className="description px-10 lg:px-0 lg:pr-20 py-16 sm:py-24 lg:py-0 order-first lg:order-last sm:col-span-2 lg:col-span-1">
              <h4 className="text-black text-3xl text-center lg:text-start font-normal">
                At CleanIoT we sight to offer you the best tailored solution for
                your need
              </h4>
            </div>
          </div>
        </section>
        <section className="video">
          <Image
            className="w-full h-auto max-h-[610px] overflow-hidden object-cover"
            src="/video.png"
            width={0}
            height={0}
            alt="Vercel Logo"
            sizes="100vw"
          />
        </section>

        <section className="lg:p-5 bg-black partners">
          <div className="title">
            <h3 className="text-lg text-white text-center font-bold">
              Happy Customers
            </h3>
          </div>
          <div className="body grid grid-cols-6 gap-5 p-5">
            {customers.map((item, index) => (
              <div
                className="customer-item flex items-center justify-center"
                key={index}
              >
                <Image
                  src={`${item.image}`}
                  alt={item.alt}
                  width={120}
                  height={120}
                />
              </div>
            ))}
          </div>
        </section>
        <section className="questions container ml-auto mr-auto bg-white p-5 lg:px-10 lg:py-20">
          <div className="title flex items-start flex-col space-y-2 mb-10">
            <h2>General FAQs</h2>
            <p>
              Everything you need to know about the product and how it works.
              Can’t find an as answer? Please contact our friendly team.
            </p>
          </div>
          <div className="body flex flex-col space-y-2">
            {questions.map((item, index) => (
              <div
                key={index}
                className="question-item cursor-pointer border-b border-b-gray flex-col flex"
              >
                <div
                  onClick={() => changeSelection(index)}
                  className="flex w-full justify-between items-center h-[52px]"
                >
                  <p className="text-sm font-bold">{item.text}</p>
                  {index !== selectedQuestion ? (
                    <Image
                      alt="arrow"
                      className="image"
                      src="/arrow.png"
                      width={18}
                      height={9}
                    />
                  ) : (
                    <Image
                      alt="arrow"
                      className="image transform rotate-180"
                      src="/arrow.png"
                      width={18}
                      height={9}
                    />
                  )}
                </div>
                {index === selectedQuestion && (
                  <div className="collapse-description p-5">
                    <p className="text-sm font-light text-black">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
