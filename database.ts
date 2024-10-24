import pg from "npm:pg";
import { logger } from "./utils/logger.ts";

class Database {
  private client;

  constructor(
    config: {
      user: string;
      password: string;
      database: string;
      hostname: string;
      port: number;
    },
  ) {
    const { Client } = pg;
    this.client = new Client({
      user: config.user,
      password: config.password,
      database: config.database,
      host: config.hostname,
      port: config.port,
    });

    this.client.connect().then(() => {
      logger.info("Database connected");
    }).catch((err: Error) => {
      logger.error(err);
    });
  }

  public async query<T extends object>(query: string): Promise<T[]> {
    const result = await this.client.query(query);
    return result.rows as T[];
  }

  public async close() {
    await this.client.end();
  }
}

export default Database;
