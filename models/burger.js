const DAL = require('../config/dal');

const burger = {
    selectAll: function() {
        console.log('burger.selectAll is running');
        return DAL.selectAll("burgers");
    }, 
    insertOne: function(value) {
        return DAL.insertOne("burgers", "burger_name", value);
    }, 
    updateOne: function(newValues, condition) {
        return DAL.updateOne("burgers", newValues, condition);
    },
    delete: function(condition) {
        return DAL.delete("burgers", condition);
    }
}

module.exports = burger;