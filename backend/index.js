import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/user-routes";



dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/user/", router);

mongoose.connect(process.env.DB_URL)
    .then(() => app.listen(3000))
    .then(() => console.log("Connected to db and listening http://localhost:3000"))



