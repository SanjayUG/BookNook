import express from "express";
import mongoose from 'mongoose';
import { Book } from "./models/book.model.js";
import { bookRouter } from "./routes/book.route.js";
import cors from "cors";

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

app.use(cors());

// Routes
app.get("/", (req, res) => {
    const data = "HARE KRISHNA";
    res.send(data);
});

app.use('/books', bookRouter);

export default app;
