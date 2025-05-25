import React from "react";
import PersonalDataRow from "@/components/atoms/PersonalDataRow";

const Index = () => {
  const personalData = [
    { textLeft: "Edad:", textRight: "23" },
    { textLeft: "Teléfono:", textRight: "(+57)3217663863" },
    { textLeft: "Freelance:", textRight: "Disponible", textGreen: true },
    { textLeft: "Email:", textRight: "montoacanos@gmail.com" },
    { textLeft: "Residencia:", textRight: "Colombia" },
    { textLeft: "Ubicación:", textRight: "Itagüi, Antioquia" },
  ];
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full">
        {personalData.map((data, index) => (
          <PersonalDataRow
            key={index}
            textLeft={data.textLeft}
            textRight={data.textRight}
            textGreen={data.textGreen}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
