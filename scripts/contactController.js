'use strict';

var app = app || {};

(function(module) {

  const contactController = {};

  contactController.init = function() {
    $('#contact').show();

  };

  module.contactController = contactController;
})(app);
