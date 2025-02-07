import axios from "axios";
import { LogEntry } from "./types";
import { ZoneType } from "../components/Zone/Zone.type";

const processLogs = (logs: LogEntry[]): ZoneType[] => {
  const zoneMap: Record<string, ZoneType> = {};

  logs.forEach((log) => {
    if (
      log.kind === "dino_location_updated" ||
      log.kind === "maintenance_performed"
    ) {
      const location = log.location!;
      const isSafe = log.kind === "maintenance_performed";

      zoneMap[location] = {
        location,
        needsMaintenance: isSafe,
        isSafe,
      };
    }
  });

  return Object.values(zoneMap);
};

const logActivity = async (visitorId: string, action: string) => {
  try {
    await axios.post("/api/logging", { visitorId, action });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Failed to log activity:", error.message);
    } else {
      console.error("Failed to log activity: Unknown error");
    }
  }
};

export const fetchZones = async (visitorId: string): Promise<ZoneType[]> => {
  try {
    await logActivity(visitorId, "Requested zone logs");
    const response = await axios.get<LogEntry[]>(
      "https://dinoparks.herokuapp.com/nudls/feed"
    );
    return processLogs(response.data);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching zones:", error.message);
      await logActivity(
        visitorId,
        `Failed to fetch zone logs: ${error.message}`
      );
      throw new Error("Failed to fetch zones data. Please try again later.");
    } else {
      console.error("Error fetching zones: Unknown error");
      await logActivity(visitorId, "Failed to fetch zone logs: Unknown error");
      throw new Error("Failed to fetch zones data. Please try again later.");
    }
  }
};

export { processLogs };
