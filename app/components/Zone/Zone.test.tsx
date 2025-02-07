import { render, screen } from "@testing-library/react";
import Zone from "./Zone";
import { ZoneProps } from "./Zone.type";
import React from "react";

describe("Zone Component", () => {
  it("renders with the default background color when isSafe is undefined", () => {
    const mockZone: ZoneProps["zone"] = {
      location: "A1",
      needsMaintenance: false,
      isSafe: undefined,
    };

    render(<Zone zone={mockZone} />);
    const zoneElement = screen.getByTitle("A1");

    expect(zoneElement).toHaveStyle("background-color: #fff");
  });

  it("renders with a safe background color when isSafe is true", () => {
    const mockZone: ZoneProps["zone"] = {
      location: "B2",
      needsMaintenance: false,
      isSafe: true,
    };

    render(<Zone zone={mockZone} />);
    const zoneElement = screen.getByTitle("B2");

    expect(zoneElement).toHaveStyle("background-color: #51B687");
  });

  it("renders with an unsafe background color when isSafe is false", () => {
    const mockZone: ZoneProps["zone"] = {
      location: "C3",
      needsMaintenance: false,
      isSafe: false,
    };

    render(<Zone zone={mockZone} />);
    const zoneElement = screen.getByTitle("C3");

    expect(zoneElement).toHaveStyle("background-color: #ff5a5a");
  });

  it("renders the maintenance icon when needsMaintenance is true", () => {
    const mockZone: ZoneProps["zone"] = {
      location: "D4",
      needsMaintenance: true,
      isSafe: true,
    };

    render(<Zone zone={mockZone} />);
    const iconElement = screen.getByAltText("Maintenance");

    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute(
      "src",
      "/_next/image?url=%2Fdino-parks-wrench.png&w=48&q=75"
    );
  });

  it("does not render the maintenance icon when needsMaintenance is false", () => {
    const mockZone: ZoneProps["zone"] = {
      location: "E5",
      needsMaintenance: false,
      isSafe: true,
    };

    render(<Zone zone={mockZone} />);
    const iconElement = screen.queryByAltText("Maintenance");

    expect(iconElement).not.toBeInTheDocument();
  });

  it("renders with title 'Empty' when zone location is undefined", () => {
    render(<Zone zone={undefined} />);
    const zoneElement = screen.getByTitle("Empty");

    expect(zoneElement).toBeInTheDocument();
  });
});
