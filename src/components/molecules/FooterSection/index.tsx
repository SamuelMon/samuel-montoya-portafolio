import React from "react";

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

const FooterSection = ({ title, children }: FooterSectionProps) => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default FooterSection;
