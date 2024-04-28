import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Banner1 from "@/public/banner-i.png";
import Banner2 from "@/public/banner-ii.png";
import Banner3 from "@/public/banner-iii.png";

const images = [Banner1, Banner2, Banner3];

const Hero = () => {
  return (
    <div className="container mx-auto rounded-sm mt-4 px-2 xl:px-0">
      <div className="">
        <Carousel>
          <CarouselContent className="max-h-[50vh]">
            {images.map((image, index) => (
              <CarouselItem key={index} className="">
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
        </Carousel>
      </div>

      <p className="text-lg text-center uppercase mt-10">
        Redefining elegance with a modern twist.
      </p>
    </div>
  );
};

export default Hero;
