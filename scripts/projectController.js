'use strict';

var app = app || {};

(function(module) {

  const projectController = {};

  projectController.initProjectPage = function() {
    app.Project.fetchAll()

    $('#portfolio, #portfolio *').show();
  };

  module.projectController = projectController;
})(app);
