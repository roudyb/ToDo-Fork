	//MODULE

	// create the module and name it - todoApp
	var todoApp = angular.module('todoApp', ['ngRoute']);

	// configure routes
	todoApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the calender page
			.when('/sponsor', {
				templateUrl : 'pages/sponsor.html',
				controller  : 'sponsorController'
			});
	});

	
	//CONTROLLERS

	// create the controller and inject Angular's $scope
	todoApp.controller('mainController', ['$scope',function($scope) {
		// insert data boxes to display in our view

	    // All the data from the view is filtered through the model (scope)
	    // Scope is a view-model which contains all the data from the view
	    // Controller is connected to the view via the Scope
	    // View <- $scope -> Controller

	    	$scope.todos = [
	    			{'title':'Enter a Task & tell ToTo to Fetch.', 'done':false}
	    		];

	    	//method 01 - Add items to the To Do list
	    	$scope.addTodo = function(){
	    		$scope.todos.push({'title':$scope.newTodo,'done':false})
	    		// Clear out newTodo
	    		$scope.newTodo = ''
	    	}

	    	//$scope.clicked = function(){
       		//	window.location = "#/lists.html";
 			//}

	    	//method 02 - Clear the completed To Do's
	    	$scope.clearCompleted = function(){
	    		$scope.todos = $scope.todos.filter(function(item){
	    			return !item.done
	    		})
	    	}

	    }]);


	todoApp.controller('sponsorController', function($scope) {
		$scope.message = 'a word from our sponsor';
	});