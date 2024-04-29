import Featured from "@/components/home/featured";
import FeaturedAd from "@/components/home/featured-ad";
import Hero from "@/components/home/hero";
import Trending from "@/components/home/trending";

export default function Home() {
  return (
    <div className="p-2">
      <Hero />
      <Featured />
      <FeaturedAd />
      <Trending />
    </div>
  );
}
