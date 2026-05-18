"use server";

import fs from "node:fs/promises";
import path from "node:path";

export async function getMarkdownFile(filename: string) {
  try {
    const filePath = path.join(process.cwd(), filename);
    const content = await fs.readFile(filePath, "utf-8");
    return content;
  } catch (error) {
    console.error(`Error reading markdown file ${filename}:`, error);
    return null;
  }
}
