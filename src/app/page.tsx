"use client";
import React, { useEffect, useRef, useState } from "react";
import BestProduct from "@/components/BestProduct";
import MyImage from "@/components/MyImage";
import NewArrivalSection from "@/components/NewArrivalSection";
import { certificates } from "@/conts/certificates";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { mainProducts } from "@/conts/mainProducts";
import Shipingbelive from "@/components/Shipingbelive";
import { heroSetion } from "@/conts/herosection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CarouselApi } from "@/components/ui/carousel";
import Faq from "@/components/Faq";

export default function Home() {
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [visibleHeroIndex, setVisibleHeroIndex] = useState<number>(0);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).dataset.id;
            if (id) {
              setVisibleElements((prev) => new Set(prev).add(id));
            }
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    observerRef.current = observer;

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

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

  const isVisible = (id: string) => visibleElements.has(id);

  return (
    <>
      <section className="md:px-10 px-5 relative space-y-6">
        <div className="overflow-hidden w-full no-scrollbar bg-[#d88b4c] text-white py-2 -z-20">
          <div className="marquee">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex">
                {Array(5)
                  .fill(" | Offers are live | ")
                  .map((text, index) => (
                    <span
                      key={`${i}-${index}`}
                      className="px-1.5 whitespace-nowrap text-sm font-medium"
                    >
                      {text}
                    </span>
                  ))}
              </div>
            ))}
          </div>
        </div>
        <Carousel
          setApi={setCarouselApi}
          className="relative group"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="flex gap-6 items-stretch">
            {heroSetion.map((hero, index) => (
              <CarouselItem key={index} className="basis-full w-full">
                <div className="relative flex justify-end items-center h-72 xl:h-[70vh] w-full">
                  <MyImage
                    src={hero.src}
                    alt="hero-image"
                    className="absolute inset-0 -z-10 object-cover object-center rounded-lg"
                    priority
                  />

                  <div className="absolute inset-0 bg-black/40 lg:bg-black/10 rounded-lg" />

                  <div className="z-10 lg:w-140 flex flex-col gap-4 p-4 text-white">
                    <span className="bg-white/10 backdrop-blur-3xl p-1.5 w-fit rounded-md text-sm">
                      Pure Healthy
                    </span>

                    <h1 className="md:text-5xl text-2xl font-bold">
                      Kashmiri Dry Fruits & Himalayan Shilajit
                    </h1>

                    <p className="md:text-lg text-sm text-zinc-100">
                      {hero.para}
                    </p>
                    <Button className="">
                      Check Now <ArrowRight />
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex gap-2 h-6 justify-center items-center md:absolute md:bottom-6 md:left-1/2 md:-translate-x-1/2 max-md:mt-2">
            {heroSetion.map((_, i) => (
              <span
                key={i}
                className={cn(
                  "rounded-full transition-all duration-300",
                  i === visibleHeroIndex
                    ? "bg-white size-5"
                    : "bg-white/40 size-3"
                )}
              />
            ))}
          </div>

          <CarouselPrevious className="absolute left-6 top-1/2 -translate-y-1/2 invisible group-hover:visible pointer-events-none group-hover:pointer-events-auto transition-all duration-300 ease-linear bg-white/10" />
          <CarouselNext className="absolute right-6 top-1/2 -translate-y-1/2 invisible group-hover:visible pointer-events-none group-hover:pointer-events-auto transition-all duration-300 ease-linear bg-white/10" />
        </Carousel>
      </section>

      <section
        data-animate
        data-id="shipping"
        className={cn(
          `lg:px-20 md:px-10 px-5  transition-all duration-700 ease-out `,
          isVisible("shipping")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        )}
      >
        <div className="bg-[#F3E3D7] lg:p-7 p-2 lg:py-20 py-5 w-full flex flex-col items-center justify-center gap-12 rounded-lg ">
          <div className="flex max-md:flex-col items-stretch justify-evenly gap-6">
            <div className="lg:w-1/3 w-full flex flex-col items-center lg:gap-5 gap-2  ">
              <div className="flex flex-col items-center w-fit">
                <h1 className="text-5xl font-bold ">Al Fajer Mart</h1>
                <h3 className="tracking-widest ">Dry Fruits, saffron & more</h3>
              </div>
              <p className="font-semibold">Established in 2015</p>
            </div>

            <div className="lg:w-1/2 text-center space-y-5">
              <h1 className="text-3xl font-bold">Top Quality Products</h1>

              <p className="text-zinc-800 lg:text-xl">
                Our company is active in produce, process, packaging and
                supplying High Quality and Organic Kashmiri Pure Saffron,
                Shilajit, Honey and more. from Kashmir.
              </p>
            </div>
          </div>
          <Shipingbelive />
        </div>
      </section>

      <section
        data-animate
        data-id="products"
        className={`md:px-20 px-5 space-y-8 py-10 transition-all duration-700 ease-out ${
          isVisible("products")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <h1 className="font-bold text-4xl text-center">Our Products</h1>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="md:w-full w-4/5 mx-auto"
        >
          <CarouselContent className="flex gap-6">
            {mainProducts.map(({ name, image, bg }, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/3 xl:basis-1/5 px-4 "
              >
                <div className="flex flex-col items-center space-y-4">
                  <div
                    className="lg:w-60 aspect-square  w-48 rounded-full overflow-hidden flex items-center justify-center"
                    style={{ backgroundColor: bg }}
                  >
                    <div className="w-4/5 aspect-square relative">
                      <MyImage
                        src={image}
                        alt={name}
                        className="object-contain rounded-full"
                        height={180}
                        width={180}
                      />
                    </div>

                    <h4 className="text-white md:text-lg text-sm font-semibold absolute bottom-4 text-center z-20">
                      {name}
                    </h4>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <section
        data-animate
        data-id="best-product"
        className={`md:px-20 px-5 transition-all duration-700 ease-out ${
          isVisible("best-product")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <BestProduct />
      </section>

      <section
        data-animate
        data-id="new-arrival"
        className={`md:px-20 px-5 transition-all duration-700 ease-out ${
          isVisible("new-arrival")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <NewArrivalSection />
      </section>

      <section
        data-animate
        data-id="certificates"
        className={`md:px-20 px-5 space-y-10 transition-all duration-700 ease-out ${
          isVisible("certificates")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <h1 className="font-bold lg:text-5xl text-3xl text-center">
          CERTIFIED BY
        </h1>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-[80%] mx-auto"
        >
          <CarouselContent className="flex gap-6">
            {certificates.map(({ certificate, label }, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="flex flex-col items-center space-y-4">
                  <MyImage
                    src={label}
                    alt="from"
                    height={120}
                    width={120}
                    className="rounded-full"
                  />

                  <div className="relative w-96 aspect-3/2 rounded-lg overflow-hidden">
                    <MyImage
                      src={certificate}
                      alt="certificate"
                      className="object-contain"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="max-lg:hidden" />
          <CarouselNext className="max-lg:hidden" />
        </Carousel>
      </section>

      <section
        data-animate
        data-id="faq"
        className={cn(
          `lg:px-20 md:px-10 px-5  transition-all duration-700 ease-out `,
          isVisible("shipping")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        )}
      >
        <Faq />
      </section>
    </>
  );
}
