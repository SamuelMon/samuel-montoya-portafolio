import { HeroTitle, SubText } from "@/components/atoms/TextAndTitles";
import Button from "@/components/atoms/Button";
import React from "react";
import Image from "next/image";

const Index = () => {
  return (
    <div className="flex flex-row items-center justify-evenly w-[60%] rounded-2xl p-6 mx-auto min-h-[550px] max-h-[650px] shadow-md bg-white relative">
      <div className="flex flex-col items-start justify-evenly gap-8 flex-1">
        <HeroTitle text="I'm Samuel Montoya Front-End Developer" />
        <SubText text="I am a passionate front-end developer with a focus on creating beautiful and functional user interfaces. I love to learn new technologies and improve my skills every day." />
        <Button text="HIRE ME" />
      </div>
      <div className="flex-1 flex justify-evenly">
        <Image
          src="/hero.png"
          alt="hero"
          width={400}
          height={400}
          className="w-full max-w-lg h-[500] absolute bottom-0 right-10"
        />
      </div>
    </div>
  );
};

export default Index;
