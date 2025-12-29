"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button, buttonVariants } from "./ui/button";
import MyImage from "./MyImage";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import QuantityInput from "./QuantityInput";

const MyDialog = ({
  className,
  product,
}: {
  className: string;
  product: Product;
}) => {
  const isMobile = useIsMobile();
  const [visibleHeroIndex, setVisibleHeroIndex] = useState<number>(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setVisibleHeroIndex(carouselApi.selectedScrollSnap());
    };

    onSelect();

    carouselApi.on("select", onSelect);

    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  if (isMobile)
    return (
      <div className={cn(className)}>
        <Drawer>
          <DrawerTrigger
            className={cn(buttonVariants({ variant: "default" }), "w-fit ")}
          >
            {" "}
            View Product
          </DrawerTrigger>
          <DrawerContent
            className="px-3 py-1 h-4/5 text-[#4F1C17] "
          >
            <DrawerHeader>
              <DrawerTitle>{product.name}</DrawerTitle>
            </DrawerHeader>
            <div className="flex gap-3 w-full flex-col items-center  overflow-y-auto min-h-96 ">
              <div className="w-full">
                <div className="w-1/2 mx-auto relative">
                  <Carousel
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    className=""
                    setApi={setCarouselApi}
                  >
                    <CarouselContent className="flex gap-6">
                      {Array.from({ length: 3 }).map((img, index) => (
                        <CarouselItem
                          key={index}
                          className="basis-full rounded-lg"
                        >
                          <div className="flex flex-col aspect-square relative items-center space-y-4">
                            <MyImage
                              src={product.image}
                              alt="from"
                              className="rounded-lg"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="flex items-center justify-center gap-2 md:absolute md:bottom-6 md:left-1/2 md:-translate-x-1/2 mt-2">
                      {[1, 2, 3].map((_, i) => (
                        <MyImage
                          key={i}
                          src={product.image}
                          alt={product.name}
                          className={cn(
                            "h-6 w-6 rounded-full transition-all duration-300",
                            i === visibleHeroIndex
                              ? "opacity-100 scale-110"
                              : "opacity-40"
                          )}
                          height={20}
                          width={20}
                        />
                      ))}
                    </div>

                    <CarouselPrevious className="" />
                    <CarouselNext className="" />
                  </Carousel>
                </div>
              </div>

              <div className="px-2 space-y-2 mb-3">
                <h1 className="font-semibold">{product.name}</h1>

                <ul className="list-disc text-sm list-inside">
                  <li className=""> Hand Picked Kashmiri Whole Mirchi</li>
                  <li>
                    Hand Sorted To make sure every Chilli is of good quality
                  </li>
                  <li>
                    Pure Kashmiri Mirchi Whole Pure, No added Color Or
                    Fragrances
                  </li>
                  <li>Big Red Colour Kashmiri Chillis Whole</li>
                </ul>

                <div className="flex items-center gap-1.5 text-base">
                  {product.off ? (
                    <p>
                      {" "}
                      <span className="line-through">
                        {" "}
                        &#8377;{product.minPrice.toFixed(2)}
                      </span>{" "}
                      <span className="text-green-600">
                        &#8377;{product.maxPrice.toFixed(2)}
                      </span>
                    </p>
                  ) : (
                    <p className="text-zinc-600">
                      {" "}
                      &#8377;{product.minPrice.toFixed(2)} - &#8377;
                      {product.maxPrice.toFixed(2)}
                    </p>
                  )}
                  <QuantityInput />
                </div>
                <div className="flex w-full items-center gap-3  px-2">
                  {["100g", "250g", "500g", "1kg"].map((size, index) => (
                    <span
                      className="rounded-lg bg-zinc-200 text-zinc-800 px-2 py-1"
                      key={index}
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <DrawerFooter className="flex items-center justify-center border flex-row ">
              <Button
                onClick={() => toast("comming soon")}
                className="w-fit border border-black"
              >
                Add cart
              </Button>
              <Button
                onClick={() => toast("comming soon")}
                className="w-fit border border-black"
              >
                View More
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    );
  return (
    <div className={className}>
      <Dialog>
        <DialogTrigger
          className={cn(
            buttonVariants({ variant: "default" }),
            "w-full max-md:hidden "
          )}
        >
          {" "}
          View Product
        </DialogTrigger>
        <DialogContent className="max-w-3xl min-w-xl px-4 text-[#4F1C17]  space-y-6 ">
          <DialogHeader>
            <DialogTitle className="text-center px-4">
              {product.name}
            </DialogTitle>
          </DialogHeader>

          <div className="flex gap-6 h-64  w-full">
            <div className="h-full w-1/2  relative">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className=""
                setApi={setCarouselApi}
              >
                <CarouselContent className="flex gap-6">
                  {Array.from({ length: 3 }).map((img, index) => (
                    <CarouselItem key={index} className="basis-full rounded-lg">
                      <div className="flex flex-col aspect-square relative items-center space-y-4">
                        <MyImage
                          src={product.image}
                          alt="from"
                          className="rounded-lg"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex items-center justify-center gap-2 md:absolute md:-bottom-10 md:left-1/2 md:-translate-x-1/2 mt-2">
                  {[1, 2, 3].map((_, i) => (
                    <MyImage
                      key={i}
                      src={product.image}
                      alt={product.name}
                      className={cn(
                        "h-6 w-6 rounded-full transition-all duration-300",
                        i === visibleHeroIndex
                          ? "opacity-100 scale-110"
                          : "opacity-40"
                      )}
                      height={20}
                      width={20}
                    />
                  ))}
                </div>

                <CarouselPrevious className="-left-4" />
                <CarouselNext className="-right-4" />
              </Carousel>
            </div>

            <div className="w-1/2 space-y-5">
              <h1 className="font-semibold">{product.name}</h1>

              <ul className="list-disc text-sm list-inside">
                <li className=""> Hand Picked Kashmiri Whole Mirchi</li>
                <li>
                  Hand Sorted To make sure every Chilli is of good quality
                </li>
                <li>
                  Pure Kashmiri Mirchi Whole Pure, No added Color Or Fragrances
                </li>
                <li>Big Red Colour Kashmiri Chillis Whole</li>
              </ul>

              <div className="flex items-center gap-1.5 text-base">
                {product.off ? (
                  <p>
                    {" "}
                    <span className="line-through">
                      {" "}
                      &#8377;{product.minPrice.toFixed(2)}
                    </span>{" "}
                    <span className="text-green-600">
                      &#8377;{product.maxPrice.toFixed(2)}
                    </span>
                  </p>
                ) : (
                  <p className="text-zinc-600">
                    {" "}
                    &#8377;{product.minPrice.toFixed(2)} - &#8377;
                    {product.maxPrice.toFixed(2)}
                  </p>
                )}
                <QuantityInput />
              </div>
              <div className="flex w-full items-center gap-3  px-2">
                {["100g", "250g", "500g", "1kg"].map((size, index) => (
                  <span
                    className="rounded-lg bg-zinc-200 text-zinc-800 px-2 py-1"
                    key={index}
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={() => toast("comming soon")}>
              Add Cart
            </Button>
            <Button type="submit" onClick={() => toast("comming soon")}>
              View More
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MyDialog;
