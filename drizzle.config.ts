import "dotenv/config";
import { defineConfig } from "drizzle-kit";

const url = process.env.DB_FILE_NAME!;

export default defineConfig({
  dialect: "sqlite",
  schema: "./src/server/schema.ts",
  dbCredentials: { url },
});
