import { render, screen } from "@testing-library/react";
import { describe, expect, vi } from "vitest";
import { Button } from "./Button";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  it("renderiza con el label", () => {
    render(<Button label="Click" onClick={() => {}} />);
    expect(screen.getByRole("button", { name: /Click/ })).toBeInTheDocument();
  });
  it("Ejecute la funcion en el on click", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();

    render(<Button onClick={onClick} label="Click" />);

    await user.click(screen.getByRole("button", { name: /Click/ }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("Estar bloqueado cuando esta disabled", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<Button onClick={onClick} label="Click" disabled={true} />);
    await user.click(screen.getByRole("button", { name: /Click/ }));

    expect(onClick).not.toHaveBeenCalled();
  });
});

// <button
