const mongoose = require("mongoose");
require("dotenv").config();
console.log(process.env.PASSWORD);
const MONGO_URL = `mongodb+srv://dictionary:${process.env.PASSWORD}@cluster0.qsawb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connection.once("open", () => {
  console.log("Mongo Conection ready");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

module.exports = {
  mongoConnect,
};
