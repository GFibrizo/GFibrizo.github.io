'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('skills').
  component('skills', {
    templateUrl: 'skills/skills.template.html',
    controller: function SkillsController($http) {
      var self = this;

      $http.get('data/skills.json').then(function(response) {
        self.skills = response.data;
      });
    }
  });
