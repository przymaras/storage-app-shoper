import { render, screen } from "@testing-library/react";
import Header from "./Header";
import "../fontawesome";

describe("Header Component", () => {
  test("renders Header's h1 text", () => {
    const dummyFunction = () => {};
    render(
      <Header toggleNavModules={dummyFunction} toggleNavTools={dummyFunction} />
    );
    const HeaderTitle = screen.getByText("Bikel.pl storage App");
    expect(HeaderTitle).toBeInTheDocument();
  });
});
