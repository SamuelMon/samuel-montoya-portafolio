import React from "react";
import { Icon } from "@iconify/react";

// Definimos la interfaz para las props del botón
interface ButtonProps {
  text: string;
  icon?: string;
  onClick?: () => void;
}

const Index = ({ text, icon, onClick }: ButtonProps) => {
  return (
    <button
      className="h-14 w-40 flex justify-around items-center text-black rounded-2xl bg-primary font-bold"
      onClick={onClick}
    >
      {text}
      {icon && <Icon icon={icon} />}
    </button>
  );
};

export default Index;
