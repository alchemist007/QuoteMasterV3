/*this is meant to interact 
with the node api. all code to
get,create, delete quote goes here. 
*/

angular.module('quoteServices', [])

	// super simple service
	// each function returns a promise object 
	.factory('Quotes', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/quotes');
			},
			
			create : function(quoteText, quoteAuthor) {
				//return $http.post('/api/quotes', quoteText,quoteAuthor);
				return $http.post('/api/quotes', {text: quoteText, author: quoteAuthor});
			},

			delete : function(id) {
				return $http.delete('/api/quotes/' + id);
			}
		}
	}]);