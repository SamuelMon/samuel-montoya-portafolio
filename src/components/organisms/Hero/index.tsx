import { HeroTitle, SubText } from "@/components/atoms/TextAndTitles";
import Button from "@/components/atoms/Button";
import Modal from "@/components/atoms/Modal";
import ContactForm from "@/components/molecules/ContactForm";
import React, { useState } from "react";
import Image from "next/image";

const Index = () => {
  // Estado para controlar la apertura del modal de contacto
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    // Contenedor principal del hero, responsivo y con estilos de tarjeta
    <div className="flex flex-col lg:flex-row-reverse items-center justify-evenly w-full rounded-2xl p-6 mx-auto min-h-[550px] max-h-[750px] shadow-md bg-white relative">
      {/* Imagen solo visible en escritorio */}
      <div className="hidden lg:flex flex-1 justify-center lg:justify-start">
        <Image
          src="/hero.png"
          alt="hero"
          width={300}
          height={300}
          className="w-full max-w-xs sm:max-w-sm lg:max-w-lg h-auto object-containa "
        />
      </div>
      <div className="flex flex-col items-center lg:items-start justify-evenly gap-8 flex-1 text-center lg:text-left">
        <HeroTitle>
          Soy Samuel Montoya{" "}
          <span className="text-primary">Desarrollador Front-End</span>
        </HeroTitle>

        {/* Imagen solo visible en móvil/tablet */}
        <div className="flex lg:hidden justify-center">
          <Image
            src="/hero.png"
            alt="hero"
            width={300}
            height={300}
            className="w-full max-w-xs sm:max-w-sm h-auto object-contain"
          />
        </div>

        <SubText text="Soy un desarrollador front-end apasionado, enfocado en crear interfaces de usuario funcionales y dinamicas. Me encanta aprender nuevas tecnologías y mejorar mis habilidades cada día." />
        {/* Botón para abrir el modal de contacto */}
        <Button
          text="CONTRÁTAME"
          icon="ic:sharp-arrow-forward"
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      {/* Modal de contacto, aparece al hacer click en el botón */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Contáctame</h2>
        <ContactForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default Index;
