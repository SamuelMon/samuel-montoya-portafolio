import ExtraSkills from "@/components/molecules/ExtraSkills";
import Languages from "@/components/molecules/Languages";
import PersonalData from "@/components/molecules/PersonalData";
import Profile from "@/components/molecules/Profile";
import ProgrammingLangs from "@/components/molecules/ProgrammingLangs";
import React from "react";

// Panel lateral para escritorio (solo visible en xl o mayor)
const ResumePanelDesktop = () => {
  return (
    // Panel sticky con scroll interno
    <div className="hidden xl:flex xl:flex-col gap-9 p-5 w-[20%] bg-white rounded-lg shadow-lg sticky h-screen top-0 left-0 overflow-auto scrollbarNone">
      <Profile />
      <PersonalData />
      <Languages />
      <ProgrammingLangs />
      <ExtraSkills />
    </div>
  );
};

// Panel para dispositivos móviles (visible solo en pantallas menores a xl)
const ResumePanelMobile = () => {
  return (
    // Grid para organizar las secciones en filas y columnas
    <div className="grid grid-cols-2 items-center grid-rows-[170px_250px_350px] gap-4 p-4 bg-white h-max-[500px] w-full rounded-2xl shadow-2xl xl:hidden">
      <div className="col-start-1 col-end-3 row-start-1 row-end-2">
        <Profile />
      </div>
      <PersonalData />
      <Languages />
      <ProgrammingLangs />
      <div className="flex items-start h-full">
        <ExtraSkills />
      </div>
    </div>
  );
};

export { ResumePanelDesktop, ResumePanelMobile };
