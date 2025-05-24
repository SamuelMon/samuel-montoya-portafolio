import Education from "@/components/organisms/Education";
import Footer from "@/components/organisms/Footer";
import Hero from "@/components/organisms/Hero";
import Knowledge from "@/components/organisms/Knowledge";
import {
  DesktopLinksItems,
  MobileLinksItems,
} from "@/components/organisms/Links";
import Portfolio from "@/components/organisms/Portfolio";

export default function Home() {
  return (
    <div className="flex lg:flex-row items-start justify-between min-h-screen bg-gray-200">
      <div className="w-[20%]"></div>
      {/* Contenido principal */}
      <div className="flex flex-col items-center justify-center gap-36 w-full md:w-[90%] lg:w-[80%] xl:w-[70%] mx-auto px-4 lg:px-8">
        <Hero />
        <Knowledge />
        <Education />
        <Portfolio />
        <MobileLinksItems />
        <Footer />
      </div>
      <DesktopLinksItems />
    </div>
  );
}
