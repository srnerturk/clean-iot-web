/* eslint-disable jsx-a11y/alt-text */
import react, { useState } from "react";
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

  return (
    <div className="home w-full">
      <section className="top w-full h-auto relative">
        <div className="container ml-auto mr-auto flex flex-row-reverse bg-primary">
          <Image
            className="flex-1 hidden lg:flex"
            src="/iot-r.png"
            width={470}
            height={890}
            alt="Vercel Logo"
            sizes="100vw"
          />
          <div className="left flex-1 p-5 lg:p-10">
            <h1 className="mb-5">IOT</h1>
            <h2 className="font-medium">connectivity</h2>
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
        <div className="card-container lg:pb-16 container mx-auto bg-white">
          <div className="card relative container mx-auto lg:px-12 lg:top-[-50px]">
            <div className="card-content bg-black lg:rounded-[60px] w-full lg:h-[650px] flex">
              <div className="content flex flex-col">
                <div className="left flex-1 px-20 lg:pt-10">
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
                <div className="flex">
                  {listItems.map((item, index) => (
                    <div key={index} className="right flex-1 pb-10 px-20">
                      <h2 className="font-bold text-white text-2xl mt-8">
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
        </div>
      </section>
    </div>
  );
}
