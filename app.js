'use strict';

var images = [];

function Project (name, title, filepath, img, description) {
  this.name = name;
  this.title = title;
  this.filepath = filepath;
  this.images = [];
  this.description = description;
}
