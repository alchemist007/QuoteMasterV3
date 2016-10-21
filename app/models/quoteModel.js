//load mongoose since we need it to define model
var mongoonse = require('mongoose');

module.exports = mongoose.model('Quote',{
    quote_id : String,
    quote : String,
    author : String,
    updated_at : Date
});