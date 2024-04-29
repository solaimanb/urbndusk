import React from "react";
import ProductCard from "../shared/product-card";

import Shery from "sheryjs";

const products = [
  {
    image: "/featured-i.jpg",
    secondaryImage: "/featured-i-hvr.jpg",
    name: "CHAQUETA TRUCKER",
    price: "$170",
  },
  {
    image: "/featured-ii.jpg",
    secondaryImage: "/featured-ii-hvr.jpg",
    name: "CHAQUETA STWD",
    price: "$200",
  },
  {
    image: "/featured-iii.jpg",
    secondaryImage: "/featured-iii-hvr.jpg",
    name: "SOBRECAMISA SARGA",
    price: "$350",
  },
  {
    image: "/featured-iv.jpg",
    secondaryImage: "/featured-iv-hvr.jpg",
    name: "RIPSTOP PARKA",
    price: "$300",
  },
];

const Featured = () => {
  Shery.imageEffect(".img", {
    style: 6,
    debug: true,
  });

  // Example usage of sheryjs effect
  Shery.mouseFollower();

  return (
    <div className="container px-2 xl:px-0 grid grid-cols-2 md:grid-cols-4 gap-y-20 gap-10 mt-20 md:mt-40">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default Featured;
