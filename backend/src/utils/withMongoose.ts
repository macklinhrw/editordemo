import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

/**
 * When this file is imported, it forms a single and consistent connection to the MongoDB server.
 * This works because when it is imported, the file runs and creates a consistent export connection.
 */

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  autoIndex: true,
});

const connection = mongoose.connection;

connection.on(
  "error",
  console.error.bind(console, "Database connection error:")
);
connection.once("open", () => {
  console.log("Database connection success!");
});

export { connection };
