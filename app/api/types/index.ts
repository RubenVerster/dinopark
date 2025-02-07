export type LogEntry =
  | DinoFed
  | DinoLocationUpdated
  | DinoRemoved
  | DinoAdded
  | MaintenancePerformed;

export interface BaseLog {
  kind: string;
  park_id: number;
  time: string;
}

export interface DinoFed extends BaseLog {
  kind: "dino_fed";
  dinosaur_id: number;
}

export interface DinoLocationUpdated extends BaseLog {
  kind: "dino_location_updated";
  location: string;
  dinosaur_id: number;
}

export interface DinoRemoved extends BaseLog {
  kind: "dino_removed";
  dinosaur_id: number;
}

export interface DinoAdded extends BaseLog {
  kind: "dino_added";
  name: string;
  species: string;
  gender: "male" | "female";
  id: number;
  digestion_period_in_hours: number;
  herbivore: boolean;
}

export interface MaintenancePerformed extends BaseLog {
  kind: "maintenance_performed";
  location: string;
}
