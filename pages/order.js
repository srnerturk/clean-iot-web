import Image from "next/image";
import HappyCustomersSlider from "../components/HappyCustomersSlider";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function Products({
  simCards,
  selectedSimCard,
  setSelectedSimCard,
  totalPrice,
  setTotalPrice,
  setIsOrder,
}) {
  const [orderInput, setOrderInput] = useState(1);
  const [activeTab, setActiveTab] = useState(0);
  const [openSelectBox, setOpenSelectBox] = useState(false);

  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "Activate your SIM card",
      answer:
        "When you receive a brand new Clean IoT SIM card, it is already paired with our system. All you need to do is activate it through our SIM management page in web portal with a simple click.",
    },
    {
      id: 2,
      question: "Install your SIM card",
      answer:
        "Just Plug-in your sim card to your IoT device and it will work automatically after activation.",
    },
    {
      id: 4,
      question: "Test your connection",
      answer:
        "To test the connection insert the SIM card correctly, power on the device, check the connection settings, monitor the device's management interface for connection status, and track data usage to confirm the SIM card is transmitting data accurately; if experiencing any connection issues, feel free to contact our technical support team for assistance.",
    },
  ]);

  const closeSelectBoxHandler = () => {
    setOpenSelectBox(false);
  };

  const toggleSelectBoxHandler = () => {
    setOpenSelectBox(!openSelectBox);
  };

  useEffect(() => {
    if (orderInput && selectedSimCard !== -1) {
      setTotalPrice(simCards[selectedSimCard].price * orderInput);
    } else {
      setTotalPrice(0);
    }
  }, [selectedSimCard, orderInput]);

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
                  <button
                    onClick={() => {
                      setActiveTab(0);
                      setSelectedSimCard(-1);
                    }}
                    className={`w-full text-xl font-semibold h-11 ${
                      activeTab === 0
                        ? "bg-green text-black"
                        : "bg-[#231F20] text-white"
                    }`}
                  >
                    M2M
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab(1);
                      setSelectedSimCard(-1);
                    }}
                    className={`w-full text-xl font-semibold h-11 ${
                      activeTab === 1
                        ? "bg-green text-black"
                        : "bg-[#231F20] text-white"
                    }`}
                  >
                    NB-IoT
                  </button>
                </div>
                <div className="flex justify-between items-end gap-5 mt-6">
                  <div
                    onClick={toggleSelectBoxHandler}
                    className="bg-[#231F20] relative flex justify-between items-center px-4 w-full basis-3/4 h-11  py-1 text-lg cursor-pointer"
                  >
                    <p className="text-white font-bold">
                      {selectedSimCard === -1
                        ? "Select SimCard"
                        : simCards[selectedSimCard].name}
                    </p>{" "}
                    <Image
                      className="-rotate-90"
                      src="/sliderArrow.png"
                      width={10}
                      height={10}
                      alt="arrow"
                    />
                    <div
                      className={`absolute left-0 right-0 top-11 bg-[#231F20] max-h-48 w-full flex flex-col items-center justify-center ${
                        openSelectBox ? "block" : "hidden"
                      } `}
                    >
                      {simCards
                        .filter((simCards) => simCards.type === activeTab)
                        .map((simCard, i) => (
                          <div
                            onClick={() => {
                              setSelectedSimCard(simCard.id);
                              closeSelectBoxHandler();
                            }}
                            key={i}
                            className="flex justify-between items-center w-full px-4 h-11 py-1 text-lg cursor-pointer group hover:bg-white text-black"
                          >
                            <p className="text-white font-bold group-hover:text-black">
                              {simCard.name}
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="basis-1/4">
                    <p className="text-black font-extrabold">Quantity</p>
                    <input
                      className="w-full h-11 outline-none p-3 border border-black text-black text-lg font-bold"
                      type="text"
                      pattern="[0-9]*"
                      onInput={(e) => {
                        e.target.validity.valid &&
                          setOrderInput(e.target.value);
                        orderInput === undefined && setOrderInput(0);
                      }}
                      value={orderInput}
                    />
                  </div>
                </div>
                <div className="flex flex-col-reverse xs:flex-row justify-between items-end gap-5 mt-6">
                  <div className="w-full xs:basis-1/3">
                    <p className="text-black font-extrabold">Total</p>
                    <div className="h-11">
                      <p className="text-black font-normal text-4xl">
                        $<strong>{totalPrice.toFixed(2)}</strong>
                      </p>
                      <p className="italic text-xs leading-2 text-black">
                        taxes, fees and shipping will be calculated at checkout
                      </p>
                    </div>
                  </div>
                  <div className="basis-full w-full xs:basis-2/3">
                    <Link href={"/contact"} legacyBehavior>
                      <a
                        onClick={() => setIsOrder(true)}
                        className="w-full flex items-center justify-end bg-green shadow-slate-500 shadow-lg h-11 px-5 text-end text-black text-lg whitespace-nowrap"
                      >
                        Order <strong className="ml-1"> Now!</strong>
                      </a>
                    </Link>
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
                <p className="text text-sm text-black font-bold">
                  Select your SIM type and fill your order form
                </p>
              </div>
              <div className="col flex space-x-3 justify-center mt-10">
                <div className="number border border-black rounded-full flex-none flex justify-center items-center w-[40px] h-[40px]">
                  <span className="text-2xl font-bold text-black">2</span>
                </div>
                <p className="text text-sm text-black font-bold">
                  After we received your order, our experts get in touch with
                  you for further details.
                </p>
              </div>
              <div className="col flex space-x-2 items-center lg:justify-center mt-10">
                <div className="number border border-black rounded-full flex-none flex justify-center items-center w-[40px] h-[40px]">
                  <span className="text-2xl font-bold text-black ">3</span>
                </div>
                <p className="text text-sm text-black font-bold ">
                  In 1-2 weeks wew ill ship your order
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="sim lg:p-10">
          <div className="content w-full max-w-4xl mx-auto flex flex-col md:flex-row">
            <div className="left px-5 lg:flex-none flex items-start md:justify-end space-x-10">
              <h2 className="text-black text-4xl md:text-5xl font-normal">
                I got my{" "}
                <strong>
                  SIM <br />
                  Now
                </strong>{" "}
                what?
              </h2>
              <Image src="/star2.png" width={50} height={50} alt="star" />
            </div>
            <div className="right flex-1 lg:ml-10 px-5">
              {questions.map((question) => (
                <div
                  onClick={() => {
                    if (question.id === selectedQuestion) {
                      setSelectedQuestion(null);
                    } else {
                      setSelectedQuestion(question.id);
                    }
                  }}
                  key={question.id}
                  className="question-item border-b border-b-gray"
                >
                  <div className="flex h-[52px] items-center justify-between cursor-pointer">
                    <p className="text-sm font-bold">{question.question}</p>
                    {question.answer === "" ? null : (
                      <Image
                        alt="arrow"
                        src="/arrow.png"
                        width={18}
                        height={9}
                      />
                    )}
                  </div>
                  {selectedQuestion !== null &&
                    selectedQuestion === question.id && (
                      <p
                        className={`text-sm font-light ${
                          question.answer === "" ? "" : "mb-4"
                        } `}
                      >
                        {question.answer}
                      </p>
                    )}
                </div>
              ))}
              <div className="my-3">
                <Link href="/login" legacyBehavior  >
                  <a className="w-full text-black my-3 text-sm font-bold text-start">
                    Login to Web Platform
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <p className="max-w-4xl mx-auto text-base italic font-thin my-10 text-start px-5">
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
