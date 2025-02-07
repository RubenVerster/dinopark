import { NextResponse, NextRequest } from "next/server";
import path from "path";
import { promises as fs } from "fs";

const logFilePath = path.join(process.cwd(), "logs", "activity.log");

export async function POST(request: NextRequest) {
  try {
    const { visitorId, action } = await request.json();

    if (!visitorId || !action) {
      return NextResponse.json(
        { error: "Missing visitorId or action" },
        { status: 400 }
      );
    }

    const logEntry = `[${new Date().toISOString()}] Visitor ID: ${visitorId}, Action: ${action}\n`;

    await fs.appendFile(logFilePath, logEntry, "utf8");

    return NextResponse.json({ message: "Log saved successfully!" });
  } catch (error) {
    console.error("Error writing log:", error);
    return NextResponse.json(
      { error: "Failed to log activity" },
      { status: 500 }
    );
  }
}
