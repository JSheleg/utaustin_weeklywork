// Dependencies
// =============================================================
const router = require('express').Router();
const Todo = require('../models/todo');

// Routes
// =============================================================

// GET route for getting all of the todos
router.get('/api/todos', (req, res) => {
  // Retrieve all of the todos from the database
  // Return the todos as JSON
  //
  Todo.findAll({})
  .then(dbToDo => res.json(dbToDo))
  .catch(err =>{ 
    console.log(err);
    res.status(500).json(err);
  });
});

// POST route for saving a new todo
router.post('/api/todos', (req, res) => {
  // Create a new todo with the data in 'req.body'
  // Return the new todo as JSON
  //
  Todo.create(req.body
    // text: req.body.text,
    // complete: req.body.complete
  )
    .then(dbToDo => res.json(dbToDo))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  //
});

// DELETE route for deleting a todo
router.delete('/api/todos/:id', (req, res) => {
  // Delete a todo using the id from 'req.params.id'
  // Return the result as JSON
  //
  Todo.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbToDo => res.json(dbToDo))
    .catch(err => res.jsoin(err))
      
    
  //
});

// PUT route for updating a todo
router.put('/api/todos/:id', (req, res) => {
  // Update a todo with the data in 'req.body'
  // Return the result as JSON
  //First argument is where it is being updated(new info), second argument is what is being updated
  Todo.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbToDo => res.json(dbToDo))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  
});

module.exports = router;