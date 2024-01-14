import React, { useState } from "react";
import CreatureCard from "./CreatureCard";
import { CreaturesData } from "../lib/data";
import ProceedButton from "./ProceedButton";

function Creatures() {

  const [selectedIds, setSelectedIds] = useState([]);
  const [transformed, setTransformed] = useState([])

  const handleSelect = (id) => {
    setSelectedIds((prevSelectedIds) => {
      if (prevSelectedIds.includes(id)) {
        return prevSelectedIds.filter((selectedId) => selectedId !== id);
      }
      return [...prevSelectedIds, id];
    });
  };

  const handleTransform = (ids) =>{
    ids.map((id) => {
      setTransformed((prevTransformed) =>{
        return [...prevTransformed, id]
      })
      return id
    })
  }

  
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
            available={!transformed.includes(creature.id)}
            onSelect={handleSelect}
            isSelected={selectedIds.includes(creature.id)}
            key={index}
          />
        ))}
      </div>
      <ProceedButton proceed = {() => handleTransform(selectedIds)}/>
    </div>
  );
}

export default Creatures;
