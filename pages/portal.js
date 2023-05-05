import Image from "next/image";
import { useState } from "react";

export default function Portal() {
  const [listItems, setListItems] = useState([
    {
      id: 1,
      title: "High-speed connectivity",
      description: "",
      image: "",
    },
    {
      id: 2,
      title: "Global coverage",
      description: "",
      image: "",
    },
    {
      id: 3,
      title: "Robust security",
      description: "",
      image: "",
    },
    {
      id: 4,
      title: "Easy integration",
      description: "",
      image: "",
    },
    {
      id: 5,
      title: "Flexible plans",
      description: "",
      image: "",
    },
    {
      id: 6,
      title: "Real-time monitoring",
      description: "",
      image: "",
    },
    {
      id: 7,
      title: "Scalability",
      description: "",
      image: "",
    },
    {
      id: 8,
      title: "Reliable and secure connectivity",
      description: "",
      image: "",
    },
    {
      id: 9,
      title: "Flexibility and versatility",
      description: "",
      image: "",
    },
    {
      id: 10,
      title: "Powerful IoT management",
      description: "",
      image: "",
    },
    {
      id: 11,
      title: "Easy-to-use web portal",
      description: "",
      image: "",
    },
    {
      id: 12,
      title: "Tailored data plans",
      description: "",
      image: "",
    },
    {
      id: 13,
      title: "Multiple IoT device compatibility",
      description: "",
      image: "",
    },
    {
      id: 14,
      title: "High-speed data transfer",
      description: "",
      image: "",
    },
  ]);

  return (
    <div className="container bg-white mx-auto text-black">
      <h2 className="py-10 pl-5 font-normal">
        <strong>Poweful,</strong>
        <br /> easy-to-use
      </h2>
      <div className="relative mx-auto max-w-4xl">
        <div className="relative px-10">
          <Image
            className="ml-10 pb-14"
            src="/web1.png"
            width={850}
            height={400}
            alt="Vercel Logo"
          />
          <Image
            className="absolute top-10 right-10"
            src="/web2.png"
            width={850}
            height={400}
            alt="Vercel Logo"
          />
        </div>
      </div>
      <div className="max-w-xl mx-auto mt-20">
        <p className="italic font-thin text-lg mb-7">
          Our IoT SIM card products are designed to be powerful and easy-to-use,
          offering reliable and secure connectivity for your IoT devices.
        </p>
        <div className="flex justify-between mx-auto max-w-lg mt-3 mb-24 gap-5">
          <button className="bg-[#404041] font-semibold text-end text-lg px-6 py-2 w-full text-white shadow-lg shadow-slate-600">
            Datasheet
          </button>
          <button className="bg-green py-2 text-end text-lg px-6 w-full font-normal shadow-lg shadow-slate-600">
            Book a <strong>DEMO!</strong>
          </button>
        </div>
        <div className="w-full border-b-2 mx-auto max-w-[545px] border-black mb-11"></div>
        <div className="flex flex-col md:flex-row md:justify-between px-4 md:px-2 lg:px-0 mt-6">
          <h3 className="text-3xl mt-3 md:mt-0 md:basis-2/5">
            <strong>Key</strong> features
            <br /> fast review
          </h3>
          <p className="font-thin italic text-base md:basis-3/5">
            Here are some of the key features of our IoT SIM card products:
          </p>
        </div>
        <div className="mb-24">
          <ul className="list-outside flex flex-wrap grid-cols-1 md:grid-cols-2 mt-10">
            {listItems.map((item) => (
              <li
                key={item.id}
                className="flex flex-col mb-3 justify-between w-1/2"
              >
                <h4 className="font-semibold">- {item.title}</h4>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <section className="top w-full h-auto relative">
        <div className="container mx-auto bg-white px-5 lg:px-10">
          <div className="pb-0 lg:pb-24 pt-11 flex flex-col max-w-[55rem] mx-auto lg:flex-row lg:gap-6 items-center lg:items-stretch lg:justify-between">
            <div className="flex-1 mb-5 lg:mr-3 lg:basis-7/12">
              <p className="text-lg lg:text-xl lg:mb-24 font-light leading-relaxed">
                From enhancing operational efficiency to improving customer
                experience and increasing revenue, there are countless ways in
                which IoT can benefit businesses across a wide range of
                industries. Our team can help you identify the areas in which
                IoT can have the greatest impact on your business and develop
                solutions that are tailored to your specific needs.
              </p>
              <p className="text-lg lg:text-xl mb-1 font-light leading-relaxed">
                Whether you&apos;re looking to implement IoT solutions for the
                first time or you&apos;re looking to upgrade your existing
                infrastructure, contact us today to learn more about our IoT
                solutions and how they can help you achieve your business goals.
              </p>
            </div>
            <div className="box mb-5 p-5 w-full lg:basis-1/4 bg-black flex flex-col lg:justify-start flex-1">
              <div className="top flex w-full justify-start mb-3 lg:mb-4">
                <Image alt="qr" src="/qr.svg" width={50} height={50} />
              </div>
              <h5 className="text-white mb-2 lg:mb-3 lg:text-2xl lg:mr-8 font-normal">
                <strong>Explore</strong> ways to achieve your business{" "}
                <strong>goals</strong>
              </h5>

              <p className="text-white text-lg leading-6 font-thin italic flex-1">
                Discover the many ways in which IoT can benefit your business
                and optimize your operations. Our team of experts can help you
                explore customized IoT solutions to achieve your specific
                business goals.
              </p>

              <div className="footer flex justify-end mt-5">
                <button className="py-1 w-full md:w-auto font-normal bg-green text-black px-5 lg:text-xl">
                  Contact <strong>Now!</strong>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>TEXT_INFO</div>
      <div>KEY_FEATURES</div>
    </div>
  );
}
