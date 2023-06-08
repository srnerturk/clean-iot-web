import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="relative">
      <Navbar />
      <main className="pt-[70px]">{children}</main>
      <Footer />
      <div className="fixed p-4 flex justify-between items-center sm:hidden bottom-0 w-full h-16 bg-green text-black z-[9999]">
        <div className="flex-1"></div>
        <button className="bg-black text-green pr-24 pl-5 py-2 text-xl">
          Book a <strong>Demo!</strong>
        </button>
      </div>
    </div>
  );
}
