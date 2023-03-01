/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
export default function Use() {
  return (
    <div className="home w-full bg-primary">
      <div className="container ml-auto mr-auto">
        <section className="image relative mt-10">
          <h1 className="text-center">Powerfull</h1>
          <h3 className="mb-10 text-center">easy-to-use</h3>
          <div className="images w-full relative flex items-center justify-center">
            <Image
              className=""
              src="/web1.png"
              width={850}
              height={400}
              alt="Vercel Logo"
              sizes="100vw"
            />
          </div>
          <p className="text-center mt-10">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore.
          </p>
          <div className="actions mt-10 w-full flex items-center space-x-6 justify-center">
            <button className="button px-5">Datasheet</button>
            <button className="button px-5">Book a Demo!</button>
          </div>
        </section>
        <section className="features mt-20">
          <div className="row grid grid-cols-2 gap-10">
            <div className="col">
              <h2 className="text-right">Key features fast review</h2>
            </div>
            <div className="col">
              <p className="text-left">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore.
              </p>
            </div>
          </div>
          <div className="row grid grid-cols-2 gap-10 mt-10">
            <div className="col">
              <ul className="list">
                <li className="text-right">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </li>
                <li className="text-right">
                  Aliquam tincidunt mauris eu risus.
                </li>
                <li className="text-right">Vestibulum auctor dapibus neque.</li>
                <li className="text-right">unc dignissim risus id metus.</li>
                <li className="text-right">Cras ornare tristique elit.</li>
                <li className="text-right">
                  Vivamus vestibulum ntulla nec ante.
                </li>
              </ul>
            </div>
            <div className="col">
              <ul className="list">
                <li>Donec quis dui at dolor tempor interdum.</li>
                <li>Cras iaculis ultricies nulla</li>
                <li>nteger vitae libero ac risus egestas placerat.</li>
                <li>Vivamus vestibulum ntulla nec ante.</li>
                <li>Vestibulum commodo felis quis tortor.</li>
                <li>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="boxes mt-20">
          <div className="flex flex-row items-center justify-between">
            <h5 className="flex-[0.6] font-light">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad scipit lobortis nisl ut aliquip ex
              ea commodo consequat equat.
              <br /> <br />
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad scipit lobortis nisl ut aliquip ex
              ea commodo consequat equat.
            </h5>
            <div className="box p-10 w-full h-[400px] bg-black flex flex-col justify-between flex-[0.3]">
              <div className="top flex w-full justify-start">
                <div className="square w-[60px] h-[60px] bg-primary"></div>
              </div>
              <div className="title">
                <h3 className="text-white">
                  We Develope Special IOT Solutions for you
                </h3>
              </div>
              <div className="body">
                <h5 className="text-white">
                  Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit,sed
                  diam nonummy nibh euismod tincidunt ut laoreet{" "}
                </h5>
              </div>
              <div className="footer flex justify-end">
                <button className="button px-5">Contact Now</button>
              </div>
            </div>
          </div>
        </section>

        <section className="key-features mt-10">
          <h1>Key Features</h1>
          <h5>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore.
          </h5>

          <div className="flex mt-10 flex-row-reverse items-center justify-between">
            <div className="flex-[0.6]">
              <h2 className="mb-5">Sim Management</h2>
              <h5>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad scipit lobortis nisl ut
                aliquip ex ea commodo consequat equat.
              </h5>
            </div>
            <div className="box p-10 w-full h-[400px] bg-black flex flex-col justify-between flex-[0.3]">
              <div className="top flex w-full justify-start">
                <div className="square w-[60px] h-[60px] bg-primary"></div>
              </div>
              <div className="title">
                <h3 className="text-white">
                  We Develope Special IOT Solutions for you
                </h3>
              </div>
              <div className="body">
                <h5 className="text-white">
                  Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit,sed
                  diam nonummy nibh euismod tincidunt ut laoreet{" "}
                </h5>
              </div>
              <div className="footer flex justify-end">
                <button className="button px-5">Contact Now</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
