import React from "react";
import { TextSidebar } from "@/components/atoms/TextAndTitles";
import PercentageBar from "@/components/atoms/PercentageBar";

interface PercentageRowProps {
  name: string;
  percentage: number;
}

const Index = ({ name, percentage }: PercentageRowProps) => {
  return (
    <div className="grid grid-rows-2 w-full mb-2">
      <div className="flex w-full">
        <div className="felx justify-start w-1/2">
          <TextSidebar text={name} />
        </div>
        <div className="flex justify-end w-1/2">
          <TextSidebar text={`${percentage}%`} />
        </div>
      </div>
      <PercentageBar percentage={percentage} />
    </div>
  );
};

export default Index;
