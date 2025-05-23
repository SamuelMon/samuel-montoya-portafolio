import React from "react";
import { Icon } from "@iconify/react";

interface SocialIconProps {
  href: string;
  icon: string;
}

const Index = ({ href, icon }: SocialIconProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-gray-400"
    >
      <Icon icon={icon} className="w-6 h-6" />
    </a>
  );
};

export default Index;
