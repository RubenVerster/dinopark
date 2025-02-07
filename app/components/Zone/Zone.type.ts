type ZoneType = {
  location: string;
  needsMaintenance: boolean;
  isSafe: boolean | undefined;
};

interface ZoneProps {
  zone?: ZoneType;
}

export type { ZoneType, ZoneProps };
