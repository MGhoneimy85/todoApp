todoApp.factory('todoListService', function ($http) {

    var apiUrl = "http://localhost:3000";
    var todoListService = {};


    // get todolist service ==> get all todos for currentuser
    todoListService.getTodo = function (sessionid) {
        return $http({
            method: 'GET',
            url: apiUrl + '/todos?sessionId='+sessionid+'&skip=0&limit=30',
            headers: {'Content-Type':'application/json'}
        });
    }



    // delete todos service ==> delete selected todos
    todoListService.deleteTodo = function (sessionid , todoid) {
        return $http({
            method: 'Delete',
            url: apiUrl + '/todo?sessionId='+sessionid,
            data: {id: todoid},
            headers: {'Content-Type':'application/json'}
        });
    }



    // update todos service ==> delete selected todos
    todoListService.updateTodo = function (sessionid,todoid,title,desc,status) {
        return $http({
            method: 'put',
            url: apiUrl + '/todo?sessionId='+sessionid,
            data: {id: todoid,title:title,description:desc,status:status},
            headers: {'Content-Type':'application/json'}
        });
    }


    // update todos status service ==> delete selected todos
    todoListService.updateTodoStatus = function (sessionid,todoid,status) {
        return $http({
            method: 'put',
            url: apiUrl + '/todo?sessionId='+sessionid,
            data: {id: todoid,status:status},
            headers: {'Content-Type':'application/json'}
        });
    }


    // update todos service ==> delete selected todos
    todoListService.addTodo = function (sessionid,title,desc,status) {
        return $http({
            method: 'put',
            url: apiUrl + '/todo?sessionId='+sessionid,
            data: {title:title,description:desc,status:status},
            headers: {'Content-Type':'application/json'}
        });
    }

    return todoListService;

});