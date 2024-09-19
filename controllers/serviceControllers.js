import pool from "../config/dbConfig.js";

export const getAllServices = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM products");
    res.json(rows);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ Error: "Error fetching products" });
  }
};

export const getServicesById = async (req, res) => {
  const { idPRODUCTS } = req.params;

  try {
    const [rows] = await pool.query(
      "SELECT * FROM products WHERE idPRODUCTS = ?",
      [idPRODUCTS]
    );
    if (rows.length === 0) {
      return res.status(404).json({ Error: "Service not found" });
    }
    res.json(rows[0]);
  } catch (err) {
    console.error("Error fetching service by ID:", err);
    res.status(500).json({ Error: "Error fetching service by ID" });
  }
};

export const getAllServicesByCategory = async (req, res) => {
  const { idCategory } = req.params;

  try {
    const [rows] = await pool.query(
      "SELECT * FROM products WHERE CATEGORIES_idCATEGORIES = ?",
      [idCategory]
    );
    res.json(rows);
  } catch (err) {
    console.error("Error fetching services by category:", err);
    res.status(500).json({ Error: "Error fetching services by category" });
  }
};

export const createService = async (req, res) => {
  const {
    product_name,
    product_description,
    product_hours,
    product_value,
    CATEGORIES_idCATEGORIES,
    WORKFORCE_VALUE_idWORKFORCE_VALUE,
  } = req.body;

  try {
    const [result] = await pool.query(
      "INSERT INTO products (product_name, product_description, product_hours, product_value, CATEGORIES_idCATEGORIES, WORKFORCE_VALUE_idWORKFORCE_VALUE) VALUES (?, ?, ?, ?, ?, ?)",
      [
        product_name,
        product_description,
        product_hours,
        product_value,
        CATEGORIES_idCATEGORIES,
        WORKFORCE_VALUE_idWORKFORCE_VALUE,
      ]
    );
    res.json({ insertId: result.insertId });
  } catch (err) {
    console.error("Error creating service:", err);
    res.status(500).json({ Error: "Error creating service" });
  }
};

export const deleteService = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ Error: "Service ID is required" });
  }

  try {
    const [result] = await pool.query(
      "DELETE FROM products WHERE idPRODUCTS = ?",
      [id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ Error: "Service not found" });
    }
    res.json({ Message: "Service deleted successfully" });
  } catch (err) {
    console.error("Error deleting service:", err);
    res.status(500).json({ Error: "Error deleting service" });
  }
};
