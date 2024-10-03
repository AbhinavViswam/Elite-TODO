import express from "express";
import {Todo} from "../models/todo.models.js"

const router=express.Router()
const app=express()
// app.use(express.urlencoded({}))

router.get("/",async(req,res)=>{
    try{
    const todos=await Todo.find()
    res.json(todos)
    }catch(err){
        res.status(404).json({message:err.message})
    }

})

router.post("/",async(req,res)=>{
    const {title,description}=req.body
    // console.log(title,description);
    if(!title){
        res.status(400).json({message:"No title provided"})
    }
    else{
        try {
            const newTodo=new Todo({
                title:title,
                description:description
            })    
            const saveTodo=await newTodo.save()  
            res.status(200).json(newTodo) 
        } catch (error) {
            res.status(400).json({message:error.message})
        }
    }
})


router.put("/:id",async (req,res)=>{
    try {
        const todo=await Todo.findById(req.params.id)
        if(!todo){
            res.status(404).json({message:"No todo found"})
        }
        else{
            todo.completed=!todo.completed
            const updatedTodo=await todo.save()
            res.json(updatedTodo)
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


// router.patch("/:id/completed", async (req, res) => {
//     try {
//         const todo = await Todo.findById(req.params.id);
//         if (!todo) {
//             return res.status(404).json({ message: "Todo not found" });
//         }
//         todo.completed = !todo.completed;
//         const updatedTodo = await todo.save();

//         res.json(updatedTodo);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

router.delete("/:id",async(req,res)=>{
    const todo=Todo.findById(req.params.id)
    if(!todo){
        res.status(404).json({message:"No todo found"})
    }
    else{
        try {
            await todo.deleteOne()
            res.json({message:"Todo removed"})
        } catch (error) {
            res.status(500).json({ message: error.message });
        } 
    }
})


export default router