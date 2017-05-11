'use strict';

var images = [];

function Project (rawDataObj) {
  this.name = rawDataObj.name;
  this.title = rawDataObj.title;
  this.url = rawDataObj.url;
  this.description = rawDataObj.description;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');
  $newProject.addClass('draft');

  $newProject.find('.byline a').html(this.name);
  $newProject.find('h1:first').html(this.title);
  $newProject.find('.byline a').attr('href', this.url);
  $newProject.find('.project-description').html(this.description);
  $newProject.append('<hr>');
  return $newProject;
};

projectData.forEach(function(projectObject) {
  images.push(new Project(projectObject));
});

images.forEach(function(project) {
  $('#projects').append(project.toHtml());
});
