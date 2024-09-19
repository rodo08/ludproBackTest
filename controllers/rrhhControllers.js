import pool from "../config/dbConfig.js";

export const createRRHH = async (req, res) => {
  const {
    workforce_role,
    initial_value,
    maintenance_value,
    earning_value,
    DEPARTMENTS_idDEPARTMENTS,
  } = req.body;

  const sql = `
    INSERT INTO workforce_value (workforce_role, initial_value, maintenance_value, earning_value, DEPARTMENTS_idDEPARTMENTS)
    VALUES (?, ?, ?, ?, ?)
  `;
  const values = [
    workforce_role,
    initial_value,
    maintenance_value,
    earning_value,
    DEPARTMENTS_idDEPARTMENTS,
  ];

  try {
    const connection = await pool.getConnection();

    try {
      const [result] = await connection.query(sql, values);
      res.json({ insertId: result.insertId });
    } catch (error) {
      console.error("Error inserting data: ", error);
      res.status(500).send("Error al crear valor HH HH");
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error("Error getting connection: ", error);
    res.status(500).send("Error al obtener la conexión");
  }
};

export const getAllRRHH = async (req, res) => {
  const sql = "SELECT * FROM workforce_value";

  try {
    const connection = await pool.getConnection();

    try {
      const [result] = await connection.query(sql);
      res.send(result);
    } catch (error) {
      console.error("Error fetching data: ", error);
      res.status(500).send("Error al obtener los valores HH HH");
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error("Error getting connection: ", error);
    res.status(500).send("Error al obtener la conexión");
  }
};
