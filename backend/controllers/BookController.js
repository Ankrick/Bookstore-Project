const Book = require('../models/bookModel')
const mongoose = require('mongoose')


const RecipeController = {
    index: async (req,res) => {
        try {
            const books = await Book.find().sort({ createdAt: -1});
            return res.status(200).json(books);
        } catch (error) {
            console.log(error.message)
            res.status(500).send({ error: error.message })
        }
    },
    show: async (req, res) => {
        try {
            let id = req.params.id;
            if(!mongoose.Types.ObjectId.isValid(id)){
                return res.status(400).json({msg: 'bad request'})
            }
            let book = await Book.findById(id);
            if(!book){
                return res.status(404).json({msg: 'Book is not found'})
            }
            return res.status(200).json({book});
        } catch (error) {
            console.log(error.message)
            res.status(500).send({ error: error.message })
        }
    },
    store: async (req,res) => {
        let { title, author, publishYear } = req.body;
        let book = await Book.create ({
            title,
            author,
            publishYear
        })
        res.status(200).json(book);
    },
    destroy : async (req, res) => {
        try {
            let id = req.params.id;
            if(!mongoose.Types.ObjectId.isValid(id)){
                res.status(400).json({msg: 'bad request'});
            }
            let book = await Book.findByIdAndDelete(id);
            if(!book){
                res.status(404).json({msg: 'book is not found'});
            }
            return res.status(200).json({book});
        } catch (error) {
            console.log(error.message)
            res.status(500).send({ error: error.message })
        }
    },
    destroyAll : async (req, res) => {
        let book = await Book.deleteMany({});
        let books = await Book.find({});
        if(!books.length){
            res.status(404).json({msg : 'No books found currently'})
        }
        return res.status(200).json({book});
    },
    update : async (req, res) => {
        let id = req.params.id;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({msg : 'Bad request'})
        }
        let book = await Book.findByIdAndUpdate(id, {...req.body})
        let UpdatedValues = await Book.findById(id);
        if(!book){
            return res.status(404).json({msg : 'book is not found'})
        }
        res.status(200).json({UpdatedValues});
    }
};

module.exports = RecipeController