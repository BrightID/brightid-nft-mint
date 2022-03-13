import { render, screen } from "@testing-library/react";
import AppMint from "./AppMint";

test("renders learn react link", () => {
    render(<AppMint />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
