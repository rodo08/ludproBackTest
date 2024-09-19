import pool from "../config/dbConfig.js";

export const getAllCategories = async (req, res) => {
  try {
    const connection = await pool.getConnection();
    try {
      const [result] = await connection.query("SELECT * FROM categories");
      res.send(result);
    } finally {
      connection.release();
    }
  } catch (err) {
    console.error("Error al obtener las categorías: ", err);
    res.status(500).send("Error al obtener las categorías");
  }
};

export const getCategoriesbyId = async (req, res) => {
  const idGroup = req.params.idGroup;

  try {
    const connection = await pool.getConnection();
    try {
      const [result] = await connection.query(
        "SELECT * FROM categories WHERE GROUPS_idGROUPS = ?",
        [idGroup]
      );
      res.send(result);
    } finally {
      connection.release();
    }
  } catch (err) {
    console.error("Error al obtener las categorías por ID de grupo: ", err);
    res.status(500).send("Error al obtener las categorías por ID de grupo");
  }
};
