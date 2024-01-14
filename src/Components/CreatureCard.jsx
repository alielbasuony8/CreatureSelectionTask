import React from "react";
import creature from "../Assets/creature.jpeg";


function CreatureCard({ id,version, available, onSelect, isSelected }) {

  const handleClick = () => {
    if (available) {
      onSelect(id);
    }
  };
  
  return (
    <div
      className=" flex flex-col justify-center items-center group"
      onClick={handleClick}
    >
      <div
        className={`rounded-lg w-[150px] h-[150px] sm:h-[190px] sm:w-[190px] relative ${
          available ? "cursor-pointer" : " cursor-not-allowed"
        }`}
      >
        <img
          className={`max-w-full h-full border-[3px] border-transparent rounded-lg ${
            available
              ? "group-hover:border-[3px] group-hover:border-lime-color"
              : ""
          }`}
          src={creature}
          alt="creatureImage"
        />
        {!available && (
          <div className=" absolute inset-0 bg-black bg-opacity-80 rounded-lg flex flex-col text-center justify-center items-center uppercase text-gray-200">
            <h3 className="text-xl font-normal">Unavailable</h3>
            <p className="text-xs font-thin">Already transformed</p>
          </div>
        )}
        {
          isSelected && available && (
            <div className=" absolute bottom-3 rounded-lg left-3 w-fit bg-zinc-800 px-5 uppercase">
          <p className=" text-white text-xs font-thin">Selected</p>
        </div>
          )
        }
      </div>

      <p className=" text-white text-xs sm:text-sm mt-1">Creature #{version}</p>
    </div>
  );
}

export default CreatureCard;
