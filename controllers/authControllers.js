import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../config/dbConfig.js";
import { JWT_SECRET, JWT_EXPIRATION } from "../config/jwtConfig.js";
import { promisify } from "util";

const salt = 10;

export const register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(
      req.body.password.toString(),
      salt
    );

    const sql = `
      INSERT INTO ludpro_users (name, lastname, email, role, password)
      VALUES (?, ?, ?, ?, ?)
    `;
    const values = [
      req.body.name,
      req.body.lastname,
      req.body.email,
      req.body.role,
      hashedPassword,
    ];

    // Obtener una conexión del pool
    const connection = await pool.getConnection();

    try {
      // Ejecutar la consulta
      const [result] = await connection.query(sql, values);
      res.json({ Status: "Success", Result: result });
    } catch (error) {
      console.error("Error inserting data: ", error);
      res.json({ Error: "Error inserting data" });
    } finally {
      // Liberar la conexión
      connection.release();
    }
  } catch (error) {
    console.error("Error hashing password: ", error);
    res.json({ Error: "Error hashing password" });
  }
};

const query = promisify(pool.query).bind(pool);

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ detail: "Email and Password are required" });
  }

  try {
    const [rows] = await pool.query(
      "SELECT * FROM ludpro_users WHERE email = ?",
      [email]
    );

    if (rows.length === 0) {
      return res.status(404).json({ detail: "User does not exist" });
    }

    const storedPassword = rows[0].password;

    if (!storedPassword) {
      return res
        .status(500)
        .json({ detail: "Stored password hash is missing" });
    }

    const success = await bcrypt.compare(password, storedPassword);

    if (success) {
      const token = jwt.sign({ email }, "secret", { expiresIn: "1hr" });
      res.json({ email: rows[0].email, token });
    } else {
      res.status(401).json({ detail: "Password is incorrect" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ detail: "An error occurred" });
  }
};

export const updateUser = (req, res) => {
  const userId = req.params.userId;
  const { name, lastname, email, role, password } = req.body;

  // Verificamos si se envía una nueva contraseña para hacer hash
  if (password) {
    bcrypt.hash(password.toString(), salt, (err, hash) => {
      if (err) return res.status(500).json({ Error: "Error hashing password" });

      // Hacemos el update de los datos incluyendo la nueva contraseña hasheada
      db.query(
        "UPDATE ludpro_users SET name=?, lastname=?, email=?, role=?, password=? WHERE id=?",
        [name, lastname, email, role, hash, userId],
        (err, result) => {
          if (err) {
            console.log(err);
            return res.status(500).json({ Error: "Error updating user" });
          } else {
            return res.json({ Status: "User updated successfully!" });
          }
        }
      );
    });
  } else {
    // Si no se cambia la contraseña, solo actualizamos los otros datos
    db.query(
      "UPDATE ludpro_users SET name=?, lastname=?, email=?, role=? WHERE id=?",
      [name, lastname, email, role, userId],
      (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ Error: "Error updating user" });
        } else {
          return res.json({ Status: "User updated successfully!" });
        }
      }
    );
  }
};
//ojo daba siempre ok 200
export const deleteUser = (req, res) => {
  const userId = req.params.userId;
  console.log(userId);

  db.query("DELETE FROM ludpro_users WHERE id = ?", [userId], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error al eliminar el usuario");
    }

    if (result.affectedRows === 0) {
      return res.status(404).send("Usuario no encontrado");
    }

    return res.send("Usuario eliminado con éxito");
  });
};

export const logout = (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Success" });
};
