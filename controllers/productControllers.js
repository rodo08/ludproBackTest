import pool from "../config/dbConfig.js";

export const createProduct = async (req, res) => {
  const {
    product_name,
    product_description,
    product_value,
    CATEGORIES_idCATEGORIES,
  } = req.body;

  const sql = `
    INSERT INTO products (product_name, product_description, product_value, CATEGORIES_idCATEGORIES)
    VALUES (?, ?, ?, ?)
  `;
  const values = [
    product_name,
    product_description,
    product_value,
    CATEGORIES_idCATEGORIES,
  ];

  try {
    const connection = await pool.getConnection();

    try {
      await connection.query(sql, values);
      res.send("Producto / Servicio registrado con éxito!!");
    } catch (error) {
      console.error("Error inserting data: ", error);
      res.status(500).json({ Error: "Error inserting data" });
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error("Error getting connection from pool: ", error);
    res.status(500).json({ Error: "Error getting connection from pool" });
  }
};
