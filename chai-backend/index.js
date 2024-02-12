///require("dotenv").config(); ///script changes for es6: "dev": "nodemon -r dotenv/config --experimental-json-modules index.js"
import dotenv from "dotenv";
dotenv.config();

import routes from "./routes.js";

// const express = require("express");
import express from "express";
const app = express();
const port = 4000;

///              Route handlers
// app.get("/", (req, res) => {
//   res.send("BACKEND Series!");
// });
app.use("/", routes);

app.get("/socials", (req, res) => {
  res.send({ message: "IMxSuhasTheBoy" });
});
app.get("/youtube", routes);
app.get("/user/:id", routes);
app.get('/search', routes);


///              Catch-All Route : Handle unmatched routes:
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(process.env.PORT, () => {
  console.log(
    `Commitment 26 jan 2024 app listening on port ${process.env.PORT}`
  );
});

// console.log(process.env);
// const memoryUsage = process.memoryUsage();
// console.log('Memory usage:', memoryUsage);

// console.log("Process ID:", process.pid);
// console.log("Node.js Version:", process.version);
// console.log("Platform:", process.platform);

// // index.js
// console.log(process.argv);

////--------------syntax playground for imports/exports
// import { add , subtract} from "./utils/index.js";
// console.log(add, subtract(4, 2));

import math from "./utils/index.js";
// console.log(math.mod(6, 7));
