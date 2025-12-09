import express from "express";
import { addFood } from "../controllers/foodController.js";
import multer from "multer";
   
const foodRouter = express.Router();



// image store  engine 
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
            return cb(null,`${Date.now()}${file.originalname}`)
    }
})


const upload = multer({storage:storage})

// to send the data our server in post method
foodRouter.post("/add",upload.single("image"),addFood)

export default foodRouter;
