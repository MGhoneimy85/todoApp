todoApp.controller('todoListController', function ($scope,$rootScope,$location,$window,$timeout,$filter, todoListService,loginService ) {


    $scope.TodoListArray = [];
    $scope.init = function () {

        if($rootScope.user){
            $scope.currentUser = $rootScope.user;  //assign user to localstorage user

            //go get all todos and push competed in array and inprogress in array
            todoListService.getTodo($scope.currentUser.sessionId)
                .then(function (result) {
                    if(result.data.status == "success"){
                        $scope.TodoListArray=result.data.data;
                    }
                    else if(result.data.status == "error") {
                        $scope.errorMessage = result.data.error;
                    }
            }, function (response) {
                $scope.errorMessage = response.data.error;
            });
        }
        else{
            $scope.errorMessage = "Not Authorized";
        }
    }

    // add todos

    $scope.isAdd = false;
    $scope.ADDItem ={
        title:'',
        description:'',
        status:'notCompleted'
    };

    //$scope.addFormNotValid = false;

    $scope.addTodos = function (newItem) {

        // for validation loop
        angular.forEach($scope.addForm.$error.required, function(field) {
            field.$setDirty();
        })

        //$scope.addFormNotValid = false;

        if($scope.addForm.$valid) {
            $scope.addFormNotValid = false;
            newItem.status = 'notCompleted'; // by default any new item it will be added in progress

            todoListService.addTodo($scope.currentUser.sessionId,newItem.title,newItem.description,newItem.status)
                .then(function (result) {
                    if (result.data.status == "success") {
                        $scope.isAdd = false;

                    }
                    else if (result.data.status == "error") {
                        $scope.errorMessage = result.data.error;
                    }
                }, function (response) {
                    $scope.errorMessage = response.data.error;
            });
            $scope.init();
            $scope.ADDItem.title = '';
            $scope.ADDItem.description = '';

        }
        else {
            $scope.addFormNotValid = true;
        }
    }

    // update todos

    $scope.updateTodos = function (form,id,title,desc,status) {


        if(form.$valid) {

            todoListService.updateTodo($scope.currentUser.sessionId, id, title, desc,status)
                .then(function (result) {
                if (result.data.status == "success") {
                    $scope.activeID=0;
                    $scope.init();
                }
                else if (result.data.status == "error") {
                    $scope.errorMessage = result.data.error;
                }
            }, function (response) {
                $scope.errorMessage = response.data.error;
            });

            $scope.updateFormValidation = false;

        }
        else{
            $window.scrollTo(0, 0);
            $scope.updateFormValidation = true;
        }

    }


    // update todos status

    $scope.updateTodoStatus = function (id,status) {

        todoListService.updateTodoStatus($scope.currentUser.sessionId, id, status)
            .then(function (result) {
                if (result.data.status == "success") {
                    $scope.init();

                }
                else if (result.data.status == "error") {
                    $scope.errorMessage = result.data.error;
                }
            }, function (response) {
                $scope.errorMessage = response.data.error;
        });

    }

    // update activeId for selected updated TODOS
    $scope.changeActiveID = function (id) {
        $scope.activeID = id;
    };

    // delete todos
    $scope.deleteTodos = function (id) {

        todoListService.deleteTodo($scope.currentUser.sessionId,id)
            .then(function (result) {
                if(result.data.status == "success"){
                        $scope.init();
                }
                else if(result.data.status == "error") {
                    $scope.errorMessage = result.data.data;
                }

            }, function (response) {
                $scope.errorMessage = response.data.error;
            });

    }


    // drag and drop functions

    $scope.allowDrop = function (ev) {
        ev.preventDefault();
    }
    $scope.drag = function (ev,el,status) {
        ev.dataTransfer.setData("text", ev.target.id);
        $scope.draggedELmentStatus = status;
    }
    $scope.drop = function (ev,el) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        el.appendChild(document.getElementById(data));


        //update todos status after drop done
        $scope.updateTodoStatus(data,$scope.draggedELmentStatus);

    }

});