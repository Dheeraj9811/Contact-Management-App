import mongoose from "mongoose";

//  Create a schema or blueprint
const Schema = mongoose.Schema;
// Create a schema or blueprint
const contactSchema = Schema({
    user_id:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: [true,"Please add a required field" ],
        trim: true, // remove
        maxlength: 50,
        // 65bbc40fad53cfed9a25e0c1
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        trim: true,
    },
    
}, { timestamps: true }
);

//  Create a model or mongoose object
export default mongoose.model('Contact', contactSchema);