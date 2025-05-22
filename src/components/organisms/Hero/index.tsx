import { SubText } from "@/components/atoms/TextAndTitles";
import Button from "@/components/atoms/Button";
import React from "react";
import Image from "next/image";

const Index = () => {
  return (
    <div className="flex flex-row items-center justify-evenly w-full rounded-2xl p-6 mx-auto min-h-[550px] max-h-[650px] shadow-md bg-white relative">
      <div className="flex flex-col items-start justify-evenly gap-8 flex-1">
        <h1 className="text-center lg:text-left text-[40px] lg:text-[56px] font-light max-w-72 lg:max-w-96 text-black">
          I&#39;m Samuel Montoya <span className="text-primary">Front-End</span>{" "}
          Developer
        </h1>
        <SubText text="I am a passionate front-end developer with a focus on creating beautiful and functional user interfaces. I love to learn new technologies and improve my skills every day." />
        <Button text="HIRE ME" />
      </div>
      <div className="flex flex-1 justify-end">
        <Image
          src="/hero.png"
          alt="hero"
          width={300}
          height={300}
          className="w-full max-w-lg h-[500px] absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
};

export default Index;
