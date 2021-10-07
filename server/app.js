const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

require("dotenv").config();

mongoose
  .connect(process.env.db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected To the database");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/user", require("./routes/userRoute"));

app.listen(8080, () => {
  console.log("server running on port 8080");
});
