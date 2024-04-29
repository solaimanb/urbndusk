import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto bg-black text-white mt-20 xl:mt-40 pt-20 pb-4 rounded-t-sm  gap-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="w-full mt-4">
          <h4 className="text-lg font-bold uppercase">Join Our Newsletter</h4>
          <form>
            <Input
              type="email"
              placeholder="john@urbndusk.com"
              className="w-full mt-2"
            />
            <Button
              type="submit"
              variant="outline"
              className="w-full mt-2 bg-black text-sm font-semibold"
            >
              Subscribe
            </Button>
          </form>
        </div>

        <div className="w-full h-full p-4">
          <h4 className="text-lg font-semibold">Need Help?</h4>
          <ul className="text-sm space-y-1 mt-2 opacity-80">
            <li>Contact Us</li>
            <li>Help Center</li>
            <li>Email Support</li>
            <li>FAQ</li>
            <li>Send Us Feedback</li>
          </ul>
        </div>

        <div className="w-full h-full p-4">
          <h4 className="text-lg font-semibold">Other Links</h4>
          <ul className="text-sm space-y-1 mt-2 opacity-80">
            <li>Gift Card</li>
            <li>Our Story</li>
            <li>Affiliate Program</li>
            <li>Reviews</li>
            <li>Copyright Notice</li>
          </ul>
        </div>

        <div className="w-full h-full p-4">
          <h4 className="text-lg font-semibold">Legal</h4>
          <ul className="text-sm space-y-1 mt-2 opacity-80">
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Security Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>

      <Separator className="mt-10 opacity-25" />

      <div className="">
        <p className="text-xs mt-4 font-medium">
          &copy; {new Date().getFullYear()} Urbndusk. All Rights Reserved. By{" "}
          <a
            href="https://www.cybertong.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 font-semibold"
          >
            CYBERTONG
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
