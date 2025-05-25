import PercentageRow from "@/components/atoms/PercentageRow";
import { TextTitle } from "@/components/atoms/TextAndTitles";
import React from "react";

const Index = () => {
  const languages = [
    { name: "JavaScript", percentage: 90 },
    { name: "TypeScript", percentage: 80 },
    { name: "Java", percentage: 70 },
    { name: "Python", percentage: 40 },
    { name: "C#", percentage: 40 },
    { name: "PHP", percentage: 20 },
  ];
  return (
    <div className="flex flex-col items-start justify-center w-full gap-4">
      <TextTitle text="Lenguajes de Programación" />
      <div className="flex flex-col gap-1 w-full">
        {languages.map((language, index) => (
          <PercentageRow
            key={index}
            name={language.name}
            percentage={language.percentage}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
