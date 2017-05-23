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

    Project.all.map(function(project) {
      $('#portfolio').append(project.toHtml());
    });

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

  module.Project = Project;
}(app))
