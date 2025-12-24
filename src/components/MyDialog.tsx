"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
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
import { Code } from "lucide-react";
import { Button } from "./ui/button";
import MyImage from "./MyImage";
import { toast } from "sonner";

const MyDialog = ({
  className,
  product,
}: {
  className: string;
  product: Product;
}) => {
  const isMobile = useIsMobile();

  if (isMobile)
    return (
      <div className={className}>
        <Drawer>
          <DrawerTrigger>
            {" "}
            <Code className="size-10 text-zinc-200 " />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button onClick={() => toast("comming soon")}>Learn More</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    );
  return (
    <div className={className}>
      <Dialog>
        <DialogTrigger>
          {" "}
          <Code className="size-10 text-zinc-200 " />{" "}
        </DialogTrigger>
        <DialogContent className="max-w-3xl min-w-xl">
          <DialogHeader>
            <DialogTitle className="text-center">{product.name}</DialogTitle>
          </DialogHeader>

          <div className="flex gap-3 h-64 w-full">
            <div className="h-full w-1/2 relative">
              <MyImage src={product.image} alt={product.name} />
            </div>

            <div className="w-1/2">
              <h1>{product.name}</h1>
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

              <ul className="list-disc list-inside">
                <li> Hand Picked Kashmiri Whole Mirchi</li>
                <li>
                  Hand Sorted To make sure every Chilli is of good quality
                </li>
                <li>
                  Pure Kashmiri Mirchi Whole Pure, No added Color Or Fragrances
                </li>
                <li>Big Red Colour Kashmiri Chillis Whole</li>
              </ul>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" onClick={() => toast("comming soon")}>
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" onClick={() => toast("comming soon")}>
              Learn More
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MyDialog;
