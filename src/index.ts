import { createConnection } from "typeorm";
import dotenv from "dotenv";
import { Client } from "./entities/Client";
import { Banker } from "./entities/Banker";
import { Transaction } from "./entities/Transaction";

// Load environment variables
dotenv.config();

const main = async () => {
  try {
    const connection = await createConnection({
      type: process.env.DB_TYPE as "postgres",
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || "5432"),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Client, Banker, Transaction],
      synchronize: process.env.DB_SYNCHRONIZE === "true",
    });

    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1);
    
  }
};

main();