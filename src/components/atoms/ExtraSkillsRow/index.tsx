import React from "react";
import { Icon } from "@iconify/react";
import { TextSidebar } from "../TextAndTitles";

const Index = ({ text }: { text: string }) => {
  return (
    <div className="flex items-start gap-2">
      <Icon icon="akar-icons:star" className="min-w-6 min-h-6 text-primary" />
      <TextSidebar text={text} />
    </div>
  );
};

export default Index;
