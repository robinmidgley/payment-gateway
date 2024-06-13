import Features from "@/components/features";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Preview from "@/components/preview";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <div>
        <Navbar />
        <Hero />
        <Preview />
        <Features />
        <Pricing />
      </div>
    </main>
  );
}
