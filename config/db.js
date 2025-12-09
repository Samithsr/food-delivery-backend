import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rgowdasamith_db_user:Sami0821%40@cluster0.aqyf6o9.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
