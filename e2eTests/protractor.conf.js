exports.config = {

    allScriptsTimeout: 111000,

    specs: [
        '*.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:3000/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 320000
    }

};