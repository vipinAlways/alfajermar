import { features } from "@/conts/features";
import React from "react";
import MyImage from "./MyImage";

const Shipingbelive = () => {
  return (
    <div className="bg-[radial-gradient(circle,rgba(143,72,14,1)_0%,rgba(10,1,1,1)_100%)] rounded-3xl px-6 py-4">
      <div className="max-w-7xl ">
        <div className="flex flex-wrap items-center justify-evenly ">
          {features.map((feature, index) => {
            return (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center text-center">
                  <div className={`${feature.color} relative`}>
                    <MyImage
                      src={feature.image}
                      alt="icon"
                      height={80}
                      width={80}
                    />
                  </div>

                  <h3 className="text-white md:text-lg text-sm font-medium mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-white md:text-base text-xs  font-medium">
                    {feature.subtitle}
                  </p>
                </div>

                {/* {index < features.length - 1 && (
                  <div className="hidden lg:block">
                    <div className="h-full w-px bg-gray-700 mx-auto" />
                  </div>
                )} */}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shipingbelive;
