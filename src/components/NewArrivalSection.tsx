import { newArrivalProducts } from "@/conts/newArrivalProducts";

import ProductCard from "./ProductCard";

const NewArrivalSection = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center gap-1">
        <h1 className="lg:text-5xl text-3xl font-bold">New Arrival</h1>

        <h4 className="md:text-xl text-base  font-semibold text-zinc-600 text-center">
          Get a taste of something new! Here we introduce our latest additions.
        </h4>
      </div>

      <div className="flex flex-wrap md:items-stretch max-sm:mx-auto gap-5 gap-y-8 py-4 px-2 lg:justify-between justify-center">
        {newArrivalProducts.map((product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivalSection;
