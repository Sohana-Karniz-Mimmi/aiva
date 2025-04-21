import EncourageAction from "@/components/Home/EncourageAction";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import HowItWork from "@/components/Home/HowItWorks";
import InstantEngagement from "@/components/Home/InstantEngagement";
import Revolutionize from "@/components/Home/Revolutionize/Revolutionize";
import Solution from "@/components/Home/Solution/Solution";
import Unleashing from "@/components/Home/Unleashing";


export default function Home() {
  return (
    <main className="w-full ">
      <Hero />
      <Revolutionize />
      <Solution />
      <Unleashing />
      <Features />
      <InstantEngagement />
      <HowItWork />
      <EncourageAction />
    </main>
  );
}
