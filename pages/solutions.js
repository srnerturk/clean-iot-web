/* eslint-disable jsx-a11y/alt-text */
import react, { useEffect, useState } from "react";
import Image from "next/image";

import HappyCustomersSlider from "../components/HappyCustomersSlider";

export default function Iot() {
  const [listItems, setListItems] = useState([
    {
      title: "M2M",
      items: [
        "Designed for a wide range of devices",
        "Uses cellular networks for connectivity",
        "Can be expensive",
        "Not available in all areas",
        "Works well for connecting a large number of devices",
        "Offers fast data transfer speeds, including high data usage",
        "Requires more power than NB-IoT",
        "Larger form factor",
      ],
    },
    {
      title: "NB-IoT",
      items: [
        "Low-power wide area network (LPWAN)",
        "Offers better coverage in hard-to-reach areas",
        "Has lower data usage requirements but slower data transfer speeds",
        "Longer battery life, specifically designed for low-power IoT devices",
        "Lower cost",
        "Smaller form factor",
        "Suitable for connecting a smaller number of devices",
        "Works well for sensor-based applications",
      ],
    },
  ]);

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
    <div className="home w-full relative z-10">
      <section className="top container bg-white mx-auto h-auto relative">
        <div className="absolute w-56 md:w-[800px] z-10 hidden md:block">
          <Image
            src="/RectangleSolution.svg"
            className="w-full h-auto "
            objectFit="contain"
            width={0}
            height={0}
            alt=""
            sizes="100vw"
          />
        </div>
        <div className="absolute w-screen  z-10 sm:hidden">
          <Image
            src="/kadın-ve-bulut.png"
            className="w-full h-auto"
            objectFit="contain"
            width={0}
            height={0}
            alt=""
            sizes="100vw"
          />
        </div>
        <div className="flex justify-between flex-row-reverse relative z-40">
          <div className="basis-1/2 md:basis-3/6 md:pr-28 md:pl-10 lg:pl-28 lg:pr-52 mt-72 md:mt-52 lg:mt-56 xl:mt-9 mb-0 lg:mb-10">
            <Image
              src="/iot-r.png"
              className="w-full h-auto hidden md:block"
              objectFit="contain"
              width={0}
              height={0}
              alt=""
              sizes="100vw"
            />
          </div>
          <div className="left basis-1/2 md:basis-3/6 p-5 lg:p-10">
            <h1 className="font-normal mb-40 md:mb-2">
              <strong>IoT</strong>
              <br />
              connectivity
            </h1>
            <h2 className="font-medium"></h2>
            <p className="hidden md:block mt-10 text-sm leading-relaxed">
              <strong>IoT connectivity</strong> is typically how we refer to the
              methods used to connect IoT devices. The term “IoT” (Internet of
              Things) mostly refers to wireless devices including applications,
              sensors, tracking devices, gateways and network
            </p>
            <p className="md:hidden mt-10 text-sm leading-relaxed">
              IoT connectivity is typically how we refer to the methods used to
              connect IoT devices. The term “IoT” (Internet of Things) mostly
              refers to wireless devices including applications, sensors,
              tracking devices, gateways and network{" "}
            </p>
            <p className="hidden md:block mt-10 leading-relaxed">
              <strong>IoT devices</strong> requiring less maintenance of
              technologies such as Ethernet and WiFi networks. Which can be less
              reliable and have problems of their own compared to cellular
              network.
            </p>
            <p className="md:hidden mt-10 leading-relaxed">
              IoT devices requiring less maintenance of technologies such as
              Ethernet and WiFi networks. Which can be less reliable and have
              problems of their own compared to cellular network.
            </p>

            <p className="hidden md:block mt-10 leading-relaxed">
              What is IoT? To understand what <strong>IoT SIM cards</strong> are
              in the first place, it is necessary to explain the term IoT. This
              is in fact the abbreviation for the term Internet of Things. With
              the Internet of Things, it is possible for smart devices to
              connect to each other on the one hand and to the outside world on
              the other. To make it easier to understand, you can also imagine
              that through these SIM cards the devices have the ability to talk
              to each other without involving a human being. This makes it
              possible for everyday objects to become intelligent devices.
            </p>
          </div>
        </div>
        <div className="container mx-auto md:px-10">
          <div className="relative lg:top-[-50px] z-30 w-full bg-black md:rounded-[60px] px-5 md:px-14 pt-8 md:pt-12">
            <div className="lg:flex">
              <div className="mb-6  basis-1/2">
                <div className="flex items-center justify-start">
                  <Image
                    src={"/greenStar.png"}
                    width={windowWidth > 768 ? 52 : 40}
                    height={windowWidth > 768 ? 52 : 40}
                    alt="Vercel Logo"
                    className="self-start"
                  />
                  <h2 className="text-white font-normal md:text-[46px] xl:text-6xl">
                    <strong>M2M</strong> vs <strong>NB-IoT:</strong>
                  </h2>
                </div>
                <h2 className="text-white font-normal md:text-[39px] xl:text-5xl md:mt-3">
                  Which one to choose?
                </h2>
              </div>
              <p className="text-white font-thin basis-1/2">
                When choosing between M2M and NB-IoT, it&apos;s important to
                consider your specific business needs and the requirements of
                your IoT devices. If you require high data usage or need to
                connect a wide range of devices, M2M technology may be the
                better choice. However, if you&apos;re looking to connect
                low-power IoT devices with long battery life and need coverage
                in hard-to-reach areas, NB-IoT may be the way to go.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row mt-10 lg:basis-8/12">
              {listItems.map((item, index) => (
                <div key={index} className="right flex-1 pb-10">
                  <h2 className="font-semibold text-white text-lg md:text-2xl">
                    {item.title}:
                  </h2>
                  <ul className="list-r">
                    {item.items.map((item, index) => (
                      <div
                        key={index}
                        className="text-left text-white mb-2 italic lg:not-italic font-thin"
                      >
                        - {item}
                      </div>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <section className="container mx-auto px-5 md:px-10 pt-5 bg-white text-black">
          <div className="md:flex justify-between md:gap-3 xl:gap-5">
            <div className="md:basis-6/12 lg:basis-5/12 xl:basis-4/12">
              <h2 className="font-normal mb-7">
                An <strong>M2M IoT</strong> SIM Card and <br />
                <strong>NB-IoT</strong> with multiple
                <br /> configurations
              </h2>
            </div>
            <p className="md:basis-6/12 lg:basis-7/12 xl:basis-8/12 font-semibold italic text-base mb-4">
              Our M2M IoT SIM cards are designed for a wide range of devices,
              including those that require high data usage and fast data
              transfer speeds. Our NB-IoT IoT SIM cards, on the other hand, are
              specifically designed for low-power IoT devices that require long
              battery life and better coverage in hard-to-reach areas.
            </p>
          </div>
          <div className="flex items-stretch flex-col-reverse lg:flex-row lg:gap-3 xl:gap-5">
            <div className="lg:basis-5/12 xl:basis-4/12 lg:pr-5">
              <div>
                <h3 className="font-semibold text-xl mt-8 mb-0 lg:mb-5">
                  Removable IoT SIM Card
                </h3>
                <p className="italic lg:not-italic font-thin lg:font-normal text-base">
                  Swap between IoT devices effortlessly with our removable SIM
                  card, ensuring reliable and secure connectivity for your
                  business needs.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="font-semibold text-xl mt-8 mb-0 lg:mb-5">
                  IoT SIM Card Features
                </h3>
                <p className="italic lg:not-italic font-thin lg:font-normal text-base">
                  - Data plans for 2G, 3G, 4G LTE, Cat-M1 coverage in 150 <br />
                  - countries Pay-as-you-go pricing – only ever pay only for the
                  data you use(NB-IoT) <br />
                  - A totally secure IoT connection that bypasses the public
                  internet <br />
                  - Direct integration with AWS, Azure, and Google Cloud <br />-
                  Easy network control and management with the CleanIoT web
                  platform and API
                </p>
              </div>
            </div>
            <div className="lg:basis-7/12 xl:basis-8/12">
              <Image alt="" src={"/SIMOne.png"} width={55} height={200} />
            </div>
          </div>
        </section>
        <HappyCustomersSlider />
      </section>
    </div>
  );
}
