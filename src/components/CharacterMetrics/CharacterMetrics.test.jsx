import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import i18n from "../../i18n";
import { CharacterMetrics } from "./CharacterMetrics";
import { getCharacterMetrics } from "./characterMetrics.utils";

beforeEach(async () => {
  await i18n.changeLanguage("es");
});

describe("getCharacterMetrics", () => {
  it("returns zeroed values for empty list", () => {
    expect(getCharacterMetrics([])).toEqual({
      count: 0,
      averageLevel: 0,
      highestLevel: 0,
    });
  });

  it("calculates count, average level and highest level", () => {
    const characters = [
      { name: "A", level: 8 },
      { name: "B", level: 9 },
      { name: "C", level: 7 },
    ];

    expect(getCharacterMetrics(characters)).toEqual({
      count: 3,
      averageLevel: 8,
      highestLevel: 9,
    });
  });
});

describe("CharacterMetrics", () => {
  it("renders computed metrics", () => {
    render(
      <CharacterMetrics
        characters={[
          { name: "A", level: 8 },
          { name: "B", level: 9 },
        ]}
      />,
    );

    expect(screen.getByText("Total personajes: 2")).toBeInTheDocument();
    expect(screen.getByText("Nivel promedio: 8.5")).toBeInTheDocument();
    expect(screen.getByText("Nivel maximo: 9")).toBeInTheDocument();
  });
});
