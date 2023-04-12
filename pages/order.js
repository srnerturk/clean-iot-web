import Image from "next/image";
export default function Products() {
  return (
    <div className="products w-full">
      <div className="container mx-auto bg-white">
        <section className="top w-full h-auto relative">
          <Image
            className="w-full h-auto opacity-20"
            objectFit="contain"
            src="/main2.png"
            width={0}
            height={0}
            alt="Vercel Logo"
            sizes="100vw"
          />
          <div className="content flex lg:absolute top-0 left-0 w-full h-full">
            <div className="container ml-auto mr-auto flex flex-col">
              <div className="left flex-1  items-end flex-col">
                <div className="content p-10 shadow-xl flex flex-col" >
                  <p className="text-lg font-medium  text-black">
                    We provide cutting-edge <strong>IoT SIM card</strong>{" "}
                    technology to help businesses connect their devices to the
                    internet. Our SIM cards are designed specifically for IoT
                    devices and provide reliable connectivity, security, and
                    flexibility to support your business needs.
                  </p>

                  <p className="text-lg font-medium mt-5">
                    With our <strong>IoT SIM cards</strong>, you can connect
                    your devices to the internet from anywhere in the world. Our
                    SIM cards use the latest technologies to ensure fast and
                    secure data transfer. Whether you are monitoring a fleet of
                    vehicles, managing a smart home, or tracking inventory, our
                    IoT SIM cards offer the connectivity you need to make
                    informed decisions and operate your business more
                    efficiently.
                  </p>
                </div>
              </div>
              <div className="right flex-col flex-1 pt-20 space-y-10">
                <div className="title px-20">
                  <h1>IoT SimCard</h1>
                </div>
                <div className="body p-2 lg:px-20 flex flex-col space-y-5">
                  <div className="row flex items-end space-x-4">
                    <div className="box flex-[0.5]">
                      <label className="text-sm font-medium text-black">
                        Sim Type
                      </label>
                      <div className="select bg-black px-5 py-3">
                        <span className="text-primary text-sm font-bold">
                          M2m
                        </span>
                      </div>
                    </div>
                    <div className="box flex-[0.5]">
                      <div className="select bg-black px-5 py-3">
                        <span className="text-primary text-sm font-bold">
                          NB-IoT
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row flex items-end space-x-4">
                    <div className="select bg-black py-3 flex justify-between flex-[0.5]">
                      <span className="text-primary pl-3 text-sm font-bold">
                        M2M Industrial 2FF
                      </span>
                    </div>
                    <div className="input flex flex-col flex-[0.5]">
                      <label className="text-sm font-medium text-black">
                        Quantity
                      </label>
                      <input
                        className="bg-transparent text-sm font-bold text-black px-5 py-2 border-2 border-black"
                        type="number"
                      ></input>
                    </div>
                  </div>
                  <div className="row flex items-end space-x-4">
                    <div className="cost flex-[0.5]">
                      <label className="text-black text-xl">Total</label>
                      <p className="text-black text-3xl font-bold">$10.25</p>
                      <span className="text-sm text-black font-light">
                        Taxes, fees and shipping will be calculated at checkout
                      </span>
                    </div>
                    <div className="action flex-[0.5]">
                      <button className="button text-sm  w-full">
                        Order Now!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="process container ml-auto mr-auto p-2 lg:p-10">
          <div className="title w-full flex space-x-20">
            <div className="left flex-1 flex items-center  justify-center space-x-2 ">
              <Image src="/star2.png" width={50} height={50} alt="star" />
              <h3 className="text-black text-4xl font-bold">Order Process</h3>
            </div>
            <div className="right flex-1 justify-start items-center">
              <p className="text-xl lg:max-w-[500px] font-light text-black leading-relaxed">
                Our streamlined process ensures that you receive your SIM cards
                quickly and efficiently. Here are the steps you can expect when
                ordering IoT SIM cards from us
              </p>
            </div>
          </div>
          <div className="body mt-12">
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
      </div>
    </div>
  );
}
