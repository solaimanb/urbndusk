"use client";

import Featured from "@/components/home/featured";
import FeaturedAd from "@/components/home/featured-ad";
import Hero from "@/components/home/hero";
import Trending from "@/components/home/trending";
import Testimonials from "@/components/home/testimonials";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function Home() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const scroll = new LocomotiveScroll({
        el: ref.current,
        smooth: true,
      });
    }
  }, []);

  return (
    <div className="p-2" ref={ref} data-scroll-container>
      <Hero />
      <Featured />
      <FeaturedAd />
      <Trending />
      <Testimonials />
    </div>
  );
}
