import { MediumTitle } from "@/components/atoms/TextAndTitles";
import EducationItem from "@/components/molecules/EducationItem";
import React from "react";

const Index = () => {
  const education = [
    {
      firstTitle: "Universidad de Antioquia",
      date: "2019-actual",
      secondTitle: "Ingeniería de Sistemas",
      description:
        "Estudiante de Ingeniería de Sistemas en la Universidad de Antioquia, con énfasis en análisis, diseño y desarrollo fullstack de aplicaciones. He fortalecido habilidades en arquitectura de software, bases de datos, frontend y backend, aplicando buenas prácticas en todo el ciclo de desarrollo.",
    },
    {
      firstTitle: "Udemy",
      date: "2024",
      secondTitle: "Curso de Diseño web",
      description:
        "Curso enfocado en el diseño y desarrollo web utilizando HTML, CSS y JavaScript, así como bases de datos MySQL y desarrollo backend con PHP. Adquirí experiencia práctica en la creación de sitios web completos y funcionales.",
    },
    {
      firstTitle: "Coursera",
      date: "2024-actual",
      secondTitle: "Certificación Profesional Desarrollador Frontend Meta",
      description:
        "Certificación profesional que abarca desde lo básico de HTML, CSS y JavaScript hasta React avanzado y preparación para entrevistas profesionales.",
    },
  ];
  return (
    <div className="flex flex-col items-center w-full p-6">
      <MediumTitle text="Educación" />
      <div className="flex flex-col justify-center items-center bg-white rounded-2xl shadow-md gap-6 mt-6">
        {education.map((item, index) => (
          <React.Fragment key={index}>
            <EducationItem
              firstTitle={item.firstTitle}
              date={item.date}
              secondTitle={item.secondTitle}
              description={item.description}
            />
            {index < education.length - 1 && (
              <hr className="w-full border-t border-gray-600" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Index;
