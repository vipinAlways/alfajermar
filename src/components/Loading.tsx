"use client";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <section className="md:px-10 px-5 relative space-y-4">
      <Skeleton className=" flex justify-between md:px-20 px-5 items-center py-3 max-w-4xl h-12 " />
      <div className="relative flex justify-end items-center px-4 xl:h-[90vh] h-[40vh] rounded-lg overflow-hidden">
        <Skeleton className="absolute inset-0 rounded-lg " />

        <div className="z-10 lg:w-140 flex flex-col gap-4">
          <Skeleton className="h-8 w-32 rounded-md bg-accent-foreground" />

          <div className="space-y-4">
            <Skeleton className="h-10 md:h-14 w-full bg-accent-foreground" />
            <Skeleton className="h-10 md:h-14 w-4/5 bg-accent-foreground" />

            <Skeleton className="h-4 w-full bg-accent-foreground" />
            <Skeleton className="h-4 w-full bg-accent-foreground" />
            <Skeleton className="h-4 w-5/6 bg-accent-foreground" />
          </div>
        </div>
      </div>
      <div className="w-full flex max-xl:flex-col xl:items-stretch items-center justify-between gap-10">
        <div className="md:p-15 xl:p-20 p-5 flex flex-col gap-5 rounded-lg bg-[#D6A67F]/20 backdrop-blur-3xl w-full">
          <Skeleton className="h-5 w-48 rounded-md" />

          <div className="space-y-6">
            <Skeleton className="h-8 lg:h-10 w-3/4" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-5/6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
