const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/iNotebook";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = connectToMongo;


// EXPLANATION:
// Code: db.js
// Purpose:
// This file sets up the connection to a MongoDB database using the mongoose library.

// mongoose Library:

// The require("mongoose") line imports the Mongoose library. Mongoose is a library that helps us interact with MongoDB in a more structured way.
// MongoDB URI:

// const mongoURI="mongodb://localhost:27017"; specifies the location of the MongoDB server.
// localhost:27017 means MongoDB is running locally on your computer on port 27017 (the default port for MongoDB).
// connectToMongo Function:

// This function is defined as const connectToMongo=()=>{...}.
// It calls mongoose.connect(mongoURI) to connect to the MongoDB server.
// Once connected, it logs a success message: "Connected to mongoDB successfully".
// Exporting the Function:

// module.exports=connectToMongo; makes this connectToMongo function available for use in other files. Without this, other files wouldn’t know about this function.
// Code: index.js
// Purpose:
// This file uses the connectToMongo function to establish a connection to MongoDB.

// Importing the connectToMongo Function:

// const connectToMongo=require("./db");
// The require("./db") imports the connectToMongo function from the db.js file.
// Now, the variable connectToMongo in index.js refers to the function exported from db.js.
// Calling the Function:

// connectToMongo;
// This line executes the connectToMongo function. When called, it connects to the MongoDB database and logs the success message.
// Why Use connectToMongo in Both Files?
// In db.js, connectToMongo is defined and exported to encapsulate the logic of connecting to MongoDB. This keeps your code modular and reusable.
// In index.js, connectToMongo is imported so the database connection logic can be used in this file.
// Why the Same Name connectToMongo?
// The variable connectToMongo in index.js could have been named anything (e.g., dbConnect or startMongoConnection). However, using the same name as in db.js makes the code more consistent and easier to understand.