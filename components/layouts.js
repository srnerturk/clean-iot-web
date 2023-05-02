import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="relative">
      <Navbar />
      <main className="pt-[70px]">{children}</main>
      <Footer />
    </div>
  );
}
