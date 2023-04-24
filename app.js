const express = require("express");
const mailSend = require("./nodemailer");
const app = express();

app.get("/", (req, res) => {
  return res.send("Hello world");
});

mailSend("xyz", "xyz@gmail.com");

app.listen(5000, () => console.log("app running on port 5000"));
