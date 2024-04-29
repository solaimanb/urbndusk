import React from "react";
import Character from "@/public/featured-ad-character-back.png";
import Image from "next/image";
import { Separator } from "../ui/separator";

import Star from "@/public/star_sparkle.png";

const FeaturedAd = () => {
  return (
    <div className="container mx-auto mt-40 lg:mt-80 px-0">
      <h2 className="text-xl md:text-2xl font-medium uppercase text-center py-4 flex flex-row items-center whitespace-nowrap gap-x-4 overflow-hidden">
        <Image
          src={Star}
          alt="star_sale"
          height={50}
          width={50}
          className="h-12 w-12"
        ></Image>
        The First Citizen Preview Sale
        <Separator />
      </h2>

      <div className="relative flex items-center justify-between w-full bg-black rounded-sm h-44 lg:h-72 px-16">
        <div className=" text-white space-y-4">
          <p className="text-2xl lg:text-3xl font-medium uppercase">Flat</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold flex justify-center gap-x-2 max-w-40">
            50%
          </h2>
          <p className="text-2xl lg:text-3xl font-medium uppercase">Off</p>
        </div>

        <div className="w-full">
          <Image
            src={Character}
            alt="featured-ad-character"
            height={800}
            width={800}
            className="absolute bottom-0 right-0 w-40 lg:w-80 object-cove z-50"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default FeaturedAd;
