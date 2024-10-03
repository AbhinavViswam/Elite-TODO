import mongoose from 'mongoose'

const todoSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        default:"No Description Provided"
    },
    completed:{
        type:Boolean,
        default:false
    }
},
{
    timestamps:true
}
)

export const Todo=mongoose.model('Todo',todoSchema)