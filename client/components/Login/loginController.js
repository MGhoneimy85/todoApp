todoApp.controller('loginController', function ($scope,$location,$rootScope,$window,$timeout,loginService) {

    $scope.init = function () {

        //nothing just initialization for init if needed

    }


    $scope.signIn = function(){

        // form validation loop
        angular.forEach($scope.login.$error.required, function(field) {
            field.$setDirty();
        });


        if($scope.login.$valid) {
            loginService.signIn($scope.username, $scope.password)
                .then(function (result) {
                    if(result.data.status == "success"){
                        $rootScope.user = result.data;
                        $location.path( '/todoList');
                    }
                    else if(result.data.status == "error") {
                        $scope.errorMessage = result.data.error;
                    }

                }, function (response) {
                    $scope.errorMessage = response;
                });
        }




    }

});