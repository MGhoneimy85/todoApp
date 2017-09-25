describe("test All Controllers", function () {

    var $httpBackend;
    var apiUrl = "http://localhost:3000";

    beforeEach(module('todoApp'));

    beforeEach(inject(function (loginService,todoListService, _$httpBackend_) {
        loginLogoutfactory = loginService;
        todoListfactory = todoListService;
        $httpBackend = _$httpBackend_;
    }));


    // testing login Controller
    describe('loginController', function () {

        it('success when signin function found success', function () {

            inject(function($rootScope, $controller) { //injects the dependencies
                var scope = $rootScope.$new();

                // while creating the controller we have to inject the dependencies too.
                var ctrl = $controller('loginController', {$scope: scope});

                if(scope.signIn){
                    var succeeded = true;
                }

                // the initial count should be two
                expect(succeeded).toBe(true);
            });

        });

    });



    // testing TODOList Controller
    describe('ToDoListController', function () {

        it('success when add update delete updatestatus functions found success', function () {

            inject(function($rootScope, $controller) { //injects the dependencies
                var scope = $rootScope.$new();
                var succeeded = true;
                // while creating the controller we have to inject the dependencies too.
                var ctrl = $controller('todoListController', {$scope: scope});

                if(!scope.addTodos){
                    succeeded = false;
                }
                if(!scope.updateTodos){
                    succeeded = false;
                }
                if(!scope.updateTodoStatus){
                    succeeded = false;
                }
                if(!scope.deleteTodos){
                    succeeded = false;
                }


                // the initial count should be two
                expect(succeeded).toBe(true);
            });

        });
    });
});
