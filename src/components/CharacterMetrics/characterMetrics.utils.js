export const getCharacterMetrics = (characters) => {
  if (characters.length === 0) {
    return {
      count: 0,
      averageLevel: 0,
      highestLevel: 0,
    };
  }

  const totalLevel = characters.reduce(
    (accumulator, character) => accumulator + character.level,
    0
  );
  const highestLevel = Math.max(
    ...characters.map((character) => character.level)
  );

  return {
    count: characters.length,
    averageLevel: Number((totalLevel / characters.length).toFixed(1)),
    highestLevel,
  };
};
