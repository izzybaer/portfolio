'use strict';

var app = app || {};

(function(module) {

  const aboutController = {};

  aboutController.init = function() {
    app.Project.fetchAll()

    $('#about').show();
  };

  module.aboutController = aboutController;
})(app);
