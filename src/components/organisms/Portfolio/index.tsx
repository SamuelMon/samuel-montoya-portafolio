import React from "react";
import PortfolioItem from "@/components/molecules/PortfolioItem";
import { MediumTitle } from "@/components/atoms/TextAndTitles";

const Index = () => {
  const portfolioItems = [
    {
      src: "/portfolio1.png",
      title: "Planilla Voleibo",
      text: "Proyecto de una planilla de voleibol, practica de desarrollo front-end con React. Proyecto integrador 1 y 2",
      href: "https://github.com/SamuelMon/ProyectoIntegrador",
    },
    {
      src: "/portfolio2.png",
      title: "Proyecto Tic Tac Toe",
      text: "Proyecto de un juego de tres en raya, practica de desarrollo front-end con React",
      href: "https://github.com/SamuelMon/curso-react/tree/main/projects/01-tic-tac-toe",
    },
    {
      src: "/portfolio3.png",
      title: "Proyecto practica componente Twitter",
      text: "Proyecto de un componente de Twitter, practica de desarrollo front-end con React",
      href: "https://github.com/SamuelMon/curso-react/tree/main/projects/00-hola-mundo",
    },
  ];

  return (
    <div className="flex  flex-col items-center w-full overflow-x-auto">
      <MediumTitle text="Portfolio" />
      <div className="flex flex-row gap-16 min-w-max px-4 mb-8">
        {portfolioItems.map((item, index) => (
          <PortfolioItem
            key={index}
            src={item.src}
            title={item.title}
            text={item.text}
            href={item.href}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
