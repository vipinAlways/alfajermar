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

export default function Home() {
  return (
    <>
      <section className="md:px-10 px-5">
        <div className="rounded-lg relative flex justify-end items-center max-lg:aspect-3/2 xl:h-[90vh] w-full">
          <MyImage
            src={
              "https://alfajermart.com/wp-content/uploads/2024/09/Untitled-design.jpg?id=38200"
            }
            alt={"hero-image"}
            className="rounded-lg object-cover object-center absolute top-0 left-0 -z-10"
            priority={true}
          />
          <div className="absolute inset-0 bg-black/40 lg:bg-black/10 rounded-lg" />

          <div className="z-10 lg:w-140 flex flex-col  md:gap-4 p-4 text-white">
            <span className="bg-white/10 backdrop-blur-3xl p-1.5 max-md:text-sm w-fit rounded-md ">
              Pure Healthy
            </span>
            <div className="space-y-4 ">
              <h1 className="md:text-5xl text-2xl font-bold   ">
                Kashmiri Dry Fruits & Himalayan Shilajit
              </h1>
              <p className="md:text-lg text-sm  text-zinc-100">
                Don&#39;t get stuck with fake products! We are a Kashmir-based
                distributor of authentic Shilajit, premium saffron, and
                high-quality dry fruits. With us, you get genuine products
                straight from the source. First try, then trust - experience the
                difference!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:px-20 md:px-10 px-5">
        <Shipingbelive />
      </section>

      <section className="md:px-20 px-5 space-y-8 py-10 ">
        <h1 className="font-bold text-4xl  text-center">Our Products</h1>
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
                className="basis-full sm:basis-1/3 xl:basis-1/5 "
              >
                <div className="flex flex-col items-center space-y-4">
                  <div
                    className="relative lg:w-64 lg:h-64 h-48 w-48 rounded-full overflow-hidden flex items-center justify-center"
                    style={{ backgroundColor: bg }}
                  >
                    <MyImage
                      src={image}
                      alt={name}
                      className="object-contain rounded-full z-0"
                      height={180}
                      width={180}
                    />

                    <h4 className="text-white md:text-lg text-sm font-semibold absolute bottom-4 text-center z-20 ">
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
      <section className="md:px-20 px-5 ">
        <BestProduct />
      </section>

      <section className="md:px-20 px-5">
        <NewArrivalSection />
      </section>

      <section className="md:px-20 px-5 space-y-10">
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

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </>
  );
}
