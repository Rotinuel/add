// import EventCard from "@/components/EventCard";
import Accordion from "@/components/Accordion";
import CallToAction from "@/components/CallToAction";
import CompetitionsPage from "@/components/Competitions";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import SponsorsAndEventsSection from "@/components/SponsorsAndEventsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import UnforgettableEvents from "@/components/Unforgattable";
import VotePopup from "@/components/VotePopup";
import WhyChooseADD from "@/components/WhyChooseAdd";


export default function Home() {
  return (
    <div className="">
      <div className="relative aspect-[3/1]">
        <VotePopup />
        <Hero />
        <SponsorsAndEventsSection />
        <UnforgettableEvents />
        {/* <EventCard date={""} type={""} title={""} venue={""} capacity={0} /> */}
        <CompetitionsPage />
        <WhyChooseADD />
        <TestimonialsSection />
        <NewsSection />
        <Accordion />
        <CallToAction />
      </div>
    </div>
  );
}
