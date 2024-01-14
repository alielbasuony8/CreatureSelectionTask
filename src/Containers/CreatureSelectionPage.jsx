import React from "react";
import CreatureSelectionHeader from "../Components/CreatureSelectionHeader";
import CreatureSelectionInstructions from "../Components/CreatureSelectionInstruction";
import Creatures from "../Components/Creatures";
import { FaArrowLeftLong } from "react-icons/fa6";

function CreatureSelectionPage() {
  
  return (
    <div className=" py-3 sm:py-4 px-2 sm:px-12 lg:px-24 flex flex-col items-center">

      <div className=" mb-8 sm:mb-12 w-full">
        <div className="flex gap-2 sm:gap-3 items-center justify-start cursor-pointer w-fit p-2">
          <FaArrowLeftLong className=" text-lime-color text-lg sm:text-xl" />
          <span className=" text-gray-300 uppercase text-xs sm:text-sm  ">
            Exit
          </span>
        </div>
      </div>
      
      <div className="  px-4 sm:px-14 lg:px-28 max-w-[70rem] w-full">
        <CreatureSelectionHeader />
        <CreatureSelectionInstructions />
        <Creatures />
      </div>
    </div>
  );
}

export default CreatureSelectionPage;
