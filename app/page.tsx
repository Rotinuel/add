import Events from "@/components/Events";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="relative aspect-[3/1] mb-12">
        <Hero />
        <Events />
      </div>
    </div>
  );
}
