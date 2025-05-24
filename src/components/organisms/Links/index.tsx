import LinksItem from "@/components/atoms/LinksItem";
import React from "react";
import { MediumTitle, SubTitle } from "@/components/atoms/TextAndTitles";

const links = [
  {
    icon: "ant-design:github-outlined",
    link: "github.com/samuelmon",
    title: "GitHub",
  },
  {
    icon: "ant-design:linkedin-outlined",
    link: "linkedin.com/in/samuelmon",
    title: "LinkedIn",
  },
  {
    icon: "ant-design:twitter-outlined",
    link: "twitter.com/samuelmon",
    title: "Twitter",
  },
  {
    icon: "ant-design:instagram-outlined",
    link: "instagram.com/samuelmon",
    title: "Instagram",
  },
  {
    icon: "ant-design:facebook-outlined",
    link: "facebook.com/samuelmon",
    title: "Facebook",
  },
  {
    icon: "ant-design:youtube-outlined",
    link: "youtube.com/@samuelmon",
    title: "YouTube",
  },
];

// Componente para pantallas grandes
export const DesktopLinksItems = () => {
  return (
    <div className="hidden lg:flex lg:flex-col items-center justify-start w-[10%] p-4 h-screen bg-white gap-10 sticky top-0 ">
      <SubTitle text="Links" />
      <div className="flex flex-col items-center gap-10">
        {links.map((link, index) => (
          <LinksItem
            key={index}
            href={`https://${link.link}`}
            icon={link.icon}
            title={link.title}
            isDesktop={true} // Estilo específico para escritorio
          />
        ))}
      </div>
    </div>
  );
};

// Componente para pantallas móviles
export const MobileLinksItems = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-2xl w-full h-80 shadow-2xl lg:hidden">
      <MediumTitle text="Links" />
      <div className="grid grid-cols-3 gap-20">
        {links.map((link, index) => (
          <LinksItem
            key={index}
            href={`https://${link.link}`}
            icon={link.icon}
            title={link.title}
            isDesktop={false} // Estilo específico para móvil
          />
        ))}
      </div>
    </div>
  );
};
