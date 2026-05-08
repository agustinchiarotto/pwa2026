//Titulo muestra un text que llega por parametro

import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { Titulo } from "./Titulo";

describe("Titulo Component", () => {
  it("Renders correctly", () => {
    render(<Titulo texto="Hola" />);
    expect(screen.getByText("Hola")).toBeInTheDocument();
  });
  it("Renders correctly", () => {
    render(<Titulo texto="Chau" />);
    expect(screen.getByText("Chau")).toBeInTheDocument();
  });
});
