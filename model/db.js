
const  mongoose  = require("mongoose");
const  Schema  =  mongoose.Schema;

//model de tache pour mongoose
const  taskSchema  =  new Schema(
    {
        id: {
            type: String
        },
        name: {
            type: String
        },
        start: {
            type: String
        },
        end: {
            type: String
        },
        progress: {
            type: String
        },
        dependencies: {
            type: String
        },
        custom_class: {
            type: String
        }
    }
);

let  Task  =  mongoose.model("Task", taskSchema);
module.exports  =  Task;

