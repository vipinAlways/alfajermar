import { newArrivalProducts } from "@/conts/newArrivalProducts";

import ProductCard from "./ProductCard";

const NewArrivalSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-5xl font-bold">New Arrival</h1>

        <h4 className="md:text-xl text-base  font-semibold text-zinc-600 text-center">
          Get a taste of something new! Here we introduce our latest additions.
        </h4>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4  ites-stretch max-sm:mx-auto  md:justify-stretc gap-4 justify-center">
        {newArrivalProducts.map((product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivalSection;
