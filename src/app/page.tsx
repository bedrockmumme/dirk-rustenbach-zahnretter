import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { LinkTree } from "@/components/link-tree";
import { Stats } from "@/components/stats";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Hero />
      <main className="max-w-md mx-auto px-6 pt-6 pb-12 flex-1 w-full">
        <About />
        <LinkTree />
        <Stats />
      </main>
      <Footer />
    </div>
  );
}
