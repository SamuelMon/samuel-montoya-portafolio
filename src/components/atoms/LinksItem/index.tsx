import React from "react";
import { Icon } from "@iconify/react";
import { SubTitle } from "../TextAndTitles";

interface LinksItemProps {
  icon: string;
  href: string;
  title: string;
  isDesktop: boolean;
}

const Index = ({ icon, href, title, isDesktop }: LinksItemProps) => {
  return (
    <div>
      {!isDesktop && (
        <span className="block text-center mb-2">
          <SubTitle text={title} />
        </span>
      )}

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary rounded-full p-2 flex items-center justify-center hover:bg-secondary transition duration-300 ease-in-out"
      >
        <Icon
          icon={icon}
          className="text-black w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"
        />
      </a>
    </div>
  );
};

export default Index;
