import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

// app config
const app = express();
const port = 4000;

// middeleware
app.use(express.json());
app.use(cors());


//db connection

connectDB();

// api endpoints
app.use("/api/food",foodRouter)

app.get("/", (req, res) => {
  res.send("API WORKING");
});


app.listen(port,()=>{
    console.log(`Serving port on http://localhost:${port}`);
})










// mongodb+srv://rgowdasamith_db_user:Sami0821@@cluster0.aqyf6o9.mongodb.net/?