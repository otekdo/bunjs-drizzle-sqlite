import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";
import { users, InsertUser } from "./schema/users";

const sqlite = new Database("example.db");
const db = drizzle(sqlite);

export const readUsers = () => {
  return db.select().from(users).all();
};

export const insertUser = (user: InsertUser) => {
  return db.insert(users).values(user).run();
};
