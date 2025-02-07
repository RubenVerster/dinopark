"use client";

import React, { useEffect, useState } from "react";
import Grid from "./components/Grid";
import Image from "next/image";
import { fetchZones } from "./api/zoneservices";
import { ZoneType } from "./components/Zone/Zone.type";
import { v4 as uuidv4 } from "uuid";

const Home: React.FC = () => {
  const [zones, setZones] = useState<ZoneType[]>([]);
  const [visitorId, setVisitorId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const existingVisitorId = localStorage.getItem("visitorId");
      const uniqueVisitorId = existingVisitorId || uuidv4();

      if (!existingVisitorId) {
        localStorage.setItem("visitorId", uniqueVisitorId);
      }
      if (!visitorId) {
        setVisitorId(uniqueVisitorId);
      }

      const fetchData = async () => {
        try {
          const zonesData = await fetchZones(uniqueVisitorId);
          setZones(zonesData);
        } catch (error) {
          console.error("Error fetching data", error);
        }
      };

      fetchData();
    }
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <Image
          src="/dinoparks-logo.png"
          alt="Dinoparks Logo"
          className="logo"
          width={400}
          height={100}
          priority
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
