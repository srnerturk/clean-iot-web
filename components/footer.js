import Image from "next/image";
import Link from "next/link";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsletterForm from "./NewsletterForm";

const url = process.env.MAIL_URL;

export default function Footer() {
  const links = [
    { id: 0, text: "Home", href: "/" },
    { id: 1, text: "Solutions", href: "/solutions" },
    { id: 2, text: "Order", href: "/order" },
    { id: 3, text: "Pricing", href: "/pricing" },
    { id: 4, text: "Portal", href: "/portal" },
    { id: 5, text: "Contact", href: "/contact" },
  ];

  return (
    <div className="w-full">
      <div className="footer-content container mx-auto flex justify-between bg-black p-10">
        <div className="left space-y-6 flex-1 max-w-md">
          <div className="newsletter space-y-2">
            <h2 className="text-white">Join our newsletter</h2>
            <p className="text-sm text-white">
              We’ll send you best deals and hottest news about IoT
            </p>
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <div>
                  <NewsletterForm
                    status={status}
                    message={message}
                    onValidated={(formData) => subscribe(formData)}
                  />
                  {status === "sending" && (
                    <div style={{ color: "blue" }}>sending...</div>
                  )}
                  {status === "error" && (
                    <div
                      style={{ color: "red" }}
                      dangerouslySetInnerHTML={{ __html: message }}
                    />
                  )}
                  {status === "success" && (
                    <div style={{ color: "green" }}>Subscribed !</div>
                  )}
                </div>
              )}
            />
          </div>
          <div className="logo">
            <Image
              src="/footer-logo.png"
              alt="Vercel Logo"
              width={120}
              height={120}
            />
          </div>
          <div className="contact flex flex-col space-y-2">
            <h5 className="text-white font-bold">Contact:</h5>
            <a className="text-sm" href="#">
              info@cleaniot.com
            </a>
            <p className="text-sm text-white">
              8201 164th Ave NE, Suite 200, Redmond, WA 98052, USA
            </p>
            <p className="text-sm text-white italic font-light">
              2023 CleanIOT. All rights reserved.
            </p>
          </div>
        </div>
        <div className="right hidden lg:block flex-1 self-center">
          <div className="flex flex-row space-x-4">
            {links.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="navbar-item hover:bg-slate-800 px-5 font-medium text-lg h-[50px] flex items-center"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
