import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";

interface Product {
  image: string;
  name: string;
  price: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="border-none rounded-none space-y-2">
      <CardContent className="p-0 h-full">
        <Image
          src={product?.image}
          alt="product"
          height={500}
          width={500}
          className="w-full h-full object-cover"
        />
      </CardContent>
      <CardFooter className="px-2 flex flex-col items-start">
        <p className="font-semibold">{product?.name}</p>
        <p className="text-gray-700">{product?.price}</p>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
