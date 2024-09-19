import pool from "../config/dbConfig.js";

export const getAllClients = async (req, res) => {
  try {
    const connection = await pool.getConnection();
    try {
      const [rows] = await connection.query("SELECT * FROM clients");
      res.send(rows);
    } catch (error) {
      console.error("Error executing query: ", error);
      res.status(500).send({ Error: "Error executing query" });
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error("Error getting connection: ", error);
    res.status(500).send({ Error: "Error getting connection" });
  }
};

export const getClientStatus = async (req, res) => {
  try {
    const connection = await pool.getConnection();
    try {
      const [rows] = await connection.query("SELECT * FROM client_status");
      res.send(rows);
    } catch (error) {
      console.error("Error executing query: ", error);
      res.status(500).send({ Error: "Error executing query" });
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error("Error getting connection: ", error);
    res.status(500).send({ Error: "Error getting connection" });
  }
};
