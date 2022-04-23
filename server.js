const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const { mongoConnect } = require("./services/mongo.service");

require("dotenv").config();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: "",
  })
);

app.use(express.json());

app.get("/api", (req, res) => {
  console.log(req.url);
  res.send("hiii");
});

async function startServer() {
  await mongoConnect();

  app.listen(PORT, () => {
    console.log(`Listening  to the port ${PORT}`);
  });
}

startServer();
