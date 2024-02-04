import mongoose from "mongoose";

//  Create a schema or blueprint
const Schema = mongoose.Schema;
// Create a schema or blueprint
const userSchema = Schema({
    username: {
        type: String,
        required: [true,"Please add a required field" ],
        trim: true, // remove
        maxlength: 50,
        // 65bbc40fad53cfed9a25e0c1
    },
    email: {
        type: String,
        required: [true,"Please add a required field" ],
        unique: [true,"Email already taken" ],
    },
    password: {
        type: String,
        required: [true,"Please add a password" ],
    },
    
}, { timestamps: true }
);

//  Create a model or mongoose object
export default mongoose.model('User', userSchema);