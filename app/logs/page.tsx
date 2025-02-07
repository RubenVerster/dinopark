"use client";

import React, { useEffect, useState } from "react";

const LogsPage: React.FC = () => {
  const [logs, setLogs] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLogs = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/logs");
        if (!response.ok) throw new Error("Failed to fetch logs");
        const data = await response.json();
        setLogs(data.logs);
      } catch (error) {
        console.error("Error fetching logs:", error);
        setLogs("Error fetching logs.");
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Activity Logs</h1>
      {loading ? (
        <p>Loading logs...</p>
      ) : (
        <pre className="bg-gray-100 p-4 rounded-md overflow-auto">{logs}</pre>
      )}
    </div>
  );
};

export default LogsPage;
