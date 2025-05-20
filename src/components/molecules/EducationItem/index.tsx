import React from "react";
import { SubText, TextTitle } from "@/components/atoms/TextAndTitles";

interface EducationItemProps {
  firstTitle: string;
  date: string;
  secondTitle: string;
  description: string;
}

function Index({
  firstTitle,
  date,
  secondTitle,
  description,
}: EducationItemProps) {
  return (
    <div className="flex bg-transparent gap-4 w-full p-6">
      <div className="flex flex-col items-start gap-2 w-[40%]">
        <TextTitle text={firstTitle} />
        <div className="flex items-center gap-2">
          <SubText text="Estudiante" />
          <span className="flex justify-center bg-primary rounded-2xl font-bold w-24">
            <SubText text={date} />
          </span>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-2 w-[60%]">
        <TextTitle text={secondTitle} />
        <SubText text={description} />
      </div>
    </div>
  );
}

export default Index;
