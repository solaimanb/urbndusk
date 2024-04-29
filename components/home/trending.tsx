import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";

import Banner1 from "@/public/featured-i.jpg";
import Banner2 from "@/public/featured-ii.jpg";
import Banner3 from "@/public/featured-iii.jpg";
import Banner4 from "@/public/featured-i-hvr.jpg";
import Banner5 from "@/public/featured-ii-hvr.jpg";
import Banner6 from "@/public/featured-iv-hvr.jpg";

const images = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6];

const Trending = () => {
  return (
    <div className="mt-20 md:mt-40 bg-urbnbrown py-10 rounded-sm">
      <h2 className="text-2xl uppercase text-center text-white font-semibold pb-10">
        Trending Now
      </h2>

      <div className="container mx-auto">
        <Carousel>
          <CarouselContent className="max-h-[50vh]">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="basis-2/3 md:basis-1/3 xl:basis-1/4"
              >
                <Image
                  src={image}
                  alt={"banner"}
                  height={2048}
                  width={2048}
                  className="bg-slate-100 h-full w-full rounded-md object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Trending;
