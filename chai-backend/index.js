// require("dotenv").config();
import "dotenv/config";
// const express = require("express");
import express from "express";
const app = express();
const port = 4000;

///              Route handlers
app.get("/", (req, res) => {
  res.send("BACKEND Series!");
});

app.get("/twitter", (req, res) => {
  res.send("IMxSuhasTheBoy");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Chai Aur code</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});

// console.log(process.env);
// console.log("Process ID:", process.pid);
// console.log("Node.js Version:", process.version);
// console.log("Platform:", process.platform);

// // index.js
// console.log(process.argv);
