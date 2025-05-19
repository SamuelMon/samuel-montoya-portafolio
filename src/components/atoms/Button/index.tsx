import React from "react";
import { Icon } from "@iconify/react";

const index = ({ text, icon }: { text: string; icon?: string }) => {
  return (
    <button className="h-14 w-40 flex justify-around items-center text-black rounded-2xl bg-primary font-bold">
      {text}
      {icon && <Icon icon={icon} />}
    </button>
  );
};

export default index;
