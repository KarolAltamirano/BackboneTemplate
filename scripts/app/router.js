define(['./app', 'backbone', './models', './collections', './views'], function (App) {

    App.Router = Backbone.Router.extend({
        initialize: function () {
            // begin menu
            var menuCollection = new App.Collections.Menu();
            menuCollection.fetch({
                success: function (e) {
                    var menuView = new App.Views.Menu({ collection: e });
                }
            });
            // end menu
            // begin page
            var pageCollection = new App.Collections.Page();
            this.pageView = new App.Views.Page({ collection: pageCollection });
            
            pageCollection.fetch({
                success: function () {
                    Backbone.history.start({ pushState: true });
                }
            });
            // end page
        },
        routes: {
            ':id' : 'defaultRoute',
            '' : 'index'
        },
        index: function () {
            this.pageView.renderHome();
        },
        defaultRoute: function (id) {
            this.pageView.render(id);
        }
    });

});
