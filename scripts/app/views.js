define(['./app', 'backbone', './models', './collections'], function (App) {

    App.Views.MenuItem = Backbone.View.extend({
        tagName: 'a',
        render: function () {
            this.$el.attr("href", this.model.get('url'));
            this.$el.html(this.model.get('title'));
            return this;
        },
        events: {
            'click': 'menuClick'
        },
        menuClick: function (e) {
            e.preventDefault();
            Backbone.history.navigate($(e.currentTarget).attr("href"), true);
        }
    });

    App.Views.Menu = Backbone.View.extend({
        el: "nav",
        render: function () {
            this.collection.each(this.renderOne, this);
        },
        renderOne: function (e) {
            var menuItem = new App.Views.MenuItem({ model: e });
            this.$el.append(menuItem.render().el);
            this.$el.append(" ");
        },
        initialize: function () {
            this.render();
        }
    });

    App.Views.Page = Backbone.View.extend({
        el: "main",
        render: function (id) {
            var content;

            id = parseInt(id);
            
            if (_.isObject(this.collection.findWhere({ 'id': id }))) {
                content = this.collection.get(id).toJSON();
            } else {
                content = {
                    title: '404',
                    content: 'Page not found'
                };
            }

            this.$el.html(this.template(content));    
        },
        template: function (json) {
            var tmp = $(App.Templates).find("#home_box").text();
            return _.template(tmp, json);
        }
    });

});
