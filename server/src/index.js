import express from "express";
import dotenv from "dotenv";
import cors from 'cors'

import connectDB from "./config.js"
import router from "./routes/todo.routes.js"

const app=express()

dotenv.config()

connectDB()

app.use(express.urlencoded())
app.use(express.json())
app.use(cors())
app.use("/api/todos",router)

app.listen(process.env.PORT || 5000,() =>{
    console.log(`Server is now running on port ${process.env.PORT}`);
})

  