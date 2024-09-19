import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/jwtConfig.js";

const verifyAdmin = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ Error: "No token provided" });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ Error: "Invalid token" });
    }

    if (decoded.role !== "admin") {
      return res.status(403).json({ Error: "Access denied" });
    }

    req.email = decoded.email;
    req.name = decoded.name;
    req.lastname = decoded.lastname;
    req.role = decoded.role;

    next();
  });
};

export default verifyAdmin;
