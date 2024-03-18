import mongoose from "mongoose";


const schema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }, 
    email: {
        type: String,
        required: true,
    }
});


const UserModal = mongoose.model("user", schema);
export default UserModal;

