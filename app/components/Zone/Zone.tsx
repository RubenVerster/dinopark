import Image from "next/image";

type ZoneType = {
  location: string;
  needsMaintenance: boolean;
  isSafe: boolean;
};

interface ZoneProps {
  zone?: ZoneType;
}

const Zone: React.FC<ZoneProps> = ({ zone }) => {
  const { needsMaintenance, isSafe } = zone || {};
  const backgroundColor =
    isSafe === undefined ? "#fff" : isSafe ? "#51B687" : "#ff5a5a";

  return (
    <div
      className="zone"
      style={{ backgroundColor }}
      title={zone?.location || "Empty"}
    >
      {needsMaintenance && (
        <Image
          src="/dino-parks-wrench.png"
          alt="Maintenance"
          className="icon"
          width={20}
          height={20}
        />
      )}
    </div>
  );
};

export default Zone;
