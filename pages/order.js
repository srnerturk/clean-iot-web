import Image from "next/image";
import HappyCustomersSlider from "../components/HappyCustomersSlider";
export default function Products() {
  return (
    <div className="products w-full">
      <div className="container mx-auto bg-white">
        <section className="top w-full h-auto relative bg-bg-order-mobile-image lg:bg-bg-order-image bg-contain lg:bg-cover bg-no-repeat">
          {/* <Image
            className="w-full h-auto"
            objectFit="contain"
            src="/main2.png"
            width={0}
            height={0}
            alt="Vercel Logo"
            sizes="100vw"
          /> */}
          <div className="flex flex-row-reverse lg:flex-row justify-between px-5 relative sm:pt-32">
            <div className="absolute top-20">
              <Image
                className="hidden sm:block lg:hidden"
                src="/card.png"
                width={430}
                height={500}
                alt="star"
              />
            </div>
            <div className="sm:basis-1/3 lg:basis-3/5">
              <Image
                className="hidden sm:block mt-96 lg:hidden"
                src={"/planet.png"}
                width={500}
                height={500}
                alt="star"
              />
            </div>
            <div className="basis-full sm:basis-2/3 lg:basis-2/5">
              <h1 className="font-normal text-4xl lg:text-5xl mt-56 lg:mt-16 my-16">
                IoT <strong>SimCard</strong>
              </h1>
              <div className="max-w-sm mb-10 lg:mb-32">
                <h4 className="font-extrabold text-black">Sim Type</h4>
                <div className="flex justify-between gap-5">
                  <button className="bg-[#231F20] w-full text-xl h-11">
                    M2M
                  </button>
                  <button className="bg-[#231F20] w-full text-xl h-11">
                    NB-IoT
                  </button>
                </div>
                <div className="flex justify-between items-end gap-5 mt-6">
                  <div className="bg-[#231F20] flex items-center px-4 w-full basis-3/4 h-11 relative py-1 text-lg">
                    adasds
                  </div>
                  <div className="basis-1/4">
                    <p className="text-black font-extrabold">Quantity</p>
                    <input
                      className="w-full h-11 outline-none p-3 border border-black"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col-reverse xs:flex-row justify-between items-end gap-5 mt-6">
                  <div className="w-full xs:basis-1/3">
                    <p className="text-black font-extrabold">Total</p>
                    <div className="h-11">
                      <p className="text-black font-normal text-4xl">
                        $<strong>243.00</strong>
                      </p>
                      <p className="italic text-xs leading-2 text-black">
                        taxes, fees and shipping will be calculated at checkout
                      </p>
                    </div>
                  </div>
                  <div className="basis-full w-full xs:basis-2/3">
                    <button className="w-full bg-green shadow-slate-500 shadow-lg h-11 px-5 text-end text-black text-lg whitespace-nowrap">
                      Order <strong> Now!</strong>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-36 max-w-6xl p-5 mx-auto bg-black lg:bg-white">
            <p className="lg:max-w-2xl mb-10 text-white lg:text-black">
              We provide cutting-edge <strong>IoT SIM card</strong> technology
              to help businesses connect their devices to the internet. Our SIM
              cards are designed specifically for IoT devices and provide
              reliable connectivity, security, and flexibility to support your
              business needs.
            </p>
            <p className="lg:max-w-2xl lg:mb-10 text-white lg:text-black">
              With our <strong>IoT SIM cards</strong>, you can connect your
              devices to the internet from anywhere in the world. Our SIM cards
              use the latest technologies to ensure fast and secure data
              transfer. Whether you are monitoring a fleet of vehicles, managing
              a smart home, or tracking inventory, our IoT SIM cards offer the
              connectivity you need to make informed decisions and operate your
              business more efficiently.
            </p>
          </div>
        </section>
        <section className="process container mx-auto p-2 lg:p-10">
          <div className="title w-full flex flex-col lg:flex-row max-w-4xl mx-auto">
            <div className="left flex-1 flex items-center justify-start mt-4 space-x-2 ">
              <Image src="/star2.png" width={50} height={50} alt="star" />
              <h3 className="text-black text-4xl font-bold">Order Process</h3>
            </div>
            <div className="right flex-1 flex justify-start items-center">
              <p className="text-xl mt-3  max-w-md italic mx-auto lg:max-w-[500px] font-light text-black leading-relaxed">
                Our streamlined process ensures that you receive your SIM cards
                quickly and efficiently. Here are the steps you can expect when
                ordering IoT SIM cards from us
              </p>
            </div>
          </div>
          <div className="lg:hidden w-full px-6 flex justify-center container mx-auto">
            <Image
              src={"/mobile-order-process.svg"}
              width={700}
              height={500}
              alt="star"
            />
          </div>
          <div className="body hidden lg:block mt-12">
            <Image
              className="w-full h-auto"
              objectFit="contain"
              src="/process.png"
              width={0}
              height={0}
              alt="Vercel Logo"
              sizes="100vw"
            />
            <div className="descriptions grid grid-cols-1 lg:grid-cols-3">
              <div className="col flex space-x-3 items-center lg:justify-center mt-10">
                <div className="number border border-black rounded-full flex-none flex justify-center items-center w-[40px] h-[40px]">
                  <span className="text-2xl font-bold text-black">1</span>
                </div>
                <div className="text text-sm text-black">
                  Select your SIM type and fill your order form
                </div>
              </div>
              <div className="col flex space-x-3 justify-center mt-10">
                <div className="number border border-black rounded-full flex-none flex justify-center items-center w-[40px] h-[40px]">
                  <span className="text-2xl font-bold text-black">2</span>
                </div>
                <div className="text text-sm text-black">
                  After we received your order, our experts get in touch with
                  you for further details.
                </div>
              </div>
              <div className="col flex space-x-2 items-center lg:justify-center mt-10">
                <div className="number border border-black rounded-full flex-none flex justify-center items-center w-[40px] h-[40px]">
                  <span className="text-2xl font-bold text-black ">3</span>
                </div>
                <div className="text text-sm text-black ">
                  In 1-2 weeks wew ill ship your order
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sim lg:p-10">
          <div className="content w-full flex">
            <div className="left hidden lg:flex-none lg:flex items-start justify-end space-x-20">
              <h2 className="text-black text-3xl font-light">
                I got my{" "}
                <strong>
                  SIM <br />
                  Now
                </strong>{" "}
                what?
              </h2>
              <Image src="/star2.png" width={50} height={50} alt="star" />
            </div>
            <div className="right flex-1 lg:ml-10 p-2">
              <div className="question-item cursor-pointer border-b border-b-gray flex h-[52px] items-center justify-between">
                <p className="text-sm font-bold">
                  Receiving your new IoT SIM Card
                </p>
              </div>
              <div className="question-item cursor-pointer border-b border-b-gray flex h-[52px] items-center justify-between">
                <p className="text-sm font-bold">Activate your SIM card</p>
              </div>
              <div className="question-item cursor-pointer border-b border-b-gray flex h-[52px] items-center justify-between">
                <p className="text-sm font-bold">Install your SIM card</p>
              </div>
              <div className="question-item cursor-pointer border-b border-b-gray flex h-[52px] items-center justify-between">
                <p className="text-sm font-bold">Configure your SIM card</p>
              </div>
              <div className="question-item cursor-pointer border-b border-b-gray flex h-[52px] items-center justify-between">
                <p className="text-sm font-bold">Test your connection</p>
              </div>
              <div className="question-item cursor-pointer border-b border-b-gray flex h-[52px] items-center justify-between">
                <p className="text-sm font-bold">Login to web platform</p>
              </div>
            </div>
          </div>
          <p className="text-sm mt-10 text-center">
            If you have any questions or issues during this process, our team of
            experts is always available to help. We are committed to providing
            our customers with the best possible service and support to ensure
            that your IoT solutions are optimized for performance, security, and
            scalability. Contact us today to learn more about our IoT SIM card
            products and services.
          </p>
        </section>
        <HappyCustomersSlider />
      </div>
    </div>
  );
}
