/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Navbar() {
  const links = [
    { id: 0, text: "Home", href: "/" },
    { id: 1, text: "Solutions", href: "/solutions" },
    { id: 2, text: "Order", href: "/order" },
    { id: 3, text: "Pricing", href: "/pricing" },
  ];
  return (
    <div className="wrapper">
      <Head>
        <title>Clean IOT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container mx-auto shadow-lg">
        <div className="navbar bg-gray w-full p-2.5">
          <div className="navbar-content container ml-auto mr-auto flex justify-between">
            <div className="navbar-logo flex items-center justify-center">
              <Image
                src="/logo-detail.png"
                alt="Vercel Logo"
                width={140}
                height={50}
              />
            </div>
            <div className="navbar-menu w-1/3 flex justify-between">
              {links.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="navbar-item hover:bg-darkGray px-5 font-bold text-black text-sm h-[50px] flex items-center"
                >
                  {item.text}
                </Link>
              ))}
            </div>
            <div className="mr-right">
              <Link
                href="/contact"
                className="navbar-item bg-darkGray font-bold text-sm px-10  text-black h-[50px] flex items-center"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
