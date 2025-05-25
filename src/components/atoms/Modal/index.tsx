import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Index = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-gray-600 opacity-50"
        onClick={onClose} // Cierra el modal al hacer clic en el fondo
      ></div>
      <div
        className="relative bg-white p-6 rounded-lg shadow-lg max-w-[50%] h-auto"
        onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del modal cierre el modal
      >
        {children}
      </div>
    </div>
  );
};

export default Index;
