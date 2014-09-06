define(['./app', 'backbone', './models'], function (App) {

    App.Collections.Page = Backbone.Collection.extend({
        model: App.Models.Page,
        url: '/data/content.json'
    });

    App.Collections.Menu = Backbone.Collection.extend({
        model: App.Models.Menu,
        url: '/data/menu.json'
    });

});
