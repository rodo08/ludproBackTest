// dotenv.config();

// const app = express();

// app.use(express.json());
// app.use(
//   cors({
//     origin: process.env.CLIENT,
//     methods: ["POST", "GET"],
//     credentials: true,
//   })
// );
// app.use(cookieParser());

// const PORT = process.env.DB_PORT;

// app.use("/", authRoutes);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// const allowedOrigins = [
//     'https://ludpro.com',
//     'https://www.ludpro.com'
//   ];

// app.use(cors({
//     origin: function(origin, callback) {
//       // Permitir solo orígenes en la lista de orígenes permitidos
//       if (allowedOrigins.indexOf(origin) !== -1) {
//         callback(null, true);
//       } else {
//         callback(new Error('Not allowed by CORS'));
//       }
//     },
//     methods: 'GET,POST,PUT,DELETE,OPTIONS',
//     allowedHeaders: 'Content-Type,Authorization'
//   }));

// require('dotenv').config();
// // const express = require('express');

// // const app = express();
// const port = 3000;

// // const mysql = require('mysql');
// const db = mysql.createConnection({
//     host: process.env.host,
//     user: process.env.user,
//     password: process.env.password,
//     database: process.env.database
// });

// console.log(`${db}`);

// LEER SERVICIOS
// app.get("/services", (req, res) => {
//   db.query("SELECT * FROM products", (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

// // LEER UN SERVICIO
// app.get("/services/:idPRODUCTS",(req, res)=>{
//     const idPRODUCTS = req.params.idPRODUCTS;
//     db.query('SELECT * FROM products WHERE idPRODUCTS = ?',
//         [idPRODUCTS],
//         (err, result)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 res.send(result);
//             }
//         }
//     );
// });

// // LEER SERVICIOS DE UNA CATEGORIA
// app.get("/services/category/:idCategory", (req, res) => {
//     const idCategory = req.params.idCategory;
//     db.query(
//         'SELECT * FROM products WHERE CATEGORIES_idCATEGORIES = ?',
//         [idCategory],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//                 res.status(500).send("Error al obtener los servicios");
//             } else {
//                 res.send(result);
//             }
//         }
//     );
// });

// // LEER CATEGORIAS
// app.get("/categories",(req, res)=>{
//     db.query('SELECT * FROM categories',
//     (err, result)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             res.send(result);
//         }
//     });
// });

// // LEER CATEGORIAS
// app.get("/categories",(req, res)=>{
//     db.query('SELECT * FROM categories',
//     (err, result)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             res.send(result);
//         }
//     });
// });

// // LEER GRUPOS
// app.get("/groups",(req, res)=>{
//     db.query('SELECT * FROM groups_table',
//     (err, result)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             res.send(result);
//         }
//     });
// });

// // LEER DEPARTAMENTOS
// app.get("/departments", (req, res) => {
//     db.query('SELECT * FROM departments', (err, result) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send("Error al obtener los departamentos");
//         } else {
//             res.send(result);
//         }
//     });
// });

// // LEER HH HH
// app.get("/workforce-values", (req, res) => {
//     db.query('SELECT * FROM workforce_value', (err, result) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send("Error al obtener los valores HH HH");
//         } else {
//             res.send(result);
//         }
//     });
// });

// // LEER CATEGORIAS DE UN GRUPO
// app.get("/categories/group/:idGroup", (req, res) => {
//     const idGroup = req.params.idGroup;
//     db.query(
//         'SELECT * FROM categories WHERE GROUPS_idGROUPS = ?',
//         [idGroup],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//                 res.status(500).send("Error al obtener las categorías");
//             } else {
//                 res.send(result);
//             }
//         }
//     );
// });

// // LEER CLIENTES
// app.get("/clients",(req, res)=>{
//     db.query('SELECT * FROM clients',
//     (err, result)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             res.send(result);
//         }
//     });
// });

// // LEER ESTADOS
// app.get("/client_statuses",(req, res)=>{

//     db.connect(err => {
//     if (err) {
//         console.error('Error connecting to the database:', err.stack);
//         return;
//     }
//     console.log('Connected to the database');
//     });

//     db.query('SELECT * FROM client_status',
//     (err, result)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             res.send(result);
//         }
//     });
// });

// // CREACIÓN DE PRODUCTO
// app.post("/create/producto",(req, res)=>{
//     const {nombre,descripcion,valor,categoria}={...req.body}

//     db.query('INSERT INTO products(product_name,product_description,product_value,CATEGORIES_idCATEGORIES) VALUES(?,?,?,?)', [nombre,descripcion,valor,categoria],
//     (err, result)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             res.send("Producto / Servicio registrado con éxito!!");
//         }
//     });
// });

// // CREACIÓN DE CLIENTE
// app.post("/create/client",(req, res)=>{
//     const {client_name,
//         client_email,
//         client_position,
//         client_business,
//         client_web,
//         client_phone,
//         client_phone2,
//         client_photo,
//         client_country,
//         client_rut,
//         client_status_id
//     }={...req.body}

//     db.query('INSERT INTO clients(client_name,client_email,client_position,client_business,client_web,client_phone,client_phone2,client_photo,client_country,client_rut,client_status_idclient_status) VALUES(?,?,?,?,?,?,?,?,?,?,?)',
//     [client_name,
//         client_email,
//         client_position,
//         client_business,
//         client_web,
//         client_phone,
//         client_phone2,
//         client_photo,
//         client_country,
//         client_rut,
//         client_status_id
//     ],
//     (err, result)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             res.send("Cliente registrado con éxito!!");
//         }
//     });
// });

// // CREACIÓN DE DEPARTAMENTO
// app.post("/create/department", (req, res) => {
//     const { department_name } = req.body;

//     db.query('INSERT INTO departments(department_name) VALUES(?)', [department_name], (err, result) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send("Error al crear el departamento");
//         } else {
//             res.json({ insertId: result.insertId });
//         }
//     });
// });

// // CREACIÓN DE CLIENT_STATUS
// app.post("/create/status", (req, res) => {
//     const { client_status_name } = req.body;

//     db.query('INSERT INTO client_status (client_status_name) VALUES (?)', [client_status_name], (err, result) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send("Error al crear el estado de cliente");
//         } else {
//             res.json({ insertId: result.insertId });
//         }
//     });
// });

// // CREACIÓN DE HH HH
// app.post("/create/workforcevalue", (req, res) => {
//     const {workforce_role, initial_value, maintenance_value, earning_value, DEPARTMENTS_idDEPARTMENTS} = req.body;

//     db.query('INSERT INTO workforce_value (workforce_role, initial_value, maintenance_value, earning_value, DEPARTMENTS_idDEPARTMENTS) VALUES(?,?,?,?,?)', [workforce_role, initial_value, maintenance_value, earning_value, DEPARTMENTS_idDEPARTMENTS], (err, result) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send("Error al crear valor HH HH");
//         } else {
//             res.json({ insertId: result.insertId });
//         }
//     });
// });

// // CREACIÓN DE SERVICIO
// app.post("/create/service", (req, res) => {
//     const {product_name, product_description, product_hours, product_value, CATEGORIES_idCATEGORIES, WORKFORCE_VALUE_idWORKFORCE_VALUE} = req.body;

//     db.query('INSERT INTO products (product_name, product_description, product_hours, product_value, CATEGORIES_idCATEGORIES, WORKFORCE_VALUE_idWORKFORCE_VALUE) VALUES(?,?,?,?,?,?)', [product_name, product_description, product_hours, product_value, CATEGORIES_idCATEGORIES, WORKFORCE_VALUE_idWORKFORCE_VALUE], (err, result) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send("Error al crear servicio");
//         } else {
//             res.json({ insertId: result.insertId });
//         }
//     });
// });

// // EDITAR CLIENTE
// app.put("/edit-client/:clientId", (req, res) => {
//     const clientId = req.params.clientId;
//     const { client_name, client_email, client_position, client_business, client_web, client_phone, client_phone2, client_photo, client_country, client_rut, client_status_idclient_status } = req.body;

//     db.query('UPDATE clients SET client_name=?, client_email=?, client_position=?, client_business=?, client_web=?, client_phone=?, client_phone2=?, client_photo=?, client_country=?, client_rut=?, client_status_idclient_status=? WHERE idCLIENTS=?',
//         [client_name, client_email, client_position, client_business, client_web, client_phone, client_phone2, client_photo, client_country, client_rut, client_status_idclient_status, clientId],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//                 res.status(500).send("Error al actualizar el cliente");
//             } else {
//                 res.send("Cliente actualizado con éxito!!");
//             }
//         }
//     );
// });

// // EDITAR SERVICIO
// app.put('/services/:id', (req, res) => {
//     // Obtener la ID del servicio de los parámetros de la URL
//     const serviceId = req.params.id;
//     // Obtener los datos del servicio del cuerpo de la solicitud
//     const {
//         product_name,
//         product_description,
//         product_hours,
//         product_value,
//         CATEGORIES_idCATEGORIES,
//         WORKFORCE_VALUE_idWORKFORCE_VALUE
//     } = req.body;

//     // SQL para actualizar el servicio
//     const sql = `
//         UPDATE products
//         SET
//             product_name = ?,
//             product_description = ?,
//             product_hours = ?,
//             product_value = ?,
//             CATEGORIES_idCATEGORIES = ?,
//             WORKFORCE_VALUE_idWORKFORCE_VALUE = ?
//         WHERE idPRODUCTS = ?`;

//     // Ejecutar la consulta SQL con los datos del servicio
//     db.query(
//         sql,
//         [product_name, product_description, product_hours, product_value, CATEGORIES_idCATEGORIES, WORKFORCE_VALUE_idWORKFORCE_VALUE, serviceId],
//         (err, result) => {
//             if (err) {
//                 console.error('Error updating service:', err);
//                 res.status(500).send('Server error');
//             } else {
//                 res.status(200).send('Service updated successfully');
//             }
//         }
//     );
// });

// // ELIMINAR CLIENTE
// app.delete("/delete-client/:id", (req, res) => {
//     const clientId = req.params.id;
//     db.query('DELETE FROM clients WHERE idCLIENTS = ?', [clientId], (err, result) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send("Error al eliminar el cliente");
//         } else {
//             res.send("Cliente eliminado con éxito");
//         }
//     });
// });

// // ELIMINAR SERVICIO
// app.delete("/delete-product/:id", (req, res) => {
//     const serviceId = req.params.id;

//     if (!serviceId) {
//         return res.status(400).send("ID del servicio es requerido");
//     }

//     const sql = 'DELETE FROM products WHERE idPRODUCTS = ?';

//     db.query(sql, [serviceId], (err, result) => {
//         if (err) {
//             console.error('Error al eliminar el servicio:', err);
//             res.status(500).send("Error al eliminar el servicio");
//         } else if (result.affectedRows === 0) {
//             res.status(404).send("Servicio no encontrado");
//         } else {
//             res.send("Servicio eliminado con éxito");
//         }
//     });
// });

// // ELIMINAR CLIENT_STATUS
// app.delete('/delete/status/:id', (req, res) => {
//     const { id } = req.params;

//     // ID del estado "Sin estado"
//     const defaultStatusId = 1;

//     if (parseInt(id) === defaultStatusId) {
//         return res.status(400).send("No se puede eliminar el estado por defecto.");
//     }

//     const updateClientsStatus = "UPDATE clients SET client_status_idclient_status = ? WHERE client_status_idclient_status = ?";
//     const deleteStatus = "DELETE FROM client_status WHERE idclient_status = ?";

//     db.query(updateClientsStatus, [defaultStatusId, id], (updateErr, updateResult) => {
//         if (updateErr) {
//             console.error("Error al actualizar los clientes:", updateErr);
//             return res.status(500).send("Error al actualizar los clientes.");
//         }

