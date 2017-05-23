'use strict';

var app = app || {};

(function(module) {

  const projectController = {};

  projectController.initIndexPage = function() {
    $('.portfolio-content').hide();
    $('#portfolio').show();

  };

  module.projectController = projectController;
})(app);
