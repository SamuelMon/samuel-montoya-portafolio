import React from "react";
import PercentageRow from "@/components/atoms/PercentageRow";
import { TextTitle } from "@/components/atoms/TextAndTitles";

const Index = () => {
  const languages = [
    { name: "Español", percentage: 100 },
    { name: "Ingles", percentage: 80 },
    { name: "Portugues", percentage: 20 },
  ];
  return (
    <div className="flex flex-col items-start justify-center w-full gap-4">
      <TextTitle text="Idiomas" />
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
