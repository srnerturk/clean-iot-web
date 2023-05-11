import Image from "next/image";
import HappyCustomersSlider from "../components/HappyCustomersSlider";
import { useState } from "react";
export default function Orders({
  simCards,
  selectedSimCard,
  totalPrice,
  isOrder,
  setIsOrder,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    simType: isOrder ? "NB-Iot sim" : "",
    autoSelection: false,
    getKnowledge: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(formData);

  console.log("isOrderRRRRR", isOrder);

  return (
    <div className="products w-full">
      <div className="container mx-auto bg-white">
        <section className="top w-full h-auto relative">
          <div className="content grid lg:grid-cols-2 grid-cols-1">
            <div className="left">
              <Image
                className="w-full h-auto"
                objectFit="contain"
                src="/order.png"
                width={0}
                height={0}
                alt="Vercel Logo"
                sizes="100vw"
              />
            </div>
            <div className="right lg:p-10 p-3">
              <div className="title flex flex-col space-y-2">
                <h1>Hello!</h1>
                <h3>So, you have a question!</h3>
                <h3>We would love help!</h3>
              </div>
              <div className="body">
                <h5 className="mt-10 mb-10">Im interested in</h5>
                <div className="boxes grid grid-cols-3 gap-2">
                  <div
                    onClick={() => {
                      setIsOrder(false);
                      setFormData({
                        ...formData,
                        simType: "M2M sim",
                      });
                    }}
                    className={`select cursor-pointer px-5 py-3 ${
                      formData.simType === "M2M sim" ? "bg-green" : "bg-black"
                    }`}
                  >
                    <span
                      className={`text-primary text-sm font-bold ${
                        formData.simType === "M2M sim"
                          ? "text-black"
                          : "text-white"
                      }`}
                    >
                      M2M sim
                    </span>
                  </div>
                  <div
                    onClick={() => {
                      setIsOrder(true);
                      setFormData({
                        ...formData,
                        simType: "NB-Iot sim",
                      });
                    }}
                    className={`select cursor-pointer bg-black px-5 py-3 ${
                      formData.simType === "NB-Iot sim"
                        ? "bg-green"
                        : "bg-black"
                    }`}
                  >
                    <span
                      className={`text-primary text-sm font-bold ${
                        formData.simType === "NB-Iot sim"
                          ? "text-black"
                          : "text-white"
                      }`}
                    >
                      NB-Iot sim
                    </span>
                  </div>
                  <div
                    onClick={() => {
                      setIsOrder(false);
                      setFormData({
                        ...formData,
                        simType: "NB-Iot sim2",
                      });
                    }}
                    className={`select cursor-pointer bg-black px-5 py-3 ${
                      formData.simType === "NB-Iot sim2"
                        ? "bg-green"
                        : "bg-black"
                    }`}
                  >
                    <span
                      className={`text-primary text-sm font-bold ${
                        formData.simType === "NB-Iot sim2"
                          ? "text-black"
                          : "text-white"
                      }`}
                    >
                      NB-Iot sim2
                    </span>
                  </div>
                </div>
                <div className="boxes grid grid-cols-2 gap-2 mt-2">
                  <div
                    onClick={() =>
                      setFormData({
                        ...formData,
                        autoSelection: !formData.autoSelection,
                      })
                    }
                    className={`px-5 py-3 cursor-pointer ${
                      formData.autoSelection ? "bg-green" : "bg-black "
                    }`}
                  >
                    <span
                      className={`text-sm font-bold select-none ${
                        formData.autoSelection ? "text-black" : "text-primary"
                      }`}
                    >
                      Special Auto Selection
                    </span>
                  </div>
                  <div
                    onClick={() =>
                      setFormData({
                        ...formData,
                        getKnowledge: !formData.getKnowledge,
                      })
                    }
                    className={`px-5 py-3 cursor-pointer ${
                      formData.getKnowledge ? "bg-green" : "bg-black "
                    }`}
                  >
                    <span
                      className={`text-sm font-bold select-none ${
                        formData.getKnowledge ? "text-black" : "text-primary"
                      }`}
                    >
                      Get Knowledge
                    </span>
                  </div>
                </div>
              </div>

              <div className="form-content mt-10 p-5 bg-white shadow-sm">
                <form className="flex flex-col">
                  <input
                    className="border-b-2 mb-2 text-black outline-none border-b-black text-sm h-[52px]"
                    type="text"
                    placeholder="your name"
                    value={formData.name}
                    name="name"
                    onChange={handleChange}
                  />
                  <input
                    className="border-b-2 mb-2 text-black outline-none border-b-black text-sm h-[52px]"
                    type="text"
                    placeholder="your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    className="border-b-2 outline-none text-black border-b-black text-sm h-[52px]"
                    type="text"
                    placeholder="Tell us about your project"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />

                  <div className="action mt-5 flex items-end justify-end">
                    <button className="action px-10 py-3 text-sm font-bold bg-green text-black">
                      Sent Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <HappyCustomersSlider />
      </div>
    </div>
  );
}
