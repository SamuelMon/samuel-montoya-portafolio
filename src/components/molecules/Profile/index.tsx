import React from "react";
import ProfilePhoto from "@/components/atoms/ProfilePhoto";
import { TextTitle, TextSidebar } from "@/components/atoms/TextAndTitles";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <ProfilePhoto />
      <TextTitle text="Samuel Montoya" />
      <TextSidebar text="Desarrollador Front-end" />
    </div>
  );
};

export default Index;
