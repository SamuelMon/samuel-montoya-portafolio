import { SubText, SubTitle, TextTitle } from "@/components/atoms/TextAndTitles";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "@/components/atoms/Modal";

interface PortfolioItemProps {
  src: string; // URL de la imagen, requerido
  title: string; // Título del proyecto, requerido
  text: string; // Descripción, requerido
  description: string; // Descripción detallada, requerido
  href: string; // URL del proyecto, requerido
}

const Index = ({ src, title, text, description, href }: PortfolioItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-col items-center justify-evenly p-4 gap-2 bg-white w-80 h-[500px] rounded-2xl shadow-lg">
        <Image
          src={src}
          alt="Portfolio Image"
          width={300}
          height={300}
          className="shadow-lg mt-6"
        />
        <div className="flex flex-col justify-end h-[40%]">
          <TextTitle text={title} />
          <SubText text={text} />
          {/* Botón Saber Más abre el modal */}
          <button
            className="text-primary font-bold text-left hover:cursor-pointer hover:text-secondary transition-colors mt-2"
            onClick={() => setOpen(true)}
          >
            Saber Más &gt;
          </button>
        </div>
      </div>
      {/* Modal con más información */}
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col items-center justify-center">
          <SubTitle text={title}></SubTitle>
          <Image
            src={src}
            alt="Portfolio Image"
            width={300}
            height={300}
            className="shadow-lg mt-6"
          />
        </div>
        <SubText text={description} />
        <div className="mt-4">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline font-bold hover:text-secondary"
          >
            Ir al repositorio
          </a>
        </div>
      </Modal>
    </div>
  );
};

export default Index;
