import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
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
    </main>
  );
}
