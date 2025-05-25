import React from "react";
import PortfolioItem from "@/components/molecules/PortfolioItem";
import { MediumTitle } from "@/components/atoms/TextAndTitles";

const Index = () => {
  const portfolioItems = [
    {
      src: "/portfolio1.png",
      title: "Planilla Voleibo",
      text: "Proyecto de una planilla de voleibol, practica de desarrollo front-end con React. Proyecto integrador 1 y 2",
      description:
        "Este proyecto es una planilla de voleibol que permite llevar un registro del 90% de eventos inherentes a los equipos implicados en un partido de voleibol. Fue desarrollado como parte del curso de proyecto integrador con el objetivo inicial de que fuera usada por arbitros de voleibol tanto locales como nacionales.",
      href: "https://github.com/SamuelMon/ProyectoIntegrador",
    },
    {
      src: "/portfolio2.png",
      title: "Proyecto Tic Tac Toe",
      text: "Proyecto de un juego de tres en raya, practica de desarrollo front-end con React",
      description:
        "Este proyecto es un juego de tres en raya (Tic Tac Toe) desarrollado como parte del curso de React. El objetivo del proyecto es practicar el desarrollo front-end utilizando React y TypeScript, implementando una interfaz de usuario interactiva y funcional.",
      href: "https://github.com/SamuelMon/curso-react/tree/main/projects/01-tic-tac-toe",
    },
    {
      src: "/portfolio3.png",
      title: "Proyecto practica componente Twitter",
      text: "Proyecto de un componente de Twitter, practica de desarrollo front-end con React",
      description:
        "Este proyecto es un componente de Twitter desarrollado como parte del curso de React. El objetivo del proyecto es practicar el desarrollo front-end utilizando React y TypeScript, implementando una interfaz de usuario interactiva y funcional.",
      href: "https://github.com/SamuelMon/curso-react/tree/main/projects/00-hola-mundo",
    },
  ];

  return (
    <div className="flex  flex-col items-center w-full overflow-x-auto">
      <MediumTitle text="Portafolio" />
      {/* Renderizado de cada proyecto */}
      <div className="flex flex-row gap-16 min-w-max px-4 mb-8">
        {portfolioItems.map((item, index) => (
          <PortfolioItem
            key={index}
            src={item.src}
            title={item.title}
            text={item.text}
            description={item.description}
            href={item.href}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
