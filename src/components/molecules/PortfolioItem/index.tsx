import { SubText, TextLink, TextTitle } from "@/components/atoms/TextAndTitles";
import Image from "next/image";
import React from "react";

interface PortfolioItemProps {
  src: string; // URL de la imagen, requerido
  title: string; // Título del proyecto, requerido
  text: string; // Descripción, requerido
  href: string; // URL del proyecto, requerido
}

const Index = ({ src, title, text, href }: PortfolioItemProps) => {
  return (
    <div className="flex flex-col items-center justify-evenly p-4 gap-2 bg-white w-80 h-[500] rounded-2xl shadow-lg">
      <Image
        src={src}
        alt="Portfolio Image"
        width="300"
        height="300"
        className="shadow-lg mt-6"
      />
      <div className="flex flex-col justify-end h-[40%]">
        <TextTitle text={title} />
        <SubText text={text} />
        <TextLink text="Saber Mas >" href={href} />
      </div>
    </div>
  );
};

export default Index;
