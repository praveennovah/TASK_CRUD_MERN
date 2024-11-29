import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true,
    },
    email : {
        type : String,
        required : true,
        trim : true,
    },
    age : {
        type : Number,
        required : true,
        trim : true,
    },
});

const User = mongoose.model("User",userSchema);

export default User;