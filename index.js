import express from "express";
import mongoose from "mongoose";
import { User } from "./models/User.js";
import usersRoute from "./routes/usersRoute.js";
import cors from "cors";

const app = express();

// Middleware
app.use(express.json());

// CORS policy
app.use(cors());
app.get("/", (req, res) => {
  res.send("Nlah");
});

// Middleware for user route
app.use("/user", usersRoute);

mongoose
  .connect(
    "mongodb+srv://Sherzy:1234@rilli.cuu1h3b.mongodb.net/Users?retryWrites=true&w=majority&appName=Rilli"
  )
  .then(() => {
    console.log("connected");
    app.listen(5555, () => {
      console.log("Server is running");
    });
  })
  .catch((error) => {
    console.log(error);
  });
