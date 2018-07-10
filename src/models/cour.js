import mongoose from "mongoose"

const Schema = mongoose.Schema

const CourSchema = new Schema({
    name: {type:String, unique: true},
    author: {type: String},
    tags: [String], 
    date: {type: Date, default:Date.now},
    isPublished: Boolean
})

const Cour = mongoose.model("Cour", CourSchema)

export { Cour }