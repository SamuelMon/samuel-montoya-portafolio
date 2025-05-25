import React from "react";

const HeroTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-[28px] sm:text-[36px] lg:text-[48px] font-bold max-w-full lg:max-w-96 text-black">
      {children}
    </h1>
  );
};

const MediumTitle = ({ text }: { text: string }) => {
  return (
    <h2 className="text-center lg:text-left text-[32px] lg:text-[40px] font-bold max-w-72 lg:max-w-max">
      {text}
    </h2>
  );
};

const SubTitle = ({ text }: { text: string }) => {
  return (
    <h3 className="text-center text-xl lg:text-[24px] font-bold ">{text}</h3>
  );
};

const TextTitle = ({ text }: { text: string }) => {
  return (
    <h3 className="text-center lg:text-left text-xl lg:text-[16px] font-bold ">
      {text}
    </h3>
  );
};

const SubText = ({ text }: { text: string }) => {
  return (
    <div>
      <p className="text-gray text-xl text-center lg:text-left">{text}</p>
    </div>
  );
};
const TextSidebar = ({ text }: { text: string }) => {
  return (
    <div>
      <p className="text-gray text-[16px] text-center lg:text-left">{text}</p>
    </div>
  );
};
const TextSidebarGreen = ({ text }: { text: string }) => {
  return (
    <div>
      <p className="text-available text-[16px] text-center lg:text-left">
        {text}
      </p>
    </div>
  );
};

const TextLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <div>
      <a
        href={href}
        className="text-primary font-bold text-left hover:cursor-pointer hover:text-secondary transition-colors"
        target="_blank"
      >
        {text}
      </a>
    </div>
  );
};

export {
  HeroTitle,
  MediumTitle,
  SubTitle,
  TextTitle,
  SubText,
  TextSidebar,
  TextSidebarGreen,
  TextLink,
};
