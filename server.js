import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import router from "./routes/index.js";
import pool from "./config/dbConfig.js";

dotenv.config();

async function testConnection() {
  try {
    const [rows, fields] = await pool.query("SELECT 1 + 1 AS result");
    console.log("Database connection test successful:", rows[0].result === 2);
  } catch (error) {
    console.error("Failed to connect to the database:", error.message);
  }
}
testConnection();

const app = express();
app.use(
  cors({
    origin: process.env.CLIENT || "https://app.ludpro.com/",
    credentials: true,
    //methods: ["POST", "GET", "PUT", "DELETE"],
  })
);
app.use(express.json());

console.log("CLIENT: ", process.env.CLIENT);
app.use(cookieParser());

const PORT = process.env.APP_PORT;

app.use("/", router);

try {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
} catch (error) {
  console.log(error);
}
