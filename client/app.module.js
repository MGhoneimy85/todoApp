var todoApp = angular.module('todoApp',['ngRoute'])
    .run(function( $rootScope,loginService,$location) {



            //logout user

            $rootScope.logout = function () {

                    loginService.signOut($rootScope.user.sessionId).then(function (result) {
                            if(result.data.status == "success"){
                                    $location.path( '/login');
                            }
                            else if(result.data.status == "error") {
                                    $rootScope.errorMessage = result.data.error;
                            }

                    }, function (response) {
                            $rootScope.errorMessage = response.data.error;
                    });

                    $rootScope.user = null;

            }

});

