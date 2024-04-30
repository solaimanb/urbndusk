"use client";

import Image from "next/image";
import React from "react";

import Imageee from "@/public/featured-ii.jpg";
import { Button } from "@/components/ui/button";
import Featured from "@/components/home/featured";
import { Separator } from "@/components/ui/separator";
import { userStore } from "@/stores/user";

const ProductIdPage = ({ params }: { params: { productId: string } }) => {
  const user = userStore((state: any) => state.user);
  const updateUser = userStore((state: any) => state.updateUser);

  const handleAddToCart = () => {
    console.log("Adding to cart:", params.productId);
    updateUser({ id: user.id, cart: [...user.cart, params.productId] });
  };

  return (
    <div className="container ">
      <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-4">
        <div className="border p-2">
          <Image
            src={Imageee}
            alt={params?.productId}
            height={1024}
            width={2024}
            className="img w-full h-full object-cover rounded-sm transition-all duration-500 ease-in-out"
          />
        </div>

        <div className="p-2 space-y-8">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-4xl xl:text-5xl font-semibold">
              {params.productId}
            </h1>

            <h4 className="text-xl md:text-2xl font-medium">$260.00 USD</h4>
          </div>

          <div className="space-y-2">
            <p>Select Size</p>

            <div className="space-x-2">
              <Button variant={"outline"} className="rounded-sm">
                Small
              </Button>
              <Button variant={"outline"} className="rounded-sm">
                Medium
              </Button>
              <Button variant={"outline"} className="rounded-sm">
                Large
              </Button>
            </div>
          </div>

          <div className="">
            <Button
              variant={"outline"}
              className="w-full rounded-sm"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>

          <div className="">
            <div>
              <h3 className="font-semibold text-lg">Product Details</h3>
              <p>
                Our Classic Cotton T-Shirt is made from 100% organic cotton.
                It&apos;s soft, breathable, and perfect for everyday wear.
              </p>
            </div>

            <div>
              <h3>Material & Care</h3>
              <p>100% Organic Cotton</p>
              <p>Machine wash</p>
            </div>

            <div>
              <h3>Size & Fit</h3>
              <p>Model is 6&apos;1&quot;/185cm and is wearing a size Medium</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20">
        <Separator className="my-4" />
        <h2 className="text-3xl font-semibold">You may also like</h2>
        <Featured />
      </div>
    </div>
  );
};

export default ProductIdPage;
