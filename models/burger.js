const DAL = require('../config/dal');

const burger = {
    selectAll: function() {
        console.log('burger.selectAll is running');
        return DAL.selectAll("burgers");
    }, 
    insertOne: function(column, value) {
        return DAL.insertOne("burgers", column, value);
    }, 
    updateOne: function(newValues, condition) {
        return DAL.updateOne("burgers", newValues, condition);
    },
    delete: function(condition) {
        return DAL.delete("burgers", condition);
    }
}

module.exports = burger;