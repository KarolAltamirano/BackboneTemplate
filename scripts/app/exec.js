define(['./app', 'jquery', './router'], function (App) {

    // preload template
    function ajaxTemplate()
    {
        return $.ajax({
            url: '/template.xml',
            dataType: 'xml',
            success: function (data) {
                App.Templates = data;
            }
        });
    }

    // all complete, run App

    $.when(ajaxTemplate()).done(function () {
        var router = new App.Router();
    });

});
