import knex from "knex";
import dotenv from "dotenv";

dotenv.config();
export abstract class BaseDatabase {
  private static connection: any | null = null;

  protected getConnection(): any {
    if (!BaseDatabase.connection) {
      BaseDatabase.connection = knex({
        client: "mysql",
        connection: {
          host: process.env.DB_HOST,
          port: 3306,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_SCHEMA,
          multipleStatements: true,
        },
      });
    }

    return BaseDatabase.connection;
  }

  public static async destroyConnection(): Promise<void> {
    if (BaseDatabase.connection) {
      await BaseDatabase.connection.destroy();
      BaseDatabase.connection = null;
    }
  }
}
