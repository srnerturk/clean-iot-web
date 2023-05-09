import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HappyCustomersSlider from "../components/HappyCustomersSlider";

export default function Portal() {
  const [listItems, setListItems] = useState([
    {
      id: 1,
      title: "High-speed connectivity",
      description:
        "Our IoT SIM card technology offers fast and reliable cellular connectivity to power your IoT devices.",
      image: "/listImage1.png",
    },
    {
      id: 2,
      title: "Global coverage",
      description:
        "Our SIM cards provide global coverage, allowing you to connect your devices to the internet from anywhere in the world.",
      image: "/listImage2.png",
    },
    {
      id: 3,
      title: "Robust security",
      description:
        "We prioritize the security of your IoT network and offer end-to-end encryption and secure data transfer to protect your sensitive information.",
      image: "/listImage3.png",
    },
    {
      id: 4,
      title: "Easy integration",
      description:
        "Our SIM cards are designed to work seamlessly with your IoT devices and can be easily integrated with your existing network infrastructure.",
      image: "/listImage4.png",
    },
    {
      id: 5,
      title: "Flexible plans",
      description:
        "We offer a variety of flexible plans to meet your IoT connectivity needs, whether you require high bandwidth or low-cost connectivity.",
      image: "/listImage5.png",
    },
    {
      id: 6,
      title: "Real-time monitoring",
      description:
        "Our platform provides real-time monitoring and reporting, giving you full visibility into your IoT network and the ability to quickly troubleshoot any issues.",
      image: "/listImage6.png",
    },
    {
      id: 7,
      title: "Scalability",
      description:
        "Our IoT SIM cards and platform are designed to scale with your business needs, allowing you to easily add or remove devices as your requirements change.",
      image: "/listImage7.png",
    },
    {
      id: 8,
      title: "Reliable and secure connectivity",
      description:
        "Our IoT SIM cards provide reliable and secure connectivity for your IoT devices, ensuring that your data remains safe and accessible at all times.",
      image: "/listImage8.png",
    },
    {
      id: 9,
      title: "Flexibility and versatility",
      description:
        "We offer a range of IoT SIM card types and configurations to meet your specific business needs, providing flexibility and versatility for your IoT solutions.",
      image: "/listImage9.png",
    },
    {
      id: 10,
      title: "Powerful IoT management",
      description:
        "Our easy-to-use IoT management portal allows you to monitor and manage your SIM cards and devices in real-time, ensuring that everything is functioning as it should be.",
      image: "/listImage10.png",
    },
    {
      id: 11,
      title: "Easy-to-use web portal",
      description:
        "Our IoT SIM cards are designed to be easy to install and use, allowing you to quickly and easily connect your devices to the internet and start collecting and analyzing data.",
      image: "/listImage11.png",
    },
    {
      id: 12,
      title: "Tailored data plans",
      description: "",
      image: "/listImage12.png",
    },
    {
      id: 13,
      title: "Multiple IoT device compatibility",
      description:
        "Our IoT SIM cards are designed to work with a wide range of IoT devices, including those that require a larger form factor or those that are smaller and more compact",
      image: "/listImage13.png",
    },
    {
      id: 14,
      title: "High-speed data transfer",
      description:
        "M2M IoT SIM cards are designed to offer fast data transfer speeds, ensuring that you can quickly collect and analyze data in real-time.",
      image: "/listImage14.png",
    },
  ]);

  return (
    <div className="container bg-white mx-auto text-black">
      <h2 className="py-10 md:pb-0 md:pt-10 pl-5 font-normal">
        <strong>Poweful,</strong>
        <br /> easy-to-use
      </h2>
      <div className="relative mx-auto max-w-4xl">
        <div className="relative px-10">
          <Image
            className="ml-10 mx-auto px-10 lg:px-20 z-20 relative pb-14"
            src="/web1.png"
            width={850}
            height={400}
            alt="Vercel Logo"
          />
          <Image
            className="absolute z-0 top-10 lg:top-14 right-10 lg:right-20 mx-auto px-20 pb-14"
            src="/web2.png"
            width={850}
            height={400}
            alt="Vercel Logo"
          />
        </div>
      </div>
      <div className="max-w-xl mx-auto mt-20 px-5 xl:px-0">
        <p className="italic font-thin text-lg mb-7">
          Our IoT SIM card products are designed to be powerful and easy-to-use,
          offering reliable and secure connectivity for your IoT devices.
        </p>
        <div className="flex flex-col sm:flex-row justify-between mx-auto max-w-lg mt-3 mb-24 gap-5">
          <button className="bg-[#404041] font-semibold text-center sm:text-end text-lg px-6 py-2 w-full text-white shadow-lg shadow-slate-300">
            Datasheet
          </button>
          <Link
            href={"/contact"}
            className="bg-green py-2 text-center sm:text-end text-lg px-6 w-full font-normal shadow-lg shadow-slate-300"
          >
            Book a <strong>DEMO!</strong>
          </Link>
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
      <div className="container relative bg-white">
        <Image
          alt=""
          className="absolute bottom-0 z-0"
          src={"/listBgImage.png"}
          height={500}
          width={500}
        />

        <div className="max-w-5xl relative mx-auto z-10">
          <div className="px-5 xl:px-0 pb-10 md:pb-24">
            <h2 className="text-4xl font-normal ">
              <strong>Key</strong> features
            </h2>
            <p className="md:w-80 font-thin italic">
              Our IoT sim cards enables seamless device connectivity, real-time
              data collection, and automation for improved efficiency.
            </p>
          </div>

          <div className="px-5 pb-28">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-x-28 gap-y-12">
              {listItems.map((item, index) =>
                item.description !== "" ? (
                  <li
                    key={index}
                    className="flex flex-col justify-evenly md:flex-row gap-3 sm:last:col-start-2"
                  >
                    <div className="h-32 md:basis-2/5">
                      <Image
                        className="h-full w-auto overflow-hidden object-cover"
                        src={item.image}
                        width={0}
                        height={0}
                        alt="Vercel Logo"
                        sizes="100vw"
                      />
                    </div>
                    {/* <Image src={item.image} width={50} height={50} /> */}
                    <div className="basis-3/5 flex flex-col justify-center">
                      <h4 className="font-bold text-lg">{item.title}:</h4>
                      <p className="font-thin italic">{item.description}</p>
                    </div>
                  </li>
                ) : null
              )}
            </ul>
          </div>
        </div>
      </div>

      <HappyCustomersSlider />
    </div>
  );
}
