const router = require('express').Router();
const db = require('knex')(require('../knexfile').development);

router
    .route('/')
    .get((req, res) => {
    db('cohorts')
      .then(students => res.status(200).json(students))
      .catch(err => res.status(500).json(err));
    })
    .post((req,res) => {
        const name = req.body;
        db('cohorts')
            .insert(name)
            .then(ncohort => {
                res.status(201).json(ncohort)
            })
            .catch(err => res.status(401).json({error: err}))
    })


  module.exports = router;