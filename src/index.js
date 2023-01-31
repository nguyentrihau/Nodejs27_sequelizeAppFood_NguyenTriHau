/**
 * npm start
 * yarn add express
 * yarn add nodemon
 * commonjs module => import thu vien express
 */
const express = require("express");

//gan lai ham cho mot bien moi
const app = express();
//cho phep server backend doc duoc chuoi json
//middleware
app.use(express.json());

//cho fontend lay du lieu
const cors = require("cors");
const rootRoute = require("./routes/rootRoute");
app.use(cors());

//khoi tao bang server Express
//port: dia chi dinh danh sever
app.listen(8080);

app.use("/api", rootRoute);
