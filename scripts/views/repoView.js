'use strict';

var app = app || {};

(function(module) {
  const repoView = {};


  const ui = function() {
    let $about = $('#about');

    $about.find('ul').empty();
    $about.show().sublings().hide();
  };


  let render = Handlebars.compile($('#repo-temnplate').text());
  repoView.index = function() {
    ui();

    $('#about ul').append(
      app.repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(app);
