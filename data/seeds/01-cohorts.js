
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {name: 'cs1'},
        {name: 'cs2'},
        {name: 'cs3'},
        {name: 'cs4'},
        {name: 'cs5'},
        {name: 'cs6'},
        {name: 'cs7'},
        {name: 'cs8'},
        {name: 'cs9'}
      ]);
    });
};
