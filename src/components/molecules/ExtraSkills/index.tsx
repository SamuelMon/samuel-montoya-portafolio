import ExtraSkillsRow from "@/components/atoms/ExtraSkillsRow";
import { TextTitle } from "@/components/atoms/TextAndTitles";
import React from "react";

const Index = () => {
  const extraSkillsItemsEs = [
    { text: "React.js y Next.js" },
    { text: "Tailwind CSS" },
    { text: "Git y GitHub" },
    { text: "Despliegue en Vercel y Netlify" },
    { text: "Trabajo en equipo" },
    { text: "Resolución de problemas" },
    { text: "Adaptabilidad" },
    { text: "Aprendizaje continuo" },
    { text: "Creatividad" },
    { text: "Pensamiento crítico" },
  ];

  return (
    <div>
      <TextTitle text="Habilidades Adicionales" />
      <div className="flex flex-col gap-2">
        {extraSkillsItemsEs.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <ExtraSkillsRow text={item.text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
