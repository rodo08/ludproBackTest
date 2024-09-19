import pool from "../config/dbConfig.js";

export const createDepartment = async (req, res) => {
  const { department_name } = req.body;

  try {
    const connection = await pool.getConnection();

    try {
      const [result] = await connection.query(
        "INSERT INTO departments (department_name) VALUES (?)",
        [department_name]
      );

      res.json({ insertId: result.insertId });
    } catch (error) {
      console.error("Error al crear el departamento:", error);
      res.status(500).send("Error al crear el departamento");
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error("Error al obtener una conexión:", error);
    res.status(500).send("Error al obtener una conexión");
  }
};

export const getAllDepartments = async (req, res) => {
  try {
    const connection = await pool.getConnection();

    try {
      const [result] = await connection.query("SELECT * FROM departments");

      res.send(result);
    } catch (error) {
      console.error("Error al obtener los departamentos:", error);
      res.status(500).send("Error al obtener los departamentos");
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error("Error al obtener una conexión:", error);
    res.status(500).send("Error al obtener una conexión");
  }
};
