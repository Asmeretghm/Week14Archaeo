const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = 3001;
const archaeoRouter = require('./routers/archaeo-router');
const cors = require("cors"); // Import the cors package
require('dotenv').config();



app.use(express.json());
app.use(cors());
app.use("/api/v1", archaeoRouter);


const uri = "mongodb+srv://asmeretasmara:PFALDlCeYbU8BdE0@cluster1.ls4ye5y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";


const clientOptions = {
    serverApi: { version: "1", strict: true, deprecationErrors: true },
};

async function connectDb() {
    try {
        await mongoose.connect(uri, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log(
            "Pinged your deployment. You successfully connected to MongoDB!"
        );
    } catch (error) {
        console.log("Error: " + error);
        await mongoose.disconnect();
    }
}

app.listen(PORT, async () => {
    await connectDb().catch(console.dir);
    console.log(`Express API started: http://localhost:${PORT}`);
});




