import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { Impact } from "@/components/Impact";
import { Contact } from "@/components/Contact";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Foodify Simples — Food Waste Composting Veterans" },
      { name: "description", content: "Automatic organic food waste composting machines for Kenyan businesses, institutions and homes. Turning food waste into fertile ground." },
      { property: "og:title", content: "Foodify Simples — Food Waste Composting Veterans" },
      { property: "og:description", content: "Automatic organic food waste composting solutions across Kenya. Closing the loop from kitchen to soil." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://foodifysimples.com" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Foodify Simples" },
      { name: "twitter:description", content: "Automatic organic food waste composting solutions for Kenya." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Products />
        <Impact />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
