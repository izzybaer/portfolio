'use strict';

var app = app || {};

(function(module) {

  const homeController = {};

  homeController.initIndexPage = function() {
    $('.portfolio-content').hide();
    $('#home').show();
  };

  module.homeController = homeController;
})(app);
