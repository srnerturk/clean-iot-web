import { motion } from "framer-motion";
import Image from "next/image";
export default function Products() {
  const animationVariant = (duration, delay) => {
    return {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          duration,
          delay,
        },
      },
    };
  };
  return (
    <div className="products w-full bg-primary">
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={animationVariant(0.5, 0.5)}
        className="top w-full h-auto bg-primary relative"
      >
        <Image
          className="w-full h-auto"
          objectFit="contain"
          src="/main2.png"
          width={0}
          height={0}
          alt="Vercel Logo"
          sizes="100vw"
        />
        <div className="content flex absolute top-0 left-0 w-full h-full">
          <div className="container ml-auto mr-auto flex">
            <div className="left hidden flex-[0.5] lg:flex items-end flex-col justify-end space-y-10 pb-20">
              <h5>
                <b>Lorem</b> ipsum dolor sit amet, consectetuer adipiscing elit,
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad scipit lobortis nisl ut
                aliquip ex ea commodo consequat.equat.
              </h5>

              <h5>
                <b>Lorem ipsum dolor sit amet,</b> consectetuer adipiscing elit,
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad scipit lobortis nisl ut
                aliquip ex ea commodo consequat.equat.
              </h5>
            </div>
            <div className="right hidden lg:flex flex-col flex-[0.5] pt-20 space-y-10">
              <div className="title px-20">
                <h1>IoT SimCard</h1>
              </div>
              <div className="body px-20 flex flex-col space-y-5">
                <div className="row flex items-end space-x-4">
                  <div className="box flex-[0.5]">
                    <label className="text-xl font-medium text-black">
                      Sim Type
                    </label>
                    <div className="select bg-black px-5 py-3">
                      <span className="text-primary text-lg font-bold">
                        M2m
                      </span>
                    </div>
                  </div>
                  <div className="box flex-[0.5]">
                    <div className="select bg-black px-5 py-3">
                      <span className="text-primary text-lg font-bold">
                        NB-IoT
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row flex items-end space-x-4">
                  <div className="select bg-black py-3 flex justify-between flex-[0.5]">
                    <span className="text-primary pl-3 text-lg font-bold">
                      M2M Industrial 2FF (Mini SIM)
                    </span>
                  </div>
                  <div className="input flex flex-col flex-[0.5]">
                    <label className="text-xl font-medium text-black">
                      Quantity
                    </label>
                    <input
                      className="bg-transparent font-bold text-black px-5 py-3 border-2 border-black"
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
                    <button className="button  w-full">
                      Order Now!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <section className="process container ml-auto mr-auto">
        <div className="title w-full flex space-x-20">
          <div className="left flex-[0.5] flex items-center  justify-end space-x-2 ">
            <Image src="/star2.png" width={50} height={50} alt="star" />
            <h2 className="text-black text-5xl font-bold">Order Process</h2>
          </div>
          <div className="right flex-[0.5] justify-start items-center">
            <p className="text-xl max-w-[500px] font-light text-black">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore.
            </p>
          </div>
        </div>
        <div className="body mt-10">
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
            <div className="col flex space-x-3 items-center justify-center">
              <div className="number border border-black rounded-full flex-none flex justify-center items-center w-[40px] h-[40px]">
                <span className="text-2xl font-bold text-black">1</span>
              </div>
              <div className="text text-xl text-black">
                Select your SIM type and fill your order form
              </div>
            </div>
            <div className="col flex space-x-3 justify-center">
              <div className="number border border-black rounded-full flex-none flex justify-center items-center w-[40px] h-[40px]">
                <span className="text-2xl font-bold text-black">2</span>
              </div>
              <div className="text text-xl text-black">
                After we received your order, our experts get in touch with you
                for further details.
              </div>
            </div>
            <div className="col flex space-x-2 items-center justify-center">
              <div className="number border border-black rounded-full flex-none flex justify-center items-center w-[40px] h-[40px]">
                <span className="text-2xl font-bold text-black ">3</span>
              </div>
              <div className="text text-xl text-black ">
                In 1-2 weeks wew ill ship your order
              </div>
            </div>
          </div>
        </div>
        <div className="title w-full flex space-x-20 mt-20">
          <div className="left flex-[0.5] flex items-center  justify-end space-x-2 ">
            <Image src="/star2.png" width={50} height={50} alt="star" />
            <h2 className="text-black text-5xl font-bold">
              I got my SIM Now what?
            </h2>
          </div>
          <div className="right flex-[0.5] justify-start items-center">
            <p className="text-xl max-w-[500px] font-light text-black">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore.
            </p>

            <p className="text-xl max-w-[500px] font-light text-black">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
