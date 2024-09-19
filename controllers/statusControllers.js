import pool from "../config/dbConfig.js";

export const createStatus = async (req, res) => {
  const { client_status_name } = req.body;

  const sql = "INSERT INTO client_status (client_status_name) VALUES (?)";
  const values = [client_status_name];

  try {
    const connection = await pool.getConnection();

    try {
      const [result] = await connection.query(sql, values);
      res.json({ insertId: result.insertId });
    } catch (err) {
      console.error("Error al crear el estado de cliente:", err);
      res.status(500).send("Error al crear el estado de cliente");
    } finally {
      connection.release();
    }
  } catch (err) {
    console.error("Error al obtener la conexión:", err);
    res.status(500).send("Error al obtener la conexión");
  }
};

export const deleteStatus = async (req, res) => {
  const { id } = req.params;

  const defaultStatusId = 1;

  if (parseInt(id) === defaultStatusId) {
    return res.status(400).send("No se puede eliminar el estado por defecto.");
  }

  const updateClientsStatus =
    "UPDATE clients SET client_status_idclient_status = ? WHERE client_status_idclient_status = ?";
  const deleteStatus = "DELETE FROM client_status WHERE idclient_status = ?";

  try {
    const connection = await pool.getConnection();

    try {
      await connection.query(updateClientsStatus, [defaultStatusId, id]);

      await connection.query(deleteStatus, [id]);

      res.status(200).send("Estado eliminado con éxito.");
    } catch (err) {
      console.error("Error al eliminar el estado:", err);
      res.status(500).send("Error al eliminar el estado.");
    } finally {
      connection.release();
    }
  } catch (err) {
    console.error("Error al obtener la conexión:", err);
    res.status(500).send("Error al obtener la conexión");
  }
};
