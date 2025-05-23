import Education from "@/components/organisms/Education";
import Hero from "@/components/organisms/Hero";
import Knowledge from "@/components/organisms/Knowledge";
import Portfolio from "@/components/organisms/Portfolio";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
      <div></div>
      <div className="flex flex-col items-center justify-center gap-36 w-[100%] lg:w-[60%] max-w-4xl mx-auto bg-gray-200">
        <Hero />
        <Knowledge />
        <Education />
        <Portfolio />
      </div>
      <div></div>
    </div>
  );
}
