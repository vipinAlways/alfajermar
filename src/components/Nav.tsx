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
    icon: <StoreIcon className="size-5" />,
  },
  {
    name: "",
    href: "/wishlist",
    icon: <Heart className="size-5" />,
  },
  {
    name: "Cart",
    href: "/cart",
    icon: <ShoppingCart className="size-5" />,
  },
];

const Nav = () => {
  const isMobile = useIsMobile();

  // Mobile Layout
  if (isMobile) {
    return (
      <>
        {/* Top bar with logo and search */}
        <div className="w-full py-3 px-5 flex items-center justify-between gap-3">
          <Link href="/" className="shrink-0">
            <MyImage
              src="https://alfajermart.com/wp-content/uploads/2024/05/alfajar-lgo.webp"
              alt="logo"
              width={60}
              height={60}
            />
          </Link>

          <form role="search" className=" max-w-sm">
            <Input
              id="search"
              type="search"
              placeholder="Search"
              className="maxw-full text-xs p-1"
              autoComplete="off "
            />
          </form>
          <Button onClick={() => toast("coming soon")} className="text-xs py-1">
            Login
          </Button>
        </div>

        {/* Bottom Navigation Bar */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 pb-safe">
          <div className="w-full h-16 rounded-t-2xl backdrop-blur-xl dark:bg-[#a2818144] bg-[#dfd5d27a] flex items-center justify-evenly border-t border-white/20">
            <Link
              href="/"
              className="px-4 py-2 hover:bg-white/10 rounded-lg transition-colors flex flex-col items-center justify-center"
            >
              <Home className="size-6" />
            </Link>

            {NavLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="px-4 py-2 hover:bg-white/10 rounded-lg transition-colors flex flex-col items-center justify-center"
              >
                {link.icon}
              </Link>
            ))}

            <button className="px-4 py-2 hover:bg-white/10 rounded-lg transition-colors flex flex-col items-center justify-center">
              <User className="size-6" />
            </button>
          </div>
        </nav>
      </>
    );
  }

  // Desktop Layout
  return (
    <nav
      aria-label="Primary navigation"
      className="flex justify-between md:px-20 px-5 items-center py-3 w-full bg-[#f7ede5af]"
    >
      <Link href="/" className="shrink-0">
        <MyImage
          src="https://alfajermart.com/wp-content/uploads/2024/05/alfajar-lgo.webp"
          alt="logo"
          width={160}
          height={100}
        />
      </Link>

      <form role="search" className="flex-1 max-w-2xl mx-8">
        <Input
          id="search"
          type="search"
          placeholder="Search dry fruits"
          className="w-full p-2"
          autoComplete="off"
        />
      </form>

      <ul className="flex gap-4 items-center shrink-0">
        <li>
          <Button onClick={() => toast("coming soon")}>Login</Button>
        </li>
        {NavLinks.map((links, index) => (
          <li key={index}>
            <Link href={links.href} className="flex items-center gap-1">
              <span>{links.icon}</span> <span>{links.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
