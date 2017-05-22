'use strict';

var app = app || {};

(function(module) {
  function Project (rawDataObj) {
    for (var key in rawDataObj) {
      this[key] = rawDataObj[key];
    }
  }

  Project.all = [];

  Project.prototype.toHtml = function() {
    var template = $('#portfolio-template').html();
    var templateRender = Handlebars.compile(template);
    return templateRender(this);
  };

  Project.loadAll = function(rawData) {
    Project.all = rawData.map(function(project) {
      return new Project(project);
    })

    Project.all.forEach(function(project) {
      $('#portfolio').append(project.toHtml());
    });

    console.table(Project.all);

    console.log(`Hey ya'all, I've written: ${Project.all.map(function(project) {
      return project.description.split(' ').length;
    }).reduce(function(acc, curr) {
      return acc + curr;
    })} total words in all of my project descriptions`)
  }

  Project.fetchAll = function() {
    if(localStorage.rawData) {
      Project.loadAll(JSON.parse(localStorage.rawData))

    } else {
      $.getJSON('project-data.json')
      .then(function(rawData) {
        Project.loadAll(rawData)
        localStorage.rawData = JSON.stringify(rawData)
      },
      function(err) {
        console.log(err);
      });
    }
  }


  $(document).ready(function(){
    $('section').hide();
  });

  $('.nav-menu li').on('click', function(){
    $('section').hide();
    if ($(this).hasClass('nav-home')){
      $('#home').show();
    } else if ($(this).hasClass('nav-about')){
      $('#about').show();
    } else if ($(this).hasClass('nav-portfolio')){
      $('#portfolio, #portfolio *').show();
    } else if ($(this).hasClass('nav-contact')){
      $('#contact').show();
    }

  });
  module.Project = Project;
}(app))
