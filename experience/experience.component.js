'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('experience').
  component('experience', {
    templateUrl: 'experience/experience.template.html',
    controller: function ExperienceController($http) {
      var self = this;
      
      $http.get('data/jobs.json').then(function(response) {
        self.jobs = response.data;
      });
    }
  });
