require.config({
    baseUrl: 'scripts/lib',
    paths: {
        app: '../app',
        jquery: 'jquery-2.1.1.min',
        underscore: 'underscore-min',
        backbone: 'backbone-min'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        }
    }
});

require(['app/exec']);
