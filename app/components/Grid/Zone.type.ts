export type Zone = {
  location: string;
  needsMaintenance: boolean;
  isSafe: boolean;
};

export interface GridProps {
  zones: Zone[];
}
