
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'rowValue1', cohorts_id: '1'},
        {name: 'rowValue2', cohorts_id: '2'},
        {name: 'rowValue3', cohorts_id: '3'},
        {name: 'rowValue4', cohorts_id: '4'},
        {name: 'rowValue5', cohorts_id: '5'},
        {name: 'rowValue6', cohorts_id: '6'},
        {name: 'rowValue7', cohorts_id: '7'},
        {name: 'rowValue8', cohorts_id: '8'},
        {name: 'rowValue9', cohorts_id: '9'},
        {name: 'rowValue10', cohorts_id: '1'},
        {name: 'rowValue11', cohorts_id: '2'},
        {name: 'rowValue12', cohorts_id: '3'},
        {name: 'rowValue13', cohorts_id: '4'},
        {name: 'rowValue14', cohorts_id: '5'},
        {name: 'rowValue15', cohorts_id: '6'},
        {name: 'rowValue16', cohorts_id: '7'},
        {name: 'rowValue17', cohorts_id: '8'},
        {name: 'rowValue18', cohorts_id: '9'},
        {name: 'rowValue19', cohorts_id: '1'},
        {name: 'rowValue20', cohorts_id: '2'},
        {name: 'rowValue21', cohorts_id: '3'}
      ]);
    });
};
