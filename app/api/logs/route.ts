import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const logFilePath = path.join(process.cwd(), "logs", "activity.log");
    const fileContent = await fs.readFile(logFilePath, "utf-8");
    return NextResponse.json({ logs: fileContent });
  } catch (error) {
    console.error("Error reading log file:", error);
    return NextResponse.json(
      { error: "Failed to read log file" },
      { status: 500 }
    );
  }
}
