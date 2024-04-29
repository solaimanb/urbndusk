import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Star, StarHalf } from "lucide-react";
import React from "react";

const reviews = [
  {
    name: "Sophia",
    rating: 5,
    comment:
      "The quality of the clothes from urbdusk is exceptional. I love their attention to detail and the fit is always perfect.",
    createdAt: "2024-04-29",
  },
  {
    name: "Liam",
    rating: 4,
    comment:
      "I recently bought a suit from urbdusk. The fabric feels premium and it fits well. However, the delivery took longer than expected.",
    createdAt: "2021-10-10",
  },
  {
    name: "Olivia",
    rating: 5,
    comment:
      "I'm in love with urbdusk's collection. Their designs are elegant and timeless. I always get compliments when I wear their pieces.",
    createdAt: "2024-04-29",
  },
  {
    name: "Noah",
    rating: 4,
    comment:
      "Good quality apparel, but a bit on the pricey side. However, you definitely get what you pay for.",
    createdAt: "2024-04-29",
  },
  {
    name: "Emma",
    rating: 5,
    comment:
      "Urbndusk is my go-to brand for all my wardrobe needs. Their clothes are stylish, comfortable, and durable.",
    createdAt: "2024-04-29",
  },
  {
    name: "Ava",
    rating: 4,
    comment:
      "Urbndusk's clothing line is truly unique. I love their style, but I wish they had more color options.",
    createdAt: "2024-04-29",
  },
  {
    name: "Isabella",
    rating: 5,
    comment:
      "I bought a dress from urbdusk for a special occasion and it was absolutely stunning. The fabric, the cut, the design - everything was perfect.",
    createdAt: "2024-04-29",
  },
  {
    name: "Lucas",
    rating: 4,
    comment:
      "Their clothes are well-made and stylish. However, I had to exchange a shirt due to size issues. The process was smooth though.",
    createdAt: "2024-04-29",
  },
  {
    name: "Mia",
    rating: 5,
    comment:
      "I'm a big fan of urbdusk. Their clothes are not only fashionable but also comfortable to wear. I highly recommend them.",
    createdAt: "2024-04-29",
  },
  {
    name: "Ethan",
    rating: 4,
    comment:
      "Urbndusk offers a great selection of high-quality apparel. I just wish they had more sales or discounts.",
    createdAt: "2024-04-29",
  },
];

const Testimonials = () => {
  return (
    <div className="container mx-auto mt-20 xl:mt-40">
      <h1 className="flex items-center justify-center gap-x-4">
        Excellence
        <span className="flex">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </span>
        4.7 based on 1380+ reviews
      </h1>

      <div className="mt-10">
        <Carousel>
          <CarouselContent className="max-h-[50vh]">
            {reviews?.map((review, index) => (
              <CarouselItem
                key={index}
                className="min-h-60 basis-2/3 md:basis-1/3 xl:basis-1/4"
              >
                <Card className="border-none h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-x-2 text-base">
                      {review.name}
                      <span className="flex">
                        {[...Array(Math.floor(review.rating))].map((e, i) => (
                          <Star key={i} size={15} className="" />
                        ))}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{review?.comment}</CardDescription>
                  </CardContent>

                  <CardFooter className="text-xs font-medium mt-auto flex justify-between">
                    <span></span>
                    <span className="">{review?.createdAt}</span>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
