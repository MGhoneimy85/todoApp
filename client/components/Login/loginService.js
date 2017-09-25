todoApp.factory('loginService', function ($http) {

    var apiUrl = "http://localhost:3000";
    var loginService = {};


    //login service ==> login user
    loginService.signIn = function (userName, password) {
        return $http({
            method: 'POST',
            url: apiUrl + '/user/auth',
            data: {username: userName, password: password},
            headers: {}
        });
    }


    //logout service  ==> logout user
    loginService.signOut = function (sessionid) {
        return $http({
            method: 'GET',
            url: apiUrl + '/user/logout?sessionId='+sessionid,
            headers: {}
        });
    }



    return loginService;

});