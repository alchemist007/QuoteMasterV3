//define routes here

//load the Quote model
var quoteModel = require('./models/quoteModel');

function getQuotes(res) {
    quoteModel.find(function (err, quotes) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(quotes);
        }

        res.json(todos); // return all todos in JSON format
    });
};



//expose the routes to our app
module.exports = function(app){

	//api

	//get all quotes
	app.get('/api/quotes', function(req,res){
		//use mongoose to get all quotes in db.
		getQuotes(res);
	});

    //add quote
    app.post('/api/quotes', function(){

        //create a quote, information comes from AJAx reques from Angular
        quoteModel.create({
              quote_id    : req.cookies.quote_id,
              quote    : req.body.quote,
              author: req.body.author,
              updated_at : Date.now()            

        }, function(err, quote){
            if(err) res.send(err);

            res.redirect('/')

        });
    });
    //delete quote

    //edit quote


    //application
    app.get('*' function(res,req){
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    })

};