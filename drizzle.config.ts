import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema/*",
  out: "./src/db/migrations",
  driver: "libsql",
  dbCredentials: {
    url: "file:./example.db",
  },
} satisfies Config;
