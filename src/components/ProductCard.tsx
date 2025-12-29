import { Skeleton } from "./ui/skeleton";
import MyImage from "./MyImage";
import MyDialog from "./MyDialog";

const ProductCard = (product: Product) => {
  if (!product.image || !product.name)
    return (
      <div className="group w-80 rounded-lg space-y-2">
        <Skeleton className="relative border w-full h-80 overflow-hidden rounded-lg" />
        <Skeleton className="leading-5 text-lg w-full" />
        <Skeleton className="text-zinc-600 w-3/5" />
      </div>
    );
  return (
    <div className="group xl:w-full lg:w-96 sm:w-full w-full items-center bg-[#C4AD83]  rounded-lg flex flex-col justify-between gap-y-2 spect-square">
      <div className="relative w-full h-48 md:h-52 bg-[#C6B677] overflow-hidden rounded-lg">
        {product.off && (
          <span className="text-red-500 rounded-full size-9 bg-white p-0.5 text-xs absolute top-2 z-40 left-2  flex items-center justify-center">
            -{product.off}%
          </span>
        )}
        <MyImage
          src={product.image}
          alt={product.name}
          className="group-hover:opacity-0  w-auto h-auto opacity-100 transition-all duration-100 ease-linear mx-auto my-2 object-contain rounded-xl"
        />
        <MyImage
          src={
            "https://alfajermart.com/wp-content/uploads/2024/05/alfajar-lgo.webp"
          }
          alt={product.name}
          className="group-hover:opacity-100 opacity-0 transition-all duration-100 ease-linear object-center p-3 object-contain"
        />
      </div>

      <div className="flex flex-col items-center justify-between gap-1.5 p-3 min-h-40">
        <h1 className="xl:text-sm font-bold text-[#3A2A1F] lg:text-2xl text-base text-center">
          {product.name}
        </h1>
        <span className="text-base text-center text-[#6B5A4A]">
          {product.catchLine}
        </span>
        {product.off ? (
          <p>
            {" "}
            <span className="line-through text-zinc-200">
              {" "}
              &#8377;{product.minPrice.toFixed(2)}
            </span>{" "}
            <span className="text-green-600">
              &#8377;{product.maxPrice.toFixed(2)}
            </span>
          </p>
        ) : (
          <p className="text-zinc-200">
            {" "}
            &#8377;{product.minPrice.toFixed(2)} - &#8377;
            {product.maxPrice.toFixed(2)}
          </p>
        )}

        <MyDialog
          className={"duration-100 ease-out w-fit z-50"}
          product={product}
        />
      </div>
    </div>
  );
};

export default ProductCard;
