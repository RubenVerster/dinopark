export type ZoneType = {
  location: string;
  needsMaintenance: boolean;
  isSafe: boolean | undefined;
};

export interface ZoneProps {
  zone?: ZoneType;
}
