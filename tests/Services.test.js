describe("test All Services", function () {

    var $httpBackend;
    var apiUrl = "http://localhost:3000";

    beforeEach(module('todoApp'));

    beforeEach(inject(function (loginService,todoListService, _$httpBackend_) {
        loginLogoutfactory = loginService;
        todoListfactory = todoListService;
        $httpBackend = _$httpBackend_;
    }));


    // testing login logout services
    describe('loginService', function () {

        it('success when login success', function () {

            $httpBackend.expect('POST', apiUrl+'/user/auth', {username: 'ali', password: '5f4dcc3b5aa765d61d8327deb882cf99' })
                .respond(200);
            var succeeded = false;
            loginLogoutfactory.signIn("ali", "5f4dcc3b5aa765d61d8327deb882cf99")
                .then(function () {
                    succeeded = true;
                });
            $httpBackend.flush();
            expect(succeeded).toBe.true;

        });

        it('success when login fail cause username or password wrong', function () {

            $httpBackend.expect('POST', apiUrl+'/user/auth', {username: 'li', password: '5f4dcc3b5aa765d61d8327deb882cf99' })
                .respond(200);
            var succeeded = false;
            loginLogoutfactory.signIn("li", "5f4dcc3b5aa765d61d8327deb882cf99")
                .then(function () {
                    succeeded = true;
                });
            $httpBackend.flush();
            expect(succeeded).toBe.false;

        });

        it('success when logout success', function () {

            $httpBackend.expect('GET', apiUrl+'/user/logout?sessionId=CLr7NWvDvdyy1h9Uhtce0CaO4lL09d0z')
                .respond(200);
            var succeeded = false;
            loginLogoutfactory.signOut("CLr7NWvDvdyy1h9Uhtce0CaO4lL09d0z")
                .then(function () {
                    succeeded = true;
                });
            $httpBackend.flush();
            expect(succeeded).toBe.true;
        });
    });



    // testing TODOList services
    describe('todoListService', function () {


        it('success when get all ToDos success', function () {

            $httpBackend.expect('GET', apiUrl+'/todos?sessionId=CLr7NWvDvdyy1h9Uhtce0CaO4lL09d0z&skip=0&limit=30')
                .respond(200);
            var succeeded = false;
            todoListfactory.getTodo("CLr7NWvDvdyy1h9Uhtce0CaO4lL09d0z")
                .then(function () {
                    succeeded = true;
                });
            $httpBackend.flush();
            expect(succeeded).toBe.true;

        });


        it('success when add success', function () {

            $httpBackend.expect('PUT', apiUrl+'/todo?sessionId=CLr7NWvDvdyy1h9Uhtce0CaO4lL09d0z',
                {title: 'title', description: 'description', status:'notCompleted' })
                .respond(200);
            var succeeded = false;
            todoListfactory.addTodo("CLr7NWvDvdyy1h9Uhtce0CaO4lL09d0z","title", "description","notCompleted")
                .then(function () {
                    succeeded = true;
                });
            $httpBackend.flush();
            expect(succeeded).toBe.false;

        });

        it('success when update success', function () {

            $httpBackend.expect('PUT', apiUrl+'/todo?sessionId=CLr7NWvDvdyy1h9Uhtce0CaO4lL09d0z',
                {id:'id', title: 'title', description: 'description', status:'notCompleted' })
                .respond(200);
            var succeeded = false;
            todoListfactory.updateTodo("CLr7NWvDvdyy1h9Uhtce0CaO4lL09d0z","id", "title", "description","notCompleted")
                .then(function () {
                    succeeded = true;
                });
            $httpBackend.flush();
            expect(succeeded).toBe.false;

        });

        it('success when update status success', function () {

            $httpBackend.expect('PUT', apiUrl+'/todo?sessionId=CLr7NWvDvdyy1h9Uhtce0CaO4lL09d0z',
                {id:'id', status:'notCompleted' })
                .respond(200);
            var succeeded = false;
            todoListfactory.updateTodoStatus("CLr7NWvDvdyy1h9Uhtce0CaO4lL09d0z","id","notCompleted")
                .then(function (result) {
                    succeeded = true;
                });
            $httpBackend.flush();
            expect(succeeded).toBe.false;

        });

        it('success when delete success', function () {

            $httpBackend.expect('DELETE', apiUrl+'/todo?sessionId=CLr7NWvDvdyy1h9Uhtce0CaO4lL09d0z')
                .respond(200);
            var succeeded = false;
            todoListfactory.deleteTodo("CLr7NWvDvdyy1h9Uhtce0CaO4lL09d0z")
                .then(function () {
                    succeeded = true;
                });
            $httpBackend.flush();
            expect(succeeded).toBe.false;
        });
    });
});
describe('filter test', function() {
    beforeEach(module('todoApp'));
    it('should remove HTML markup from string',
        //this is how we inject a filter by appending Filter to the end of the filter name
        inject(function(htmlToPlaintextFilter) {
            expect(htmlToPlaintextFilter('<p>unit test html to plaintext</p>')).toBe('unit test html to plaintext');
        })
    );
});