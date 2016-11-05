//load mongoose since we need it to define model
var mongoose = require('mongoose');

module.exports = mongoose.model('Quote',{
    quote_id : String,
    text : String,
    author : String,
    updated_at : Date
});