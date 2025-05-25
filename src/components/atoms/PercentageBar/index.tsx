import React from "react";

const Index = ({ percentage }: { percentage: number }) => {
  return (
    <div className="flex w-full bg-white border-1 border-primary h-3 p-0.5 rounded-full">
      <div
        className="bg-primary rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default Index;
