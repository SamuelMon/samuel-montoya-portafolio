import React from "react";

const HeroTitle = ({ text }: { text: string }) => {
  return (
    <h1 className="text-center lg:text-left text-5xl lg:text-6xl font-light text-secondary max-w-72 lg:max-w-96">
      {text}
    </h1>
  );
};

const MediumTitle = ({ text }: { text: string }) => {
  return (
    <h2 className="text-center lg:text-left text-[32px] lg:text-[40px] font-light text-secondary max-w-72 lg:max-w-max">
      {text}
    </h2>
  );
};

const SubTitle = ({ text }: { text: string }) => {
  return (
    <h3 className="text-center lg:text-left text-xl lg:text-[24px] font-light text-secondary ">
      {text}
    </h3>
  );
};

const TextTitle = ({ text }: { text: string }) => {
  return (
    <h3 className="text-center lg:text-left text-xl lg:text-[16px] font-bold text-secondary ">
      {text}
    </h3>
  );
};

const SubText = ({ text }: { text: string }) => {
  return (
    <div>
      <p className="text-base text-gray text-center lg:text-left">{text}</p>
    </div>
  );
};

export { HeroTitle, MediumTitle, SubTitle, TextTitle, SubText };
