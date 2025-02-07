import React from "react";
import { render, screen } from "@testing-library/react";
import Grid from "./Grid";
import { ZoneType } from "../Zone/Zone.type";

jest.mock("../Zone", () => {
  return function MockZoneComponent({ zone }: { zone: ZoneType }) {
    return <div data-testid="zone">{zone?.location || "Empty"}</div>;
  };
});

describe("Grid Component", () => {
  const mockZones: ZoneType[] = [
    { location: "A1", needsMaintenance: false, isSafe: true },
    { location: "B1", needsMaintenance: true, isSafe: false },
    { location: "C1", needsMaintenance: false, isSafe: true },
  ];

  it("renders the correct number of rows and columns", () => {
    render(<Grid zones={mockZones} />);

    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(16);

    rows.forEach((row) => {
      expect(row.children).toHaveLength(27);
    });
  });

  it("renders ZoneComponent for each zone in the grid", () => {
    render(<Grid zones={mockZones} />);

    const zones = screen.getAllByTestId("zone");
    expect(zones).toHaveLength(16 * 26);

    expect(screen.getByText("A1")).toBeInTheDocument();
    expect(screen.getByText("B1")).toBeInTheDocument();
    expect(screen.getByText("C1")).toBeInTheDocument();
  });

  it("renders 'Empty' for locations without zones", () => {
    render(<Grid zones={mockZones} />);

    const emptyZones = screen.getAllByText("Empty");
    expect(emptyZones.length).toBeGreaterThan(0);
  });
});
