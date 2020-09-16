const connection = require('./connection');
class DAL {
    connection;

    constructor(connection) {
        this.connection = connection;
    }

    query = (queryString, vals) => {
        return new Promise((resolve, reject) => {
            this.connection.query(queryString, vals, function (err, result) {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        })
    };


    
    selectAll(table) {
        return this.query(`SELECT * FROM ${table}`);
    }


    insertOne(table, column, burgerName) {
        const queryString = `INSERT INTO ${table} (${column}) VALUES ( ? )`;
        console.log(queryString);
        return this.query(queryString, burgerName);
    }

    updateOne(table, newValues, condition) {
        const queryString = `UPDATE ${table} SET {${newValues}} WHERE ${condition}`;
        console.log(queryString);
        return this.query(queryString);
    }

    delete(table, condition) {
        const queryString = `DELETE FROM ${table} WHERE ${condition}`;
        return this.query(queryString);
    }

}


module.exports = new DAL(connection);