import React from "react";
import { TextSidebar, TextSidebarGreen } from "../TextAndTitles";

interface PersonalDataRowProps {
  textLeft: string;
  textRight: string;
  textGreen?: boolean;
}

const Index = ({ textLeft, textRight, textGreen }: PersonalDataRowProps) => {
  return (
    <div className="flex w-full">
      <div className="w-1/2 flex justify-start">
        <TextSidebar text={textLeft} />
      </div>
      <div className="w-1/2 flex justify-end">
        {!textGreen && <TextSidebar text={textRight} />}
        {textGreen && <TextSidebarGreen text={textRight} />}
      </div>
    </div>
  );
};

export default Index;
