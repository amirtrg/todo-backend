const mongoose =require("mongoose")

const TodoSchema = new mongoose.Schema(
    {   
        name:{
            required:true,
            type:String,
            minLength:4
        },
        password:{
            required:true,
            type:String,
            minLength:4
        },
        date:{
            default:new Date(),
            type:String
        }
    }
)

module.exports = mongoose.model("todo",TodoSchema)