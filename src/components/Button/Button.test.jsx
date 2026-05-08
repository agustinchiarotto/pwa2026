import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renders the provided label", () => {
    render(<Button label="Guardar" onClick={() => {}} />);

    expect(
      screen.getByRole("button", {
        name: /guardar/i,
      }),
    ).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<Button label="Enviar" onClick={onClick} />);

    await user.click(screen.getByRole("button", { name: /enviar/i }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<Button label="Deshabilitado" onClick={onClick} disabled />);

    const button = screen.getByRole("button", {
      name: /deshabilitado/i,
    });

    expect(button).toBeDisabled();
    await user.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });
});
