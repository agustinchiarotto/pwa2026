import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { describe, expect, it, vi } from "vitest";
import { CheckBox } from "./Checkbox";

describe("CheckBox", () => {
  it("calls onChange when user clicks the checkbox", async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();

    render(
      <CheckBox
        id="accept-terms"
        label="Accept terms"
        checked={false}
        onChange={onChange}
      />,
    );

    await user.click(screen.getByLabelText(/accept terms/i));

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("can be controlled by parent state", async () => {
    const user = userEvent.setup();

    const Demo = () => {
      const [checked, setChecked] = useState(false);

      return (
        <CheckBox
          id="demo-checkbox"
          label="Demo checkbox"
          checked={checked}
          onChange={(event) => setChecked(event.target.checked)}
        />
      );
    };

    render(<Demo />);

    const checkbox = screen.getByLabelText(/demo checkbox/i);
    expect(checkbox).not.toBeChecked();

    await user.click(checkbox);

    expect(checkbox).toBeChecked();
  });
});
