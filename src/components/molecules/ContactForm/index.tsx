import React from "react";
import Input from "@/components/atoms/Input";

interface ContactFormProps {
  onClose: () => void; // Función para cerrar el modal
}

const Index = ({ onClose }: ContactFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    onClose(); // Cierra el modal
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" placeholder="Tu nombre" isTextArea={false} />
      <Input type="email" placeholder="Tu correo" isTextArea={false} />
      <Input type="text" placeholder="Tu mensaje" isTextArea={true} />
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
        Enviar
      </button>
    </form>
  );
};

export default Index;
