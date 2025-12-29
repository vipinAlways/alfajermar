"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import MyImage from "./MyImage";

const MyCarousel = (data: Data[]) => {
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
  return (
    <Carousel
      setApi={setCarouselApi}
      className="relative group"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="flex gap-6 items-stretch">
        {data.map((hero, index) => (
          <CarouselItem key={index} className="basis-full w-full">
            <div className="relative flex justify-end items-center h-72 xl:h-[70vh] w-full">
              {hero.src.map((img, i) => (
                <MyImage
                  src={img}
                  alt="hero-image"
                  className="absolute inset-0 -z-10 object-cover object-center rounded-lg"
                  priority
                />
              ))}

              <div className="absolute inset-0 bg-black/40 lg:bg-black/10 rounded-lg" />

              <div className="z-10 lg:w-140 flex flex-col gap-4 p-4 text-white">
                <span className="bg-white/10 backdrop-blur-3xl p-1.5 w-fit rounded-md text-sm">
                  Pure Healthy
                </span>

                <h1 className="md:text-5xl text-2xl font-bold">
                  Kashmiri Dry Fruits & Himalayan Shilajit
                </h1>

                <p className="md:text-lg text-sm text-zinc-100">{hero.para}</p>
                <Button className="">
                  Check Now <ArrowRight />
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="flex gap-2 h-6 justify-center items-center md:absolute md:bottom-6 md:left-1/2 md:-translate-x-1/2 max-md:mt-2">
        {data.map((_, i) => (
          <span
            key={i}
            className={cn(
              "rounded-full transition-all duration-300",
              i === visibleHeroIndex ? "bg-[#D88B4C] size-5" : "bg-white size-3"
            )}
          />
        ))}
      </div>

      <CarouselPrevious className="absolute left-6 top-1/2 -translate-y-1/2 invisible group-hover:visible pointer-events-none group-hover:pointer-events-auto transition-all duration-300 ease-linear bg-white/10" />
      <CarouselNext className="absolute right-6 top-1/2 -translate-y-1/2 invisible group-hover:visible pointer-events-none group-hover:pointer-events-auto transition-all duration-300 ease-linear bg-white/10" />
    </Carousel>
  );
};

export default MyCarousel;
