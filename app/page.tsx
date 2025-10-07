import EventCard from "@/components/EventCard";
import Hero from "@/components/Hero";
import SponsorsAndEventsSection from "@/components/SponsorsAndEventsSection";
import UnforgettableEvents from "@/components/Unforgattable";
import VotePopup from "@/components/VotePopup";


export default function Home() {
  return (
    <div className="">
      <div className="relative aspect-[3/1]">
        <VotePopup />
        <Hero />
        <SponsorsAndEventsSection />
        <UnforgettableEvents />
        {/* <EventCard date={""} type={""} title={""} venue={""} capacity={0} /> */}
      </div>
    </div>
  );
}
