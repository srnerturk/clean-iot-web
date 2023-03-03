import Image from "next/image";
export default function Orders() {
  return (
    <div className="products w-full">
      <div className="container mx-auto">
        <section className="top w-full h-auto relative">
          <div className="content grid grid-cols-2">
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
            <div className="right p-10">
              <div className="title flex flex-col space-y-2">
                <h1>Hello!</h1>
                <h3>So, you have a question!</h3>
                <h3>We would love help!</h3>
              </div>
              <div className="body">
                <h5 className="mt-10 mb-10">Im interested in</h5>
                <div className="boxes grid grid-cols-3 gap-2">
                  <div className="select bg-black px-5 py-3">
                    <span className="text-primary text-sm font-bold">
                      M2M sim
                    </span>
                  </div>
                  <div className="select bg-black px-5 py-3">
                    <span className="text-primary text-sm font-bold">
                      NB-Iot sim
                    </span>
                  </div>
                  <div className="select bg-black px-5 py-3">
                    <span className="text-primary text-sm font-bold">
                      NB-Iot sim
                    </span>
                  </div>
                </div>
                <div className="boxes grid grid-cols-2 gap-2 mt-2">
                  <div className="select bg-black px-5 py-3">
                    <span className="text-primary text-sm font-bold">
                      Special Auto Selection
                    </span>
                  </div>
                  <div className="select bg-black px-5 py-3">
                    <span className="text-primary text-sm font-bold">
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
                  />
                  <input
                    className="border-b-2 mb-2 text-black outline-none border-b-black text-sm h-[52px]"
                    type="text"
                    placeholder="your email"
                  />
                  <input
                    className="border-b-2 outline-none text-black border-b-black text-sm h-[52px]"
                    type="text"
                    placeholder="Tell us about your project"
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
      </div>
    </div>
  );
}
