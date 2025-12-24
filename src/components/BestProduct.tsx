import { shilajit } from "@/conts/shilajitProducts";
import ProductCard from "./ProductCard";

const BestProduct = () => {
  return (
    <div className="w-full flex max-xl:flex-col xl:items-stretch items-center justify-between gap-10">
      <div className="md:p-15 xl:p-20 p-5 flex flex-col gap-5 bg-[#D6A67F]/20 backdrop-blur-3xl rounded-lg">
        <span>100% Best Quality Shilajit</span>

        <div className="space-y-6 ">
          <h1 className="lg:text-4xl text-2xl font-bold">
            Pure Himalayan Shilajit
          </h1>
          <p className="lg:text-lg text-base ">
            After being sourced from the great Himalayan ranges in a short
            harvesting period from these extreme high altitudes, it is
            traditionally purified using the ancient Shodhana technique using
            only Triphala in natural spring water and the sun.
          </p>
        </div>
      </div>

      <div className="flex gap-5 items-center w-full justify-between">
        {shilajit.map((product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BestProduct;
