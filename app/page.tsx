"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "./components/Grid";
import Image from "next/image";

type Zone = {
  location: string;
  needsMaintenance: boolean;
  isSafe: boolean;
};

const Home: React.FC = () => {
  const [zones, setZones] = useState<Zone[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dinoparks.herokuapp.com/nudls/feed"
        );
        const processedZones = processLogs(response.data);
        setZones(processedZones);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const processLogs = (logs: any[]): Zone[] => {
    const zoneMap: Record<string, Zone> = {};

    logs.forEach((log) => {
      if (
        log.kind === "dino_location_updated" ||
        log.kind === "maintenance_performed"
      ) {
        const location = log.location;
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

  return (
    <div className="app">
      <header className="app-header">
        <Image
          src="/dinoparks-logo.png"
          alt="Dinoparks Logo"
          className="logo"
          width={100}
          height={100}
        />
        <h1>Park Zones</h1>
        <p>{new Date().toLocaleDateString()}</p>
      </header>

      <main>
        <Grid zones={zones} />
      </main>
    </div>
  );
};

export default Home;
