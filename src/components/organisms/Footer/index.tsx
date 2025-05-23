import React from "react";
import SocialIcon from "@/components/atoms/SocialIcon";
import FooterSection from "@/components/molecules/FooterSection";

const Footer = () => {
  return (
    <footer className="w-full bg-footerbg text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-8">
          <FooterSection title="Contáctame">
            <p className="text-sm">Correo: montoyacanos@gmail.com</p>
            <p className="text-sm">Teléfono: +57 3217663863</p>
            <p className="text-sm">Ubicación: itagüi, Antioquia</p>
          </FooterSection>

          <FooterSection title="Sígueme">
            <div className="flex space-x-4">
              <SocialIcon
                href="https://twitter.com"
                icon="akar-icons:twitter-fill"
              />
              <SocialIcon
                href="https://linkedin.com/in/samuelmon"
                icon="akar-icons:linkedin-box-fill"
              />
              <SocialIcon
                href="https://github.com/samuelmon"
                icon="akar-icons:github-fill"
              />
              <SocialIcon
                href="https://instagram.com"
                icon="akar-icons:instagram-fill"
              />
            </div>
          </FooterSection>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          © {new Date().getFullYear()} Samuel Montoya. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
