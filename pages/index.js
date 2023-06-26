/* eslint-disable jsx-a11y/alt-text */
import react, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Vimeo from "@u-wave/react-vimeo";

import HappyCustomersSlider from "../components/HappyCustomersSlider";

export default function Home({ prices }) {
  // FOR FAQ
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [questions, setQuestions] = useState([
    {
      id: 0,
      text: "Getting started with CleanIoT",
      isAnswerComplex: false,
      answer: [
        {
          type: "text",
          content:
            "Welcome to CleanIOT! We are thrilled to have you onboard and look forward to helping you harness the power of our advanced IoT SIM card technology. To get started with CleanIOT, follow these simple steps:",
        },
        {
          type: "list",
          content: [
            "Choose Your Plan: First, select the best-suited plan for your IoT needs from our range of flexible and cost-effective pricing options. Visit our Pricing page on our website to review the available plans and their features.",
            "Order Your SIM Cards: Once you have chosen a plan, order the required number of IoT SIM cards from our online store. We will promptly ship the SIM cards to your specified address.",
            'Activate Your SIM Cards: After receiving your CleanIOT SIM cards, you need to activate them. To do so, log in to the CleanIOT Management Platform using the credentials provided in your welcome email. Once logged in, navigate to the "SIM Management" section and follow the instructions to activate your SIM cards.',
            "Insert the SIM Cards: Install the CleanIOT SIM cards into your IoT devices, making sure they are properly seated and securely fastened.",
            "Configure Your Devices: Depending on your device type and application, you may need to configure the network settings to ensure seamless connectivity. Refer to your device's user manual or consult with our customer support team for guidance on device configuration.",
            "Monitor and Manage Your IoT Network: With your SIM cards activated and devices configured, you can now monitor and manage your IoT network through the CleanIOT Management Platform. This user-friendly interface allows you to track device usage, set data limits, remotely control devices, and more.",
            "Get Support: If you need assistance at any stage of the process, our dedicated customer support team is available 24/7 to help you with any questions or concerns. You can reach us via phone, email, or live chat.",
          ],
        },
      ],

      collapsed: false,
    },
    {
      id: 1,
      text: "About SIM management platform",
      isAnswerComplex: false,
      answer: [
        {
          type: "text",
          content:
            "Our SIM Management Platform is a comprehensive, user-friendly web-based tool that allows you to efficiently manage and monitor your IoT SIM cards and connected devices. With its intuitive interface and powerful features, the platform simplifies the process of managing your IoT ecosystem while providing you with valuable insights.",
        },
        {
          type: "text",
          content: "Key Features of the SIM Management Platform:",
        },
        {
          type: "list",
          content: [
            "Centralized Dashboard: The platform offers a centralized dashboard that provides a holistic view of your IoT SIM cards and devices, giving you real-time information on their status, connectivity, and usage.",
            "Remote SIM Activation and Deactivation: Easily activate or deactivate IoT SIM cards remotely without the need for physical intervention. This feature allows for quick deployment and decommissioning of devices as needed.",
            "Usage Monitoring and Reporting: Track your IoT SIM cards' data usage and generate customizable reports, enabling you to analyze usage patterns, optimize your data plans, and avoid unexpected costs.",
            "Group Management: Organize your IoT SIM cards and devices into groups based on criteria like location, function, or ownership. This feature allows for easier management and monitoring of your IoT infrastructure.",
            "Security Management: Our SIM Management Platform includes advanced security features that help you protect your IoT SIM cards and devices. Configure and manage encryption and authentication settings to ensure data integrity and confidentiality.",
            "Customer Support: Our dedicated support team is available 24/7 to assist you with any questions or issues you may encounter while using the SIM Management Platform.",
          ],
        },
        {
          type: "text",
          content:
            "In summary, the SIM Management Platform is designed to provide you with unparalleled control over your IoT SIM cards and connected devices. By leveraging its powerful features and intuitive interface, you can streamline your IoT management tasks and make more informed decisions about your IoT infrastructure.",
        },
      ],

      collapsed: false,
    },
    {
      id: 2,
      text: "What data plan should i choose?",
      isAnswerComplex: false,
      answer: [
        {
          type: "text",
          content:
            "Selecting the right data plan for your IoT SIM cards depends on various factors, such as your connectivity requirements, the number of devices, and the specific use case. To determine the most suitable data plan for your needs, consider the following aspects:",
        },
        {
          type: "text",
          content:
            "Data Usage: Estimate the average data usage per device per month. This can be based on the device's specific functions and the frequency of data transmission. If you are unsure about the exact data requirements, it is advisable to start with a lower-tier plan and monitor your usage patterns to make adjustments as needed.",
        },
        {
          type: "text",
          content:
            "Number of Devices: The total number of devices you plan to connect will influence your data plan choice. Larger networks may benefit from higher-tier plans or customized enterprise solutions that cater to the specific needs of your IoT ecosystem.",
        },
        {
          type: "text",
          content:
            "By considering these factors and evaluating your specific IoT connectivity requirements, you can make an informed decision when choosing the most suitable data plan for your IoT SIM cards. It's essential to strike the right balance between cost and performance, ensuring that you get the best value for your investment.",
        },
      ],
      collapsed: false,
    },
    {
      id: 3,
      text: "I would like to buy a large number of SIM cards. Can i get volume discount?",
      isAnswerComplex: false,
      answer: [
        {
          type: "text",
          content:
            "Yes, at CleanIOT, we understand the importance of providing cost-effective solutions for businesses looking to deploy a large number of IoT SIM cards. We offer volume discounts to cater to your needs and ensure you receive the best value for your investment.",
        },
        {
          type: "text",
          content:
            "Our pricing structure is designed to be flexible and transparent, allowing you to take advantage of reduced rates as your IoT SIM card requirements grow. The more SIM cards you purchase, the greater the discount you can benefit from.",
        },
        {
          type: "text",
          content:
            "To discuss your specific requirements and receive a personalized quote, please reach out to our sales team. They will be more than happy to help you determine the optimal package for your business and provide you with a tailored pricing plan that reflects the volume discount.",
        },
        {
          type: "text",
          content:
            "You can contact our sales team via email, phone, or the live chat feature on our website. They are available to assist you with any questions or concerns you may have and guide you through the process of purchasing your IoT SIM cards with volume discounts.",
        },
      ],
      collapsed: false,
    },
    {
      id: 4,
      text: "How long does it take to activate a SIM card?",
      isAnswerComplex: false,
      answer: [
        {
          type: "text",
          content:
            "Activating a CleanIOT SIM card is a quick and straightforward process. Once you have received your IoT SIM card and inserted it into your device, the activation process typically takes only a few minutes. However, in some cases, it may take up to 24 hours for the SIM card to be fully activated and operational.",
        },
        {
          type: "text",
          content:
            "To ensure a smooth activation process, please follow these steps:",
        },
        {
          type: "list",
          content: [
            "Insert the CleanIOT SIM card into your IoT device according to the manufacturer's instructions.",
            "Power on your device and ensure it is in an area with adequate network coverage.",
            "Log in to the CleanIOT SIM Management Platform using your account credentials.",
            'Locate the SIM card in question on the platform, and click the "Activate" button.',
            "The platform will confirm the activation process has started, and you will receive a notification once the SIM card is successfully activated.",
          ],
        },
        {
          type: "text",
          content:
            "Please note that the actual activation time may vary depending on factors such as network conditions and device compatibility. If you encounter any issues during the activation process or your SIM card has not been activated within 24 hours, please contact our customer support team for further assistance. Our dedicated experts are available 24/7 to help you resolve any issues and ensure a seamless activation experience.",
        },
      ],
      collapsed: false,
    },
    {
      id: 5,
      text: "Which devices are compatible with the SIM cards?",
      isAnswerComplex: false,
      answer: [
        {
          type: "text",
          content:
            "CleanIOT's IoT SIM cards are designed with versatility in mind, ensuring compatibility with a wide range of devices across various industries and applications. Our SIM cards can be used in any device that supports cellular connectivity and complies with the relevant IoT communication standards.",
        },
        {
          type: "text",
          content: "Some examples of compatible devices include:",
        },
        {
          type: "list",
          content: [
            "Smart meters and sensors for monitoring energy consumption, environmental conditions, and infrastructure health.",
            "Fleet management and vehicle tracking systems, such as GPS trackers and telematics devices.",
            "Security and surveillance equipment, including CCTV cameras and alarm systems.",
            "Industrial automation and control systems used in manufacturing, agriculture, and logistics.",
            "Wearable devices, such as smartwatches and fitness trackers, for health monitoring and tracking purposes.",
            "Smart home and building automation devices, including thermostats, lighting systems, and access control systems.",
            "Retail and payment systems, like POS terminals, vending machines, and digital signage.",
          ],
        },
        {
          type: "text",
          content:
            "It is important to note that the specific compatibility of CleanIOT's IoT SIM cards may depend on factors like network coverage, device specifications, and cellular frequency bands supported by the device. To ensure seamless integration and optimal performance, we recommend verifying these details with your device manufacturer or consulting our customer support team for guidance.",
        },
      ],
      collapsed: false,
    },
    {
      id: 6,
      text: "IoT SIM models and their functionality",
      isAnswerComplex: true,
      answer: [
        {
          type: "text",
          content:
            "At CleanIOT, we offer a range of IoT SIM card models to cater to various applications and connectivity requirements. Each model is designed to provide seamless connectivity, robust security, and easy management to suit your specific needs. Below is an overview of our IoT SIM models and their unique functionalities.",
        },
      ],
      complexAnswer: [
        {
          listTitle: "Basic IoT SIM:",
          content: [
            {
              listContent: [
                {
                  type: "text",
                  content:
                    "Our Basic IoT SIM card is designed for low-data usage applications, such as asset tracking, smart metering, and environmental monitoring. This SIM card model provides cost-effective connectivity for devices that transmit small amounts of data infrequently.",
                },
                {
                  type: "text",
                  content: "Functionality:",
                },
                {
                  type: "list",
                  content: [
                    "-	Low data usage plans",
                    "-	Global connectivity with multiple network providers",
                    "-	Basic security features",
                  ],
                },
              ],
            },
          ],
        },
        {
          listTitle: "Advanced IoT SIM:",
          content: [
            {
              listContent: [
                {
                  type: "text",
                  content:
                    "The Advanced IoT SIM card is tailored for applications that require higher data usage and more frequent connectivity, such as video surveillance, connected vehicles, and industrial automation. This model offers enhanced performance and additional security features to handle more data-intensive applications.",
                },
                {
                  type: "text",
                  content: "Functionality:",
                },
                {
                  type: "list",
                  content: [
                    "-	High data usage plans",
                    "-	Faster connectivity with priority network access",
                    "-	Advanced security features, including encryption and authentication",
                    "-	Remote management and monitoring capabilities",
                  ],
                },
              ],
            },
          ],
        },
        {
          listTitle: "Multi-Network IoT SIM:",
          content: [
            {
              listContent: [
                {
                  type: "text",
                  content:
                    "Our Multi-Network IoT SIM card is designed to provide seamless connectivity across multiple networks, ensuring uninterrupted communication even in areas with limited coverage. This model is ideal for mission-critical applications that demand high reliability and availability, such as emergency response, healthcare, and transportation.",
                },
                {
                  type: "text",
                  content: "Functionality:",
                },
                {
                  type: "list",
                  content: [
                    "-	Seamless switching between multiple networks for optimal coverage",
                    "-	High data usage plans",
                    "-	Advanced security features",
                    "-	Remote management and monitoring capabilities",
                    "-	Priority customer support",
                  ],
                },
              ],
            },
          ],
        },
        {
          listTitle: "eSIM (Embedded SIM):",
          content: [
            {
              listContent: [
                {
                  type: "text",
                  content:
                    "The eSIM (Embedded SIM) is a next-generation IoT SIM card that is integrated directly into your IoT devices. This model offers all the features of our other IoT SIM cards but eliminates the need for a physical SIM card, providing greater flexibility and durability.",
                },
                {
                  type: "text",
                  content: "Functionality:",
                },
                {
                  type: "list",
                  content: [
                    "-	Embedded within the device for increased durability and ease of use",
                    "-	Global connectivity with multiple network providers",
                    "-	High data usage plans",
                    "-	Advanced security features",
                    "-	Remote management and monitoring capabilities",
                  ],
                },
                {
                  type: "text",
                  content:
                    "By offering a diverse range of IoT SIM card models, CleanIOT ensures that you can find the perfect solution to meet your specific connectivity, security, and management requirements. With our cutting-edge IoT SIM cards, you can unlock the full potential of your IoT ecosystem while enjoying a seamless and secure user experience.",
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  // FOR PRICING CARD
  const [quantity, setQuantity] = useState(10);
  const [whichDataPlan, setWhichDataPlan] = useState(1);

  const [totalPrice, setTotalPrice] = useState(0);

  const [editableInput, setEditableInput] = useState(false);

  // console.log(String(size).trim().length);
  useEffect(() => {
    // calculate total price
    if (prices[whichDataPlan].unit === "-IOT") {
      setTotalPrice(parseFloat(quantity * 2.95).toFixed(2));
    } else {
      setTotalPrice(
        (quantity * parseFloat(prices[whichDataPlan].price)).toFixed(2)
      );
    }
  }, [quantity, whichDataPlan]);

  useEffect(() => {
    // console.log(typeof String(totalPrice).split(".")[1]);
    if (totalPrice !== undefined) {
      if (
        String(totalPrice).split(".")[1] !== undefined &&
        String(totalPrice).split(".")[1].length > 3
      ) {
        console.log("HELELOYA");
        setTotalPrice(() => (totalPrice * 100).toFixed(0));
      }
    }
  }, [quantity, whichDataPlan]);

  useEffect(() => {
    if (editableInput) {
      setTimeout(() => {
        setEditableInput(false);
      }, 2000);
    }
  }, [quantity]);

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
            <Link href={"/contact"} legacyBehavior>
              <a className="w-60 md:text-xl bg-black py-2 text-green px-4 mr-5 md:mr-0">
                Start your journey <strong>Now!</strong>
              </a>
            </Link>
            <button className="w-60 md:text-xl bg-black py-2 text-green text-start px-4 mr-5 md:mr-0">
              Book a <strong>Demo!</strong>
            </button>
          </div>
        </section>
        <HappyCustomersSlider />
        <section className="py-28 bg-white px-5">
          <Image
            className="absolute"
            src="/allStars.png"
            width={1080}
            height={800}
            alt="star"
          />
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
          <Image
            className="absolute right-0"
            src="/allStars.png"
            width={1080}
            height={900}
            alt="star"
          />
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
              </div>
              <h2 className="text-white mt-5 mb-20 lg:text-6xl font-normal lg:flex-nowrap max-w-lg xl:max-w-xl mx-auto lg:mx-0 lg:w-full">
                with this <span className="font-bold">simple</span> step.
              </h2>
              <div className="slidecontainer max-w-lg mx-auto lg:mx-0 lg:pr-36 lg:w-full cursor-default">
                <div className="input">
                  <h3 className="text-white mb-2">Quantity</h3>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    className="slider w-full mb-4 bg-white appearance-none h-2"
                    id="myRange"
                    value={quantity}
                    step={5}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <h3 className="text-white my-2">Data Plan</h3>
                  <input
                    type="range"
                    min={0}
                    max={prices.length - 1}
                    className="slider w-full bg-white appearance-none h-2"
                    id="myRange"
                    value={whichDataPlan}
                    step={1}
                    onChange={(e) => setWhichDataPlan(e.target.value)}
                  />
                </div>
                <div className="values mt-10 w-full flex justify-between">
                  {editableInput ? (
                    <div>
                      <input
                        type="number"
                        className="w-20 text-white text-xl bg-transparent border-b-2 border-white"
                        value={quantity}
                        onChange={(e) => {
                          setQuantity(e.target.value);
                          if (
                            quantity !== "" &&
                            String(totalPrice).split(".")[1].length > 3
                          ) {
                            setTotalPrice(() => (totalPrice * 100).toFixed(0));
                          }
                        }}
                      />
                      <strong>QTY</strong>
                    </div>
                  ) : (
                    <p
                      onClick={() => setEditableInput(true)}
                      className="text-white text-xl"
                    >
                      {quantity} <strong>QTY</strong>
                    </p>
                  )}
                  <p className="text-white text-xl">
                    {prices[whichDataPlan].value}{" "}
                    <strong>{prices[whichDataPlan].unit}</strong>
                  </p>
                  <p className="text-white text-xl">
                    ${totalPrice} <strong>TOTAL</strong>
                  </p>
                </div>
                <div className="actions mt-2">
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
          <Image
            className="absolute"
            src="/allStars.png"
            width={580}
            height={300}
            alt="star"
          />
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
                  We Develop Special IOT Solutions for you
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
        {/* <section className="pl-[56.25%] relative">
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/838959993"
            width="640"
            height="360"
            frameborder="0"
            allowfullscreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            // style="position:absolute;top:0;left:0;width:100%;height:100%;"
          ></iframe>
        </section> */}
        <section className="z-[99] bg-white w-full flex justify-center">
          <Vimeo
            style={{
              zIndex: 99,
            }}
            video="838959993"
            autoplay
            loop
            width={
              windowWidth > 1080
                ? 1080
                : windowWidth > 1020
                ? 1020
                : windowWidth > 768
                ? 768
                : windowWidth > 540
                ? 540
                : windowWidth > 480
                ? 480
                : windowWidth > 360
                ? 360
                : windowWidth > 320
                ? 320
                : 280
            }
            height={
              windowWidth > 1080
                ? 608
                : windowWidth > 1020
                ? 574
                : windowWidth > 768
                ? 432
                : windowWidth > 540
                ? 360
                : windowWidth > 480
                ? 320
                : windowWidth > 360
                ? 240
                : windowWidth > 320
                ? 200
                : 180
            }
            muted={false}
            showPortrait
            background={true}
            controls={false}
          />
        </section>
        {/* <div style="padding:56.25% 0 0 0;position:relative;">
          <iframe
            src="https://player.vimeo.com/video/838959993?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            style="position:absolute;top:0;left:0;width:100%;height:100%;"
            title="Comp 1"
          ></iframe>
        </div> */}
        <HappyCustomersSlider />
        <section className="questions container ml-auto mr-auto bg-white p-5 lg:px-10 lg:py-20">
          <div className="title flex items-start flex-col space-y-2 mb-10">
            <h2>General FAQs</h2>
            <p>
              Everything you need to know about the product and how it works.
              Can’t find an as answer? Please contact our friendly team.
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <Image
              className="absolute z-0"
              src="/allStars.png"
              width={970}
              height={900}
              alt="star"
            />
            {questions.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer border-b border-b-gray z-10"
              >
                <div
                  onClick={() => {
                    if (index === selectedQuestion) {
                      return setSelectedQuestion(null);
                    } else {
                      setSelectedQuestion(index);
                    }
                  }}
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
                {index === selectedQuestion ? (
                  item.isAnswerComplex ? (
                    <>
                      {item.answer.map((answer, index) => (
                        <div
                          key={index}
                          className="collapse-description px-5 pb-5"
                        >
                          {answer.type === "text" ? (
                            <p className="text-sm font-light text-black mt-3">
                              {answer.content}
                            </p>
                          ) : null}
                        </div>
                      ))}
                      <ul
                        key={index}
                        className="collapse-description list-decimal list-inside px-5 pb-5 mt-3"
                      >
                        {item.complexAnswer.map((answer, index) => (
                          <div key={index}>
                            <li className="text-black">{answer.listTitle}</li>
                            {answer.content[0].listContent.map((item, index) =>
                              item.type === "text" ? (
                                <p
                                  key={index}
                                  className="pl-3 text-sm font-light text-black mt-3"
                                >
                                  {item.content}
                                </p>
                              ) : item.type === "list" ? (
                                <>
                                  <ul className="list-inside mb-3">
                                    {item.content.map((listItem, index) => (
                                      <li
                                        key={index}
                                        className="pl-3 list-item text-sm font-light text-black mt-2"
                                      >
                                        {listItem}
                                      </li>
                                    ))}
                                  </ul>
                                </>
                              ) : null
                            )}
                          </div>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <>
                      {item.answer.map((answer, index) => (
                        <div
                          key={index}
                          className="collapse-description px-5 pb-5 pt-3"
                        >
                          {answer.type === "text" ? (
                            <p className="text-sm font-light text-black">
                              {answer.content}
                            </p>
                          ) : answer.type === "list" ? (
                            <>
                              <ul className="list-decimal list-inside">
                                {answer.content.map((item, index) => (
                                  <li
                                    key={index}
                                    className="list-item text-sm font-light text-black mt-2"
                                  >
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </>
                          ) : null}
                        </div>
                      ))}
                    </>
                  )
                ) : null}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
