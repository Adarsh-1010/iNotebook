const mongoose = require("mongoose");
const { Schema } = mongoose; // Import Schema from mongoose

// Define the user schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

// Export the model
module.exports = mongoose.model("User", userSchema); // Note: Model name should start with uppercase
