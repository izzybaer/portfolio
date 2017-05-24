'use strict';

var app = app || {};

(function(module) {

  const contactController = {};

  contactController.initIndexPage = function() {
    $('.portfolio-content').hide();
    $('#contact').show();

  };

  module.contactController = contactController;
})(app);
