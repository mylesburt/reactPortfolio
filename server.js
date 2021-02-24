import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
