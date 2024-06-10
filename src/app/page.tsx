import Features from "@/components/features";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <div>
        <Navbar />
        <Hero />
        <Features />
      </div>
    </main>
  );
}
