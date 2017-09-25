describe('todo app login', function() {

    //login screen scenarion

    it('should automatically redirect to /toList ', function() {
        browser.get('index.html');
        browser.sleep(3000);
        element(by.id('loginBtn')).click();
        browser.sleep(3000);
        element(by.model('username')).sendKeys('ssss');
        browser.sleep(3000);
        element(by.id('loginBtn')).click();
        browser.sleep(3000);
        element(by.model('password')).sendKeys('ssssss');
        browser.sleep(3000);
        element(by.id('loginBtn')).click();
        element(by.model('username')).clear();
        element(by.model('password')).clear();
        browser.sleep(3000);
        element(by.model('username')).sendKeys('ali');
        browser.sleep(3000);
        element(by.model('password')).sendKeys('5f4dcc3b5aa765d61d8327deb882cf99');
        browser.sleep(3000);
        element(by.id('loginBtn')).click();
        browser.sleep(5000);
        expect(browser.getLocationAbsUrl()).toMatch("/todoList");
    });
});


describe('todo app logout', function() {

        //logout scenarion


        it('should automatically redirect to /Login ', function() {
            browser.get('index.html');
            browser.sleep(3000);
            element(by.model('username')).sendKeys('ali');
            browser.sleep(3000);
            element(by.model('password')).sendKeys('5f4dcc3b5aa765d61d8327deb882cf99');
            browser.sleep(3000);
            element(by.className('btn btn-info')).click();
            browser.sleep(5000);
            element(by.id('logoutBtn')).click();

            expect(browser.getLocationAbsUrl()).toMatch("/Login");
        });
});

