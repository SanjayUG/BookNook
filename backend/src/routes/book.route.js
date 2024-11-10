import { Router } from "express";
import { Book } from "../models/book.model.js";

const bookRouter = Router();

// create book and upload
bookRouter.post("/", async (req, res) => {
    try {
        // Ensure all required fields are present
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // Create a new book object
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        };

        // Save the new book to the database
        const book = await Book.create(newBook);

        // Return the created book with a 201 status
        return res.status(201).send(book);
        
    } catch (error) {
        console.error('Error creating book:', error.message);
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
});

// get all the books
bookRouter.get("/", async (req, res) => {
    try {
        // get all the books
        const books = await Book.find({});
        return res.status(200).send({
            count: books.length,
            data: books
        });

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            error: error.message
        });
    }
});

// get a book
bookRouter.get("/:id", async (req, res) => {
    try {
        // get all the books
        const {id} = req.params;
        const book = await Book.findById(id);
        return res.status(200).send(book);

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            error: error.message
        });
    }
});

// update the book
bookRouter.put("/:id", async (req, res) => {
    try {
        if(!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({
                message: "All fields are required"
            })    
        }
        const {id} = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);

        if(!result) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        return res.status(200).send({
            message: "Book updated Successfully"
        })

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            error: error.message
        });
    }
})

// update the book
bookRouter.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const result = await Book.findByIdAndDelete(id);

        if(!result) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        return res.status(200).send({
            message: "Book deleted Successfully"
        })

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            error: error.message
        });
    }
})

export {bookRouter};