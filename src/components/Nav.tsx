"use client";
import Link from "next/link";
import { Input } from "./ui/input";
import { Heart, Menu, ShoppingBasket, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import MyImage from "./MyImage";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
const NavLinks: Nav[] = [
  {
    name: "Shop",
    href: "/shop",
    icon: <ShoppingBasket className="size" />,
  },
  {
    name: "",
    href: "/wishlist",
    icon: <Heart className="size" />,
  },
  {
    name: "",
    href: "/cart",
    icon: <ShoppingCart className="size-" />,
  },
];

const Nav = () => {
  const isMobile = useIsMobile();

  if (isMobile)
    return (
      <div className="max-w-md py-3 flex items-center px-5 justify-between">
        <Sheet >
          <SheetTrigger className="text-zinc-100 hidden max-lg:flex">
            <Menu className="text-zinc-700" />
          </SheetTrigger>
          <SheetContent
            side={"left"}
            className="w-60 bg-accent text-accent-foreground"
          >
            <SheetHeader>
              <SheetTitle>Al Fajer Mart</SheetTitle>
              <nav className="flex flex-col gap-y-2 pt-2">
                <Link
                  href={"#"}
                  className="w-full items-center hover:bg-zinc-600 p-1.5 rounded-lg flex text-lg gap-2 font-semibold"
                >
                  <ShoppingBasket className="size-9 " /> Shop
                </Link>
              </nav>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <form role="search" className="">
          <Input
            id="search"
            type="search"
            placeholder="Search dry fruits"
            className="sm:w-64 w-48"
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
      className="flex justify-between md:px-20 px-5 items-center py-3 w-full"
    >
      <div className="nav-brand">
        <Link href="/" className="">
          <MyImage
            src={
              "https://alfajermart.com/wp-content/uploads/2024/05/alfajar-lgo.webp"
            }
            alt="logo"
            width={120}
            height={100}
          />
        </Link>
      </div>

      <form role="search" className="">
        <Input
          id="search"
          type="search"
          placeholder="Search dry fruits"
          className="w-90"
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
