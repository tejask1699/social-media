const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

const app = express();

dotenv.config();

// process.env.MONGO_URL

mongoose
  .connect("mongodb://localhost:27017/social")
  .then((res) => {
    console.log("Connect to db");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(helmet());
app.use(morgan());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(5000, () => {
  console.log("server is running!!");
});
