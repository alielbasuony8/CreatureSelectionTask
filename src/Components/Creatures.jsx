import React, { useState } from "react";
import CreatureCard from "./CreatureCard";
import { CreaturesData } from "../lib/data";
function Creatures() {
  const [selectedIds, setSelectedIds] = useState([]);
  const handleSelect = (id) => {
    setSelectedIds((prevSelectedIds) => {
      if (prevSelectedIds.includes(id)) {
        return prevSelectedIds.filter((selectedId) => selectedId !== id);
      }
      return [...prevSelectedIds, id];
    });
  };
  return (
    <div className="flex flex-col justify-center items-center text-center my-2">
      <p className=" text-zinc-500 text-xs sm:text-sm">
        You have {CreaturesData.length} Creatures
      </p>
      <div className=" w-full items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-4">
        {CreaturesData.map((creature, index) => (
          <CreatureCard
            id={creature.id}
            version = {creature.version}
            available={creature.available}
            onSelect={handleSelect}
            isSelected={selectedIds.includes(creature.id)}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Creatures;
