require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

const router = require("./routes/index");

mongoose.connect(
  process.env.MONGO_URL + ":" + process.env.DB_PORT,
  {
    dbName: process.env.DB_NAME || "test",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) {
      throw new Error(err);
    }
    console.info("Connected to MongoDB");
  }
);

const app = express()
  .use(cors())
  .use(morgan("dev"))
  .use(express.json())
  .use("/api", router);

app.listen(process.env.APP_PORT, (err) => {
  if (err) {
    throw new Error(err);
  }
  console.info(">".repeat(40));
  console.info("Reboot Server life");
  console.info("HOST: ", process.env.APP_HOST);
  console.info("PORT: ", process.env.APP_PORT);
  console.info(">".repeat(40) + "\n");
});
