const mongoose = require('mongoose');
const dbConfig = require('./config/db.congig');

class DataBase{
    connect() {
        mongoose.connect(dbConfig.connectUrl, dbConfig.connectionOptions);
    }
}

module.exports = DataBase;
