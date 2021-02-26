const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routes = require("./routes");
const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./portfolioapp/build")));
  app.get(`*`, (_, res) => {
    res.sendFile(path.join(__dirname, "./portfolioapp/build/index.html"));
  });
}

app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) return console.error(err);
    console.log("Connected to MongoDB!");
  }
);

app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`));
