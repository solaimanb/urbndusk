"use client";

import { AlignLeft, Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/urbndusk-logo-ts.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Perform your search here. This could involve calling an API, filtering data, etc.
    console.log(`Searching for: ${searchTerm}`);
  };
  return (
    <header className="py-4 uppercase font-medium border-b lg:border-b-0">
      <div className="container mx-auto flex items-center justify-between ">
        <Sheet>
          <SheetTrigger>
            <AlignLeft size={30} />
          </SheetTrigger>

          <div>
            <Image src={Logo} alt="urbndusk" className="w-20 lg:w-28" />
          </div>

          <div className="flex items-center gap-x-4 lg:text-xl">
            <Link href="/shop">Shop</Link>

            <button>
              <ShoppingBag size={24} />
            </button>
          </div>

          <SheetContent side="left">
            <div className="mt-10 space-y-4">
              {/* Search Bar */}
              <div className="flex items-center border border-gray-300 rounded-md">
                <Input
                  className="flex-grow px-4"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button className="p-2" onClick={handleSearch}>
                  <Search />
                </Button>
              </div>

              <div className="flex flex-col text-start gap-x-4 lg:text-xl">
                <Link href="/shop">Shop</Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
