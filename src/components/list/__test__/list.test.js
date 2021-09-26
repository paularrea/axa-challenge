import { render, cleanup } from "@testing-library/react";
import GnomsList from "../GnomsList";

afterEach(() => {
  cleanup();
});

test("Should render the Gnome List component", () => {
  render(<GnomsList />);
});
