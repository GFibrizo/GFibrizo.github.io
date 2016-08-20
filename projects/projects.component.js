'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('projects').
  component('projects', {
    templateUrl: 'projects/projects.template.html',
    controller: function ProjectsController($http) {
      var self = this;
      
      $http.get('data/projects.json').then(function(response) {
        self.projects = response.data;
      });
    }
  });
