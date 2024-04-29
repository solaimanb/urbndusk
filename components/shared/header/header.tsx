"use client";

import { AlignLeft, Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/urbndusk-logo-ts.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <header className="py-2 uppercase font-medium border-b lg:border-b-0">
      <div className="container mx-auto flex items-center justify-between ">
        <Sheet>
          <SheetTrigger>
            <AlignLeft size={30} />
          </SheetTrigger>

          <div>
            <Image src={Logo} alt="urbndusk" className="w-20 lg:w-28" />
          </div>

          <div className="flex items-center gap-x-4 lg:text-xl">
            <Link href="/shop" className="hidden lg:flex">
              Shop
            </Link>

            <button>
              <ShoppingBag size={24} />
            </button>
          </div>

          <SheetContent side="left" className="flex flex-col p-0">
            <div className="mt-10 space-y-4 p-4">
              {/* Search Bar */}
              {/* <div className="flex items-center border border-gray-300 rounded-md">
                <Input
                  type="text"
                  autoFocus={false}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-grow px-4 focus:outline-none"
                />
                <Button className="p-2" onClick={handleSearch}>
                  <Search />
                  </Button>
                </div> */}

              <Separator />

              <div className="flex flex-col text-start gap-x-4 text-4xl uppercase space-y-4 font-medium">
                <Link href="/">Home</Link>
                <Link href="/shop">Shop</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
              </div>

              <Separator />

              <div className="flex flex-col text-start gap-y-4 mt-10 lg:mt-20">
                <Link href="/shipping-return">Shipping & Return</Link>
                <Link href="/faq">FAQ</Link>
                <Link href="/terms">Terms and Condition</Link>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </div>

              <Separator />

              <div className="mt-4 flex flex-col gap-y-2">
                <Link href="/sign-in">
                  <Button variant={"outline"} className="w-full">
                    Login
                  </Button>
                </Link>

                <Link href="/sign-up">
                  <Button variant={"outline"} className="w-full">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-auto text-xs font-medium">
              <Separator className="mt-2" />
              <p className="p-2">&copy; {new Date().getFullYear()} URBNDUSK </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
