"use client";

import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  image: string;
  secondaryImage: string;
  name: string;
  price: string;
  path: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/products/${product?.id}`}>
      <Card className="border-none rounded-sm space-y-2 h-full">
        <CardContent className="p-0 h-full overflow-hidden">
          <Image
            src={isHovered ? product?.secondaryImage : product?.image}
            alt="product"
            height={500}
            width={500}
            className="img w-full h-full object-cover rounded-sm transition-all duration-500 ease-in-out"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </CardContent>

        <CardFooter className="px-2 flex flex-col items-start gap-y-1">
          <p className="font-semibold md:text-xl">{product?.name}</p>
          <p className="text-gray-700 md:text-lg">{product?.price}</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
