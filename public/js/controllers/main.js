angular.module('quoteController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','Quotes', function($scope, $http, Quotes) {
		$scope.quoteText = {};
		$scope.quoteAuthor = {}; 
		
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		Quotes.get()
			.success(function(data) {
				$scope.quotes = data;
				$scope.loading = false;
				
			});

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createQuote = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.quoteText.text != undefined && $scope.quoteAuthor.text != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Quotes.create($scope.quoteText, $scope.quoteAuthor)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.quoteText = {}; // clear the form so our user is ready to enter another
						$scope.quoteAuthor = {};
						$scope.quotes = data; // assign our new list of todos
					});
			}
		};

		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteQuote = function(id) {
			$scope.loading = true;

			Quotes.delete(id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.loading = false;
					$scope.quotes = data; // assign our new list of todos
				});
		};

	}]);