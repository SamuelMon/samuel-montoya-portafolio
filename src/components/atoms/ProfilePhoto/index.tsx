import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <div className="flex flex-col items-center relative">
      <Image
        src="/hero.png"
        alt="Profile Photo"
        width={150}
        height={150}
        className="rounded-full"
      />
      <span className="bg-available rounded-full w-4 h-4 absolute bottom-8 right-2"></span>
    </div>
  );
};

export default Index;
