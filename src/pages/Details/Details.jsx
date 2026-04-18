import React from "react";
import { useParams } from "react-router";
import { CHARACTERS } from "../../const/characters";

export const Details = () => {
  const params = useParams();
  console.log(params);

  console.log(CHARACTERS);

  const character = CHARACTERS.find((char) => char.name === params.id);

  return (
    <>
      <h1>Details...</h1>
      {character ? (
        <div className="flex flex-col p-16 border-2 rounded-3xl">
          <h2 className="text-red-500">{character.name}</h2>
          <h2>{character.level}</h2>
          <h2>{character.class}</h2>
          <h2>{character.race}</h2>
          <h2>{character.trait}</h2>
        </div>
      ) : (
        <h2>No encontrado </h2>
      )}
    </>
  );
};
