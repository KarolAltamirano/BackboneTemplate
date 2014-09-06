define(['./app', 'backbone'], function (App) {

    App.Models.Page = Backbone.Model.extend({
        defaults: {
            id: 0,
            title: '',
            content: ''
        }
    });

    App.Models.Menu = Backbone.Model.extend({
        defaults: {
            id: 0,
            url: '',
            title: ''
        }
    });

});
