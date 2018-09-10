const router = require('express').Router();
const db = require('knex')(require('../knexfile').development);

router.get('/', (req, res) => {
    db('students')
      .then(students => res.status(200).json(students))
      .catch(err => res.status(500).json(err));
  });


  module.exports = router;