"use client";
import { Button } from "./ui/button";
import MyImage from "./MyImage";
import Link from "next/link";
import { Input } from "./ui/input";
import { footerData, socialLinks } from "@/conts/footer";
import { toast } from "sonner";
import { Locate } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Footer = () => {
  const isMobile = useIsMobile();
  return (
    <div className="w-full space-y-9">
      <div className="flex items-center justify-between  w-full gap-5 max-md:flex-col">
        <div className="flex flex-col gap-4 max-md:items-center">
          <Link href="/" className="">
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
              One Chase Manhattan Plaza New York, NY 10005, USA +1 554 883 2032
            </span>
          </div>
        </div>
        <div className="flex gap-3 flex-col ">
          <p className="lg:text-xl tracking-tight  font-semibold text-lg ">
            Be the first to know about our new arrivals and exclusive offers.
          </p>
          <form className="flex  items-stretch gap-1 ">
            <Input placeholder="Enter your mail" className="h-12 w-full" />
            <Button onClick={() => toast("comming soon")} className="h-12">
              Sign up
            </Button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-4 tracking-wider">
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
            <h3 className="footer-h3">{footerData.help.title}</h3>
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

          <div>
            <h3 className="footer-h3">FOLLOW US</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-800 hover:text-gray-600 transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
