import React from "react";
import ProductCard from "../shared/product-card";

const products = [
  {
    id: "ct-01",
    image: "/featured-i.jpg",
    secondaryImage: "/featured-i-hvr.jpg",
    name: "CHAQUETA TRUCKER",
    path: "/chaqueta-trucker",
    price: "$170",
  },
  {
    id: "stwd-01",
    image: "/featured-ii.jpg",
    secondaryImage: "/featured-ii-hvr.jpg",
    name: "CHAQUETA STWD",
    path: "/chaqueta-stwd",
    price: "$200",
  },
  {
    id: "scs-01",
    image: "/featured-iii.jpg",
    secondaryImage: "/featured-iii-hvr.jpg",
    name: "SOBRECAMISA SARGA",
    path: "/sobrecamisa-sarga",
    price: "$350",
  },
  {
    id: "rpst-01",
    image: "/featured-iv.jpg",
    secondaryImage: "/featured-iv-hvr.jpg",
    name: "RIPSTOP PARKA",
    path: "/ripstop-parka",
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
