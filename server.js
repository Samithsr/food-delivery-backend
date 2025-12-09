import express from "express";
import cors from "cors";


// app config
const app = express();
const port = 4000;

// middleware

app.use(express.json());
app.use(cors());


app.get("/",(req,res)=>{
    res.send("API working")
});


app.listen(port,()=>{
    console.log(`server porting on http://localhost:${port}`);
    
})

// mongodb+srv://rgowdasamith_db_user:Sami0821@@cluster0.aqyf6o9.mongodb.net/?