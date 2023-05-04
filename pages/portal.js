import Image from "next/image";

export default function Portal() {
  return (
    <div className="container bg-white mx-auto text-black">
      <h2 className="py-10 pl-5 font-normal">
        <strong>Poweful,</strong>
        <br /> easy-to-use
      </h2>
      <div className="relative mx-auto max-w-4xl">
        <div className="relative px-10">
          <Image
            className="ml-10 pb-14"
            src="/web1.png"
            width={850}
            height={400}
            alt="Vercel Logo"
          />
          <Image
            className="absolute top-10 right-10"
            src="/web2.png"
            width={850}
            height={400}
            alt="Vercel Logo"
          />
        </div>
      </div>
      <div className="max-w-xl mx-auto mt-20">
        <p className="italic font-thin text-lg mb-5">
          Our IoT SIM card products are designed to be powerful and easy-to-use,
          offering reliable and secure connectivity for your IoT devices.
        </p>
        <div className="flex justify-between w-full">
          <button className="bg-green">Datasheet</button>
          <button className="bg-green">
            Book a <strong>Demo!</strong>
          </button>
        </div>
        <div className="w-full border-b-2 border-black"></div>
        <div>
          <h3>
            <strong>Key</strong> features
            <br /> fast review
          </h3>
          <p>Here are some of the key features of our IoT SIM card products:</p>
        </div>
        <div>LIST_ITEMS</div>
        <div>TEXT_INFO</div>
        <div>KEY_FEATURES</div>
      </div>
    </div>
  );
}
