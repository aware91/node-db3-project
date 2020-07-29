const db = require('../data/config.js');

module.exports = {
  find,
  findById,
  findSteps,
  addStep,
  add,
  update,
  remove
}

function find() {
  return db('Schemes')
}

function findById(id) {
  return db('Schemes')
    .where({id})
    .first()
}

function findSteps(id) {
  return db('steps')
    .where("scheme_id", id)
}

function addStep(data, id) {
  return db('steps')
    .insert(data)
    .where('scheme_id', id)
}

function add(schemes) {
  return db("Schemes")
  .insert(schemes)
  .then(ids => {
    return findById(ids[0]);
  });
}

function update(changes, id) {
  return db("Schemes")
  .where({ id })
  .update(changes)
}

function remove(id){
  return db('Schemes')
    .where({id})
    .del()
}