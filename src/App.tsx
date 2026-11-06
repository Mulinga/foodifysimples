import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { Impact } from "@/components/Impact";
import { Contact } from "@/components/Contact";
import { SiteFooter } from "@/components/SiteFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main><Hero /><About /><Products /><Impact /><Contact /></main>
      <SiteFooter />
    </div>
  );
}