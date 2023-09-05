import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { readUsers } from "./db/index";

const app = new Elysia()
  .use(swagger())
  .get("/", () => {
    return { response: true, users: readUsers() };
  })
  .listen(3000);

if (app.server) {
  console.log(
    `🦊 Elysia is running at ${app.server.hostname}:${app.server.port}`
  );
}
