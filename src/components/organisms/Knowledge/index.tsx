import React from "react";
import KnowledgeItem from "@/components/molecules/KnowledgeItem";
import { MediumTitle } from "@/components/atoms/TextAndTitles";

const Index = () => {
  const knowledgeItems = [
    {
      icon: "ic:baseline-computer",
      subTitle: "Web Development",
      text: "Blog, E-Commerce",
    },
    {
      icon: "ic:baseline-design-services",
      subTitle: "UI/UX Design",
      text: "Figma, Adobe XD",
    },
    {
      icon: "ic:baseline-code",
      subTitle: "Programming Languages",
      text: "JavaScript, TypeScript, Python, Java",
    },
    {
      icon: "ic:baseline-api",
      subTitle: "API Development",
      text: "REST, Spring Boot, Node.js",
    },
    {
      icon: "ic:baseline-folder-open",
      subTitle: "Database",
      text: " MongoDB, MySQL",
    },
    {
      icon: "ic:baseline-security",
      subTitle: "Security",
      text: "OWASP, JWT",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-transparen w-full">
      <div className="flex flex-col items-center justify-center gap-4">
        <MediumTitle text="My Knowledge" />
        <p className="text-gray-600 text-center mt-2 fon">
          Estas son algunas de las áreas y tecnologías en las que tengo
          experiencia y conocimientos sólidos.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
          {knowledgeItems.map((item, index) => (
            <KnowledgeItem
              key={index}
              icon={item.icon}
              subTitle={item.subTitle}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
