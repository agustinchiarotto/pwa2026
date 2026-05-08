import { render, screen } from "@testing-library/react";
import { beforeAll, describe } from "vitest";
import { getCharacterMetrics } from "./characterMetrics.utils";
import { CharacterMetrics } from "./CharacterMetrics";
import i18n from "../../i18n";

beforeEach(() => {
  i18n.changeLanguage("es");
});

describe("Character Metrics", () => {
  it("retorna 0 con arreglo vacio", () => {
    expect(getCharacterMetrics([])).toEqual({
      count: 0,
      averageLevel: 0,
      highestLevel: 0,
    });
  });

  it("calcule count, averageLeve, higest de manera correcta", () => {
    const characters = [
      { name: "A", level: 10 },
      { name: "B", level: 9 },
      { name: "C", level: 11 },
    ];

    expect(getCharacterMetrics(characters)).toEqual({
      count: 3,
      averageLevel: 10,
      highestLevel: 11,
    });
  });

  it("CharacterMetrics se renderiza bien", () => {
    const characters = [
      { name: "A", level: 10 },
      { name: "B", level: 9 },
    ];
    render(<CharacterMetrics characters={characters} />);
    expect(screen.getByText("Total personajes: 2")).toBeInTheDocument();
    expect(screen.getByText("Nivel promedio: 9.5")).toBeInTheDocument();
    expect(screen.getByText("Nivel maximo: 10")).toBeInTheDocument();
  });

  it("CharacterMetrics se renderiza bien con 3 personas", () => {
    const characters = [
      { name: "A", level: 10 },
      { name: "B", level: 10 },
      { name: "C", level: 10 },
    ];
    render(<CharacterMetrics characters={characters} />);
    expect(screen.getByText("Total personajes: 3")).toBeInTheDocument();
    expect(screen.getByText("Nivel promedio: 10")).toBeInTheDocument();
    expect(screen.getByText("Nivel maximo: 10")).toBeInTheDocument();
  });
});
