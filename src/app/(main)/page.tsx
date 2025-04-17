import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
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
    </main>
  );
}
