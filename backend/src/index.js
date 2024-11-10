
import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
})

const port = 5555 || process.env.PORT;

connectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`Server is running at ${port}`);
    })
})
.catch((error) => {
    console.log(`MongoDB connection failed ${error}`);
    
})
