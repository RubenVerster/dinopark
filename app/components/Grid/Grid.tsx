import ZoneComponent from "../Zone";

type Zone = {
  location: string;
  needsMaintenance: boolean;
  isSafe: boolean;
};

interface GridProps {
  zones: Zone[];
}

const Grid: React.FC<GridProps> = ({ zones }) => {
  return (
    <div className="grid">
      {[...Array(16)].map((_, rowIndex) => (
        <div className="grid-row" key={rowIndex}>
          {[...Array(26)].map((_, colIndex) => {
            const location = `${String.fromCharCode(65 + colIndex)}${
              rowIndex + 1
            }`;
            const zone = zones.find((z) => z.location === location);
            return <ZoneComponent key={location} zone={zone} />;
          })}
        </div>
      ))}
    </div>
  );
};

export default Grid;
