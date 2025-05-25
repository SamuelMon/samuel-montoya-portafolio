import Education from "@/components/organisms/Education";
import Footer from "@/components/organisms/Footer";
import Hero from "@/components/organisms/Hero";
import Knowledge from "@/components/organisms/Knowledge";
import {
  DesktopLinksItems,
  MobileLinksItems,
} from "@/components/organisms/Links";
import Portfolio from "@/components/organisms/Portfolio";
import {
  ResumePanelDesktop,
  ResumePanelMobile,
} from "@/components/organisms/ResumePanel";

export default function Home() {
  return (
    <div className="flex lg:flex-row items-start justify-between min-h-screen bg-gray-200">
      <ResumePanelDesktop />
      {/* Contenido principal */}
      <div className="flex flex-col items-center justify-center gap-36 w-full md:w-[95%] lg:w-[85%] xl:w-[75%] mx-auto px-4 lg:px-8">
        <Hero />
        <Knowledge />
        <Education />
        <Portfolio />
        <ResumePanelMobile />
        <MobileLinksItems />
        <Footer />
      </div>
      <DesktopLinksItems />
    </div>
  );
}