//         db.query(deleteStatus, [id], (deleteErr, deleteResult) => {
//             if (deleteErr) {
//                 console.error("Error al eliminar el estado:", deleteErr);
//                 return res.status(500).send("Error al eliminar el estado.");
//             }

//             res.status(200).send("Estado eliminado con éxito.");
//         });
//     });
// });

// // // Multer para manejar la carga de archivos
// // const storage = multer.diskStorage({
// //     destination: (req, file, cb) => {
// //         cb(null, './public/images'); // Directorio donde se almacenarán las imágenes
// //     },
// //     filename: (req, file, cb) => {
// //         const ext = path.extname(file.originalname);
// //         cb(null, 'image-' + Date.now() + ext); // Nombre de archivo único
// //     }
// // });
// // const upload = multer({ storage: storage });

// // // Endpoint para cargar imágenes
// // app.post('/upload-image', upload.single('image'), (req, res) => {
// //     if (!req.file) {
// //         return res.status(400).json({ error: 'No file uploaded' });
// //     }
// //     const imagePath = '/images/' + req.file.filename; // Ruta de la imagen almacenada
// //     res.json({ imagePath });
// // });

// // CREAR USUARIO V2

// const router = express.Router();

// // Función para manejar la solicitud de registro de usuarios
// // app.post('/register', async (req, res) => {
// //     // Extrae los datos del cuerpo de la solicitud
// //     const {email,username,lastname,password}={...req.body}

// //     // Validación de datos de entrada
// //     if (!email || !username || !lastname || !password) {
// //         return res.status(400).json({ status: 'error', message: 'Campos incompletos' });
// //     }

// //     // Hashea la contraseña utilizando bcryptjs
// //     const salt = await bcryptjs.genSalt(10);
// //     const hashedPassword = await bcryptjs.hash(password, salt);

// //     db.query('INSERT INTO users(email,username,lastname,password_hash,password_salt) VALUES(?,?,?,?,?)', [email,username,lastname,hashedPassword,salt],
// //             (err, result)=>{
// //                 if(err){
// //                     console.log(err);
// //                 }
// //             });

// //     // Envía una respuesta al cliente
// //     res.status(201).json({ status: 'success', message: 'Usuario registrado correctamente' });
// // });

// app.post('/register', async (req, res) => {
//   const {email, username, lastname, password} = req.body;

//   if (!email || !username || !lastname || !password) {
//     return res.status(400).json({ status: 'error', message: 'Campos incompletos' });
//   }

//   try {
//     const salt = await bcryptjs.genSalt(10);
//     const hashedPassword = await bcryptjs.hash(password, salt);

//     db.query('INSERT INTO users(email, username, lastname, password_hash, password_salt) VALUES(?,?,?,?,?)',
//       [email, username, lastname, hashedPassword, salt],
//       (err, result) => {
//         if (err) {
//           console.log(err);
//           return res.status(500).json({ status: 'error', message: 'Error al registrar el usuario' });
//         }
//         res.status(201).json({ status: 'success', message: 'Usuario registrado correctamente' });
//       });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ status: 'error', message: 'Error del servidor' });
//   }
// });

// // AUTENTICACIÓN DE USUARIO

// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).json({ status: 'error', message: 'Campos incompletos' });
//     }

//     // Busca el usuario en la base de datos por su correo electrónico
//     db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).json({ status: 'error', message: 'Error del servidor' });
//         }

//         if (results.length === 0) {
//             return res.status(401).json({ status: 'error', message: 'Credenciales inválidas' });
//         }

//         const user = results[0];

//         // Verifica la contraseña utilizando bcrypt
//         const passwordMatch = await bcryptjs.compare(password, user.password_hash);
//         if (!passwordMatch) {
//             return res.status(401).json({ status: 'error', message: 'Credenciales inválidas' });
//         }

//         res.status(200).json({ status: 'success', message: 'Inicio de sesión exitoso' });
//     });
// });

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })
