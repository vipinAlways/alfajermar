"use client";
import { Button } from "./ui/button";
import MyImage from "./MyImage";
import Link from "next/link";
import { Input } from "./ui/input";
import { footerData } from "@/conts/footer";
import { toast } from "sonner";
import { Locate } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full   text-[#4F1C17]  items-center max-lg:flex-col gap-5">
      <div className=" flex-col flex items-center justify-center py-10 bg-[#F3E3D7]  gap-5 rounded-lg">
        <div className="text-center space-x-4">
          <h1 className="font-bold text-4xl tracking-tight">
            Request More Information
          </h1>
          <p>Endless Options, We Find Best Deals</p>
        </div>
        <Button className="text-2xl py-6">Contact Us</Button>
      </div>
      <div className="flex justify-between   text-[#4F1C17]  items-center max-lg:flex-col gap-5">
        {" "}
        <div className="flex items-center  justify-between  w-fit gap-5  border flex-col">
          <div className="flex flex-col gap-4 max-md:items-center">
            <Link href="/" className="mx-auto">
              <MyImage
                src={
                  "https://alfajermart.com/wp-content/uploads/2024/05/alfajar-lgo.webp"
                }
                alt="logo"
                width={240}
                height={240}
                className="object-cover "
              />
            </Link>

            <div className="space-x-3">
              <Locate className="text-black inline" />

              <span>
                One Chase Manhattan Plaza New York, NY 10005, USA +1 554 883
                2032
              </span>
            </div>
          </div>
          <div className="flex gap-3 flex-col ">
            <p className="lg:text-xl tracking-tight  font-semibold text-lg ">
              Be the first to know about our new arrivals and exclusive offers.
            </p>
            <form
              className="flex  items-stretch gap-1 "
              onSubmit={(e) => e.preventDefault()}
            >
              <Input placeholder="Enter your mail" className="h-12 w-full" />
              <Button onClick={() => toast("comming soon")} className="h-12">
                Sign up
              </Button>
            </form>
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-md font-medium  mb-4 tracking-wider">
                {footerData.company.title}
              </h3>
              <ul className="space-y-3">
                {footerData.company.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-800 hover:text-gray-600 transition-colors relative inline-block before:content-[''] before:absolute before:bottom-0     before:w-0 before:h-px before:bg-gray-800 before:mr-2 before:transition-all before:duration-300 hover:before:w-full"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-md font-medium  mb-4 tracking-wider">
                {footerData.help.title}
              </h3>
              <ul className="space-y-3">
                {footerData.help.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-800 hover:text-gray-600 transition-colors relative inline-block before:content-[''] before:absolute before:bottom-0   before:w-0 before:h-px before:bg-gray-800 before:mr-2 before:transition-all before:duration-300 hover:before:w-full"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="footer-h3">{footerData.store.title}</h3>
              <ul className="space-y-3">
                {footerData.store.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-800 hover:text-gray-600 transition-colors relative inline-block before:content-[''] before:absolute before:bottom-0   before:w-0 before:h-px before:bg-gray-800 before:mr-2 before:transition-all before:duration-300 hover:before:w-full"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
