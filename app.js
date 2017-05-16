'use strict';

var images = [];

function Project (rawDataObj) {
  for (var key in rawDataObj) {
    this[key] = rawDataObj[key];
  }
}

Project.prototype.toHtml = function() {
  var template = $('#portfolio-template').html();
  var templateRender = Handlebars.compile(template);
  return templateRender(this);
};

projectData.forEach(function(projectObject) {
  images.push(new Project(projectObject));
});

images.forEach(function(project) {
  $('#portfolio').append(project.toHtml());
});

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

//This way easier to show the tab content, compared to using the "data-content"
