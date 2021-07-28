// Dependencies
// =============================================================
const router = require('express').Router();
const { Op } = require('sequelize');
const Book = require('../models/book');

// Routes
// =============================================================

// Get all books
router.get('/books', (req, res) => {
  //Access all books model and run .findAll() method
  Book.findAll({})
  .then(dbBookData => res.json(dbBookData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
  //
});

// Get all books of a specific genre
router.get('/genres/:genre', (req, res) => {
  //
  Book.findAll({
    where: {
      genre: req.params.genre
    }
  })
  .then(dbBookData => {
    if(!dbBookData) {
      res.status(404).json({ message: 'No books found with that genre'});
      return;
    }
    res.json(dbBookData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
  //
});

// Get all books from a specific author
router.get('/authors/:author', (req, res) => {
  //
  Book.findAll({
    where: {
      id: req.params.author
    }
  })
    .then(dbBookData => {
      if(!dbBookData) {
        res.status(404).json({message: 'No books found by this author'});
        return;
      }
      res.json(dbBookData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  //
});

// Get all "long" books (books 350 pages or more)
router.get('/books/length/long', (req, res) => {
  //
  Book.findAll({
    where: {
      pages: {
        [Op.gte]: 350
      }
    }
  })
    .then(dbBookData => {
      if(!dbBookData) {
        res.status(404).json({message: 'No long books'});
        return;
      }
      res.json(dbBookData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  //
});
  //


// Get all "short" books (books 150 pages or less)
router.get('/books/length/short', (req, res) => {
  //
  Book.findAll({
    where: {
      pages: {
        [Op.gte]: 350
      }
    }
  })
  .then(dbBookData => res.json(dbBookData))
  .catch(err => res.json(err))
  //
});

module.exports = router;
