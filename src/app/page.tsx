import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Preview from "@/components/preview";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-0">
      <div>
        <Navbar />
        <Hero />
        <Preview />
        <Features />
        <Pricing />
        <Footer />
      </div>
    </main>
  );
}
