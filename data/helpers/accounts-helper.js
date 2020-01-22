const db = require('../dbConfig');

module.exports = {
    getAll,
    getByID,
    create,
    update,
    remove
}

function getAll() {
    return db('accounts')
}

function getByID(accountId){
    return db('accounts').where({id: accountId})
}

function create(account){
    return db('accounts').insert(account)
}

function update(accountId, accountInfo) {
    return db('accounts').where({id: accountId}).update(accountInfo)
}

function remove(accountId){
    return db('accounts').where({id: accountId}).del()
}