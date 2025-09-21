const mongoose = require('mongoose');
const config = require('config');
const dbgr = require('debug')("development:mongoose")

mongoose
.connect(`${config.get("DATABASE_URI")}/Bag-Shop`)
.then(function(){
    dbgr("DB Connected");
})
.catch(function(err){
    dbgr("DB Connection Error",err);
});

module.exports = mongoose.connection;