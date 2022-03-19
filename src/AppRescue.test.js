import { render, screen } from "@testing-library/react";
import AppRescue from "./AppRescue";

test("renders learn react link", () => {
    render(<AppRescue />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
