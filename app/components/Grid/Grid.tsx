import React, { useMemo } from "react";
import ZoneComponent from "../Zone";
import { GridProps } from "./Grid.type";

const Grid: React.FC<GridProps> = ({ zones }) => {
  const rows = 16; // Number rows
  const cols = 26; // Alphabet columns

  const columnHeaders = useMemo(
    () => Array.from({ length: cols }, (_, i) => String.fromCharCode(65 + i)),
    [cols]
  );

  const gridData = useMemo(() => {
    return Array.from({ length: rows }, (_, rowIndex) =>
      Array.from({ length: cols }, (_, colIndex) => {
        const location = `${String.fromCharCode(65 + colIndex)}${rowIndex + 1}`;
        const zone = zones.find((z) => z.location === location);
        return { location, zone };
      })
    );
  }, [zones]);

  return (
    <div className="grid-container">
      <div className="grid-header-row">
        <div className="grid-header-cell" />{" "}
        {columnHeaders.map((letter) => (
          <div key={letter} className="grid-header-cell">
            {letter}
          </div>
        ))}
      </div>

      {gridData.map((row, rowIndex) => (
        <div className="grid-row" role="row" key={`row-${rowIndex}`}>
          <div className="grid-header-cell">{rowIndex + 1}</div>{" "}
          {row.map(({ location, zone }) => (
            <ZoneComponent key={location} zone={zone} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default React.memo(Grid);
