import { SubText, SubTitle } from "@/components/atoms/TextAndTitles";
import { Icon } from "@iconify/react";
import React from "react";

interface IndexProps {
  icon: string;
  subTitle: string;
  text: string;
}

const Index = ({ icon, subTitle, text }: IndexProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-white p-6 rounded-2xl shadow-md">
      <Icon icon={icon} color="#e67e22" width="70px" height="70px" />
      <SubTitle text={subTitle} />
      <SubText text={text} />
    </div>
  );
};

export default Index;
