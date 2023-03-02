import Image from "next/image";
export default function Products() {
  return (
    <div className="products w-full">
      <div className="container mx-auto">
        <section className="top w-full h-auto relative">
          <Image
            className="w-full h-auto opacity-40"
            objectFit="contain"
            src="/main2.png"
            width={0}
            height={0}
            alt="Vercel Logo"
            sizes="100vw"
          />
          <div className="content flex absolute top-0 left-0 w-full h-full">
            <div className="container ml-auto mr-auto flex">
              <div className="left flex-1 lg:flex items-end flex-col justify-end">
                <div className="content p-10 shadow-xl">
                  <p className="text-lg font-medium  text-black">
                    We provide cutting-edge <strong>IoT SIM card</strong> technology to help
                    businesses connect their devices to the internet. Our SIM
                    cards are designed specifically for IoT devices and provide
                    reliable connectivity, security, and flexibility to support
                    your business needs.
                  </p>

                  <p className="text-lg font-medium mt-5">
                    With our <strong>IoT SIM cards</strong>, you can connect your devices to the
                    internet from anywhere in the world. Our SIM cards use the
                    latest technologies to ensure fast and secure data transfer.
                    Whether you are monitoring a fleet of vehicles, managing a
                    smart home, or tracking inventory, our IoT SIM cards offer
                    the connectivity you need to make informed decisions and
                    operate your business more efficiently.
                  </p>
                </div>
              </div>
              <div className="right hidden lg:flex flex-col flex-1 pt-20 space-y-10">
                <div className="title px-20">
                  <h1>IoT SimCard</h1>
                </div>
                <div className="body px-20 flex flex-col space-y-5">
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
        <section className="process container ml-auto mr-auto mt-10">
          <div className="title w-full flex space-x-20">
            <div className="left flex-[0.5] flex items-center  justify-center space-x-2 ">
              <Image src="/star2.png" width={50} height={50} alt="star" />
              <h3 className="text-black text-4xl font-bold">Order Process</h3>
            </div>
            <div className="right flex-[0.5] justify-start items-center">
              <p className="text-xl max-w-[500px] font-light text-black leading-relaxed">
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
              <div className="col flex space-x-3 items-center justify-center mt-10">
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
              <div className="col flex space-x-2 items-center justify-center mt-10">
                <div className="number border border-black rounded-full flex-none flex justify-center items-center w-[40px] h-[40px]">
                  <span className="text-2xl font-bold text-black ">3</span>
                </div>
                <div className="text text-sm text-black ">
                  In 1-2 weeks wew ill ship your order
                </div>
              </div>
            </div>
          </div>
          <div className="title w-full flex space-x-20 mt-20">
            <div className="left flex-[0.5] flex items-start  justify-end space-x-2 ">
              <Image src="/star2.png" width={50} height={50} alt="star" />
              <h2 className="text-black text-3xl font-bold">
                I got my SIM Now what?
              </h2>
            </div>
            <div className="divider flex-none w-1  bg-gray justify-start items-center"></div>
            <div className="right flex-[0.5] justify-start items-center">
              <p className="text-sm max-w-[500px] font-medium text-black leading-relaxed">
                Congratulations on receiving your new IoT SIM card! You are now
                one step closer to connecting your IoT devices to the internet
                and leveraging the power of data to optimize your business
                operations. Heres what you need to do next: Activate your SIM
                card: Before you can start using your IoT SIM card, you will
                need to activate it. Our SIM cards come with instructions on how
                to activate, or you can contact our customer support team for
                assistance. Install your SIM card in your IoT device: Once your
                SIM card is activated, you will need to install it in your IoT
                device. Our IoT SIM cards are designed to be easy to install,
                and we provide instructions on how to do this on our website.
                Configure your IoT device: Depending on the type of IoT device
                you are using, you may need to configure it to work with our IoT
                SIM card. Our customer support team can assist you with this
                process and ensure that your device is properly configured for
                optimal performance. Test your connection: Once your IoT device
                is configured, its time to test your connection. Make sure that
                your device is connected to the internet and that you can access
                and transfer data. Monitor your data: With your IoT device
                connected to the internet, you can now start collecting and
                analyzing data to optimize your business operations. Our IoT
                management portal makes it easy to monitor your data and ensure
                that your devices are functioning properly. If you have any
                questions or issues during this process, our team of experts is
                always available to help. We are committed to providing our
                customers with the best possible service and support to ensure
                that your IoT solutions are optimized for performance, security,
                and scalability. Contact us today to learn more about our IoT
                SIM card products and services.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
