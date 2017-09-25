todoApp.config(function($routeProvider,$locationProvider) {


	// routing to different pages in the application
	var rootContext = appConstants.rootContext;


	$routeProvider.when('/Login', {
		templateUrl : 'components/Login/loginView.html',
		controller  : 'loginController',
	})
	.when('/todoList', {
		templateUrl : 'components/todoList/todoListView.html',
		controller  : 'todoListController',
	})
	.otherwise({
		redirectTo: '/Login'
	});





});


//adding filter htmlToPlaintext to be used across the app

todoApp.filter('htmlToPlaintext', function()
{
	return function(text)
	{
		return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
	};
});

