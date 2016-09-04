/**
 * http://usejsdoc.org/
 */

(function() {

	var app = angular.module('demo', []);

	app.controller('UserController', function($scope,$rootScope) {

		$scope.user = '';
		$scope.resetUser = function() {
			$scope.user = '';
		};
		
		$scope.getUser = function() {
			$scope.user = 'Nagabhushanam';
		};
		
		window.getUser = function() {
			console.log('get name by non-angular func');
			
			$rootScope.topic='ANGULAR';
			
			//triggering digest-loop
			$scope.$apply(function(){
				$scope.user = 'Nagabhushanam';
				//$scope.$digest();
		    });
			
		};
		
		

		$scope.$watch('user', function(oldUser, useUser) {
			console.log('custom watcher on $scope.user');
		}, false);

	});

})();