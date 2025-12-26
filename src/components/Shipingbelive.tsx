import { features } from "@/conts/features";
import React from "react";

import Image from "next/image";

const Shipingbelive = () => {
  return (
    <div className="bg-[radial-gradient(circle,rgba(143,72,14,1)_0%,rgba(10,1,1,1)_100%)] rounded-3xl px-6 py-4 md:w-4/5">
      <div className=" w-full ">
        <div className="flex flex-wrap items-stretch justify-evenly  ">
          {features.map((feature, index) => {
            return (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center text-center  lg:w-48 w-28 md:w-40 ">
                  <div className={`${feature.color} relative`}>
                    <Image
                      src={feature.image}
                      alt="icon"
                      height={80}
                      width={80}
                      unoptimized
                    />
                  </div>

                  <h3 className="text-white md:text-lg text-sm font-medium mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-white md:text-base text-xs  font-medium">
                    {feature.subtitle}
                  </p>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shipingbelive;
