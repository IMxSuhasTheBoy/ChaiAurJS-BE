///require("dotenv").config(); ///script changes for es6: "dev": "nodemon -r dotenv/config --experimental-json-modules index.js"
import dotenv from "dotenv"; //! learn its working as hitesh said its async too...
dotenv.config();

// import routes from "./routes.js";

// const express = require("express");
import express from "express";
const app = express();
const PORT = 4000;

// app.use("/", routes);

// app.get("/", (req, res) => {
//   res.send("BACKEND Series!");
// });

app.get("/api/sentence", (req, res) => {
  const sentence = [
    {
      id: 1,
      title: "a sentence",
      content: "first sentence. first sentence.",
    },
    {
      id: 2,
      title: "a sentence",
      content: "second sentence. second sentence.",
    },
    {
      id: 3,
      title: "a sentence",
      content: "third sentence. third sentence.",
    },
    {
      id: 4,
      title: "a sentence",
      content: "forth sentence. forth sentence.",
    },
    {
      id: 5,
      title: "a sentence",
      content: "fifth sentence. fifth sentence.",
    },
  ];
  //TODO: https://jsonformatter.org/  to see DATA in tree format
  res.send(sentence);
});
// app.get("/youtube", routes);
// app.get("/user/:id", routes);
// app.get('/search', routes);

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(process.env.PORT || PORT, () => {
  console.log(
    `Commitment 26 jan 2024 app serving at http://localhost:${process.env.PORT}`
  );
});

// console.log(process.env);
// const memoryUsage = process.memoryUsage();
// console.log('Memory usage:', memoryUsage);

// console.log("Process ID:", process.pid);
// console.log("Node.js Version:", process.version);
// console.log("Platform:", process.platform);

// console.log(process);
// console.log(__dirname);
// console.log(__filename);
// console.log(module);

// import { stdin, stdout } from 'node:process';
// process.stdout.write("hsd");

// // index.js
// console.log(process.argv);
