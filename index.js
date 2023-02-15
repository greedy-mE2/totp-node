// const bodyParser = require("body-parser");
import bodyParser from "body-parser";
// const express = require("express");
import express from "express";
// var cors = require("cors");
import cors from "cors";

// const totp = require("totp-generator");
import totp from "totp-generator";
const app = express();

app.use(cors());
// Sample JSON data
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  try {
    const token = totp(req.body.key);
    const retData = {
      susertoken: token,
    };
    res.json(retData);
  } catch (err) {
    const retData = {
      error: "Invalid base32 character in key",
    };
    res.json(retData);
    return;
  }
});

// Server setup
app.listen(4090, () => {
  console.log("server running");
});
