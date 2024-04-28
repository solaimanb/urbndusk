import React from "react";
import ProductCard from "../shared/product-card";

const products = [
  {
    image: "/featured-i.jpg",
    name: "Heren ZARA",
    price: "$170",
  },
  {
    image: "/featured-ii.jpg",
    name: "FLYDAY Rela",
    price: "$200",
  },
  {
    image: "/featured-iii.jpg",
    name: "North Face",
    price: "$350",
  },
  {
    image: "/featured-iv.jpg",
    name: "Hanbok Vent",
    price: "$300",
  },
];

const Featured = () => {
  return (
    <div className="container px-2 xl:px-0 grid grid-cols-2 md:grid-cols-4 gap-y-20 gap-10 mt-20">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default Featured;
