import React from "react";
import Cresent from "./Cresent";

function CreatureSelectionHeader() {
  return (
    <div>
      <div className="flex items-center justify-between">
      <Cresent />
      <Cresent />
      </div>
      <div className=" flex flex-col items-center justify-center">
        <p className=" uppercase text-lime-color text-xs font-medium">Step 1 of 3</p>
        <h1 className=" uppercase text-gray-200 text-xl sm:text-2xl lg:text-3xl font-normal mt-1 sm:mt-3">Select Creature</h1>
      </div>
    </div>
  );
}

export default CreatureSelectionHeader;
