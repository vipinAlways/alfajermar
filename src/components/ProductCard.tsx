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
    <div className="group xl:w-80 lg:w-96 sm:w-72 w-52 rounded-lg space-y-2 aspect-square">
      <div className="relative border w-full  aspect-square overflow-hidden rounded-lg">
        <MyDialog
          className={
            "absolute right-2 bottom-2 md:opacity-0 group-hover:opacity-100  duration-100 ease-out -rotate-45"
          }
          product={product}
        />

        {product.off && (
          <span className="text-red-500 rounded-full size-9 bg-white p-0.5 text-xs absolute top-2 left-2 flex items-center justify-center">
            -{product.off}%
          </span>
        )}
        <MyImage
          src={product.image}
          alt={product.name}
          className="group-hover:scale-105 transition-all duration-100 ease-linear -z-10 absolute top-0 left-0 object-cover"
        />
      </div>

      <p className="xl:text-lg lg:text-2xl text-base">{product.name}</p>
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
    </div>
  );
};

export default ProductCard;
