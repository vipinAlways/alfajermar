"use client";
import Link from "next/link";
import { Input } from "./ui/input";
import { Heart, User, Home, ShoppingCart, StoreIcon } from "lucide-react";
import { Button } from "./ui/button";
import MyImage from "./MyImage";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";

const NavLinks: Nav[] = [
  {
    name: "Shop",
    href: "/shop",
    icon: <StoreIcon className="size" />,
  },
  {
    name: "",
    href: "/wishlist",
    icon: <Heart className="size" />,
  },
  {
    name: "Cart",
    href: "/cart",
    icon: <ShoppingCart className="size-" />,
  },
];

const Nav = () => {
  const isMobile = useIsMobile();
  
  if (isMobile)
    return (
      <div className="w-full py-3 flex items-center px-10 justify-between">
        <div>
          <Link href="/" className="">
            <MyImage
              src={
                "https://alfajermart.com/wp-content/uploads/2024/05/alfajar-lgo.webp"
              }
              alt="logo"
              width={160}
              height={100}
            />
          </Link>
        </div>
        <nav className="w-full fixed bottom-0 left-1/2 -translate-x-1/2 z-20 flex items-center justify-evenly padd-5">
          <div className="w-full h-20 rounded-xl backdrop-blur-xl dark:bg-[#a2818144] bg-[#dfd5d27a] flex items-center justify-evenly">
            <button className="px-4 py-2 hover:underline text-base flex flex-col items-center ">
              <Home />
            </button>
            {NavLinks.map((link, index) => (
              <button
                key={index}
                className="px-4 py-2 hover:underline text-base flex flex-col items-center "
              >
                {link.icon}
              </button>
            ))}

            <button className="px-4 py-2 hover:underline text-base flex flex-col items-center ">
              <User />
            </button>
          </div>
        </nav>
        <form role="search" className="">
          <Input
            id="search"
            type="search"
            placeholder="Search dry fruits"
            className="w-xl"
            autoComplete="off"
          />
        </form>
        <div className="flex items-center gap-3 ">
          <Heart className="size-6" />
          <ShoppingCart className="size-6" />
        </div>
      </div>
    );
  return (
    <nav
      aria-label="Primary navigation"
      className="flex justify-between md:px-20 px-5 items-center py-3 w-full bg-[#f7ede5af] "
    >
      <div>
        <Link href="/" className="">
          <MyImage
            src={
              "https://alfajermart.com/wp-content/uploads/2024/05/alfajar-lgo.webp"
            }
            alt="logo"
            width={160}
            height={100}
          />
        </Link>
      </div>

      <form role="search" className="">
        <Input
          id="search"
          type="search"
          placeholder="Search dry fruits"
          className="w-3xl p-2"
          autoComplete="off"
        />
      </form>

      <ul className="flex gap-4 items-center">
        <li>
          <Button onClick={() => toast("comming soon")}>Login</Button>
        </li>
        {NavLinks.map((links, index) => (
          <li key={index} className="">
            <Link href={links.href} className="flex  items-center gap-1">
              <span>{links.icon}</span> <span>{links.name}</span>{" "}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
