import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Titulo } from "./Titulo";

describe("Titulo", () => {
    it("renders correctly", () => {
        render(<Titulo texto="Hola Mundo" />);
        expect(screen.getByText("Hola Mundo")).toBeInTheDocument();
    });
    it("renders with the correct text", () => {
        render(<Titulo texto="Hola Mundo" />);
        expect(screen.getByText("Hola Mundo")).toBeInTheDocument();
    });
})