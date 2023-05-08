/* eslint-disable jsx-a11y/alt-text */
import react, { useEffect, useState } from "react";
import Image from "next/image";
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
      <section className="top container mx-auto h-auto relative">
        <div className="absolute w-56 md:w-[800px] z-10">
          <Image
            src="/RectangleSolution.svg"
            className="w-full h-auto"
            objectFit="contain"
            width={0}
            height={0}
            alt=""
            sizes="100vw"
          />
        </div>
        <div className="md:flex justify-between flex-row-reverse relative z-30">
          <div className="hidden md:block basis-3/6 md:pr-28 pl-10 lg:pl-28 lg:pr-52 mt-36 md:mt-52 lg:mt-56 xl:mt-9 mb-0 lg:mb-10">
            <Image
              src="/iot-r.png"
              className="w-full h-auto"
              objectFit="contain"
              width={0}
              height={0}
              alt=""
              sizes="100vw"
            />
          </div>
          <div className="left basis-3/6 p-5 lg:p-10">
            <h1 className="font-normal mb-40 md:mb-2">
              <strong>IoT</strong>
              <br />
              connectivity
            </h1>
            <h2 className="font-medium"></h2>
            <p className="mt-10 text-sm leading-relaxed">
              <strong>IoT connectivity</strong> is typically how we refer to the
              methods used to connect IoT devices. The term “IoT” (Internet of
              Things) mostly refers to wireless devices including applications,
              sensors, tracking devices, gateways and network
            </p>
            <p className="mt-10 leading-relaxed">
              <strong>IoT devices</strong> requiring less maintenance of
              technologies such as Ethernet and WiFi networks. Which can be less
              reliable and have problems of their own compared to cellular
              network.
            </p>
            <p className="mt-10 leading-relaxed">
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
              <div className="mb-6 lg:mb-0 basis-1/2">
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
        {/* <div className="card-container lg:pb-16 container mx-auto bg-white">
          <div className="card relative z-20 container mx-auto lg:px-12 lg:top-[-50px]">
            <div className="card-content bg-black lg:rounded-[60px] w-full lg:h-[650px] flex">
              <div className="content flex flex-col">
                <div className="left flex-1 px-20 lg:pt-10 lg:flex lg:basis-4/12">
                  <div className="title fle items-center space-x-2 lg:basis-1/2">
                    <div className="title">
                      <h1 className="text-white tracking-wide mb-2">
                        M2M vs NB-Iot
                      </h1>
                      <h2 className="text-white mb-5">Which one to choose</h2>
                    </div>
                  </div>
                  <div className="content w-full flex lg:basis-1/2">
                    <p className="text-white">
                      When choosing between M2M and NB-IoT, it&apos;s important
                      to consider your specific business needs and the
                      requirements of your IoT devices. If you require high data
                      usage or need to connect a wide range of devices, M2M
                      technology may be the better choice. However, if
                      you&apos;re looking to connect low-power IoT devices with
                      long battery life and need coverage in hard-to-reach
                      areas, NB-IoT may be the way to go.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row px-20 lg:basis-8/12">
                  {listItems.map((item, index) => (
                    <div key={index} className="right flex-1 pb-10">
                      <h2 className="font-bold text-white text-2xl">
                        {item.title}:
                      </h2>
                      <ul className="list-r py-3 space-y-2">
                        {item.items.map((item, index) => (
                          <div key={index} className="text-left text-white m-0">
                            {item}
                          </div>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
}
