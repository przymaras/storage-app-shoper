import NavFilterWares from "./NavFilterWares";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "../../fontawesome";

describe("NavFilterWares Component", () => {
  test("start folded , archive label is NOT in the document", () => {
    const mockFunction = () => {};
    render(<NavFilterWares setFilterState={mockFunction} />);
    const archiveLabel = screen.queryByText("Archiwalne");
    expect(archiveLabel).toBeNull();
  });
  test("will unfold after Click, archive label is in the document", () => {
    const mockFunction = () => {};
    render(<NavFilterWares setFilterState={mockFunction} />);
    const button = screen.getByText("Filtr");
    userEvent.click(button);
    const archiveLabel = screen.queryByText("Archiwalne");
    expect(archiveLabel).not.toBeNull();
  });
  test("has three buttons when unfolded (after button Click)", () => {
    const mockFunction = () => {};
    render(<NavFilterWares setFilterState={mockFunction} />);
    const button = screen.getByText("Filtr");
    userEvent.click(button);
    const buttons = screen.queryAllByRole("button");
    expect(buttons.length).toEqual(3);
  });
});
