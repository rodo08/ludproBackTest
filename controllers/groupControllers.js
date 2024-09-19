import pool from "../config/dbConfig.js";

const getAllGroups = async (req, res) => {
  try {
    const [groups] = await pool.query("SELECT * FROM groups_table");
    res.status(200).json(groups);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default getAllGroups;
