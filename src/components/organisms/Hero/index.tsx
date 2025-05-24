import { HeroTitle, SubText } from "@/components/atoms/TextAndTitles";
import Button from "@/components/atoms/Button";
import Modal from "@/components/atoms/Modal";
import ContactForm from "@/components/molecules/ContactForm";
import React, { useState } from "react";
import Image from "next/image";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row-reverse items-center justify-evenly w-full rounded-2xl p-6 mx-auto min-h-[550px] max-h-[750px] shadow-md bg-white relative">
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
        <Button
          text="CONTRÁTAME"
          icon="ic:sharp-arrow-forward"
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Contáctame</h2>
        <ContactForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default Index;
