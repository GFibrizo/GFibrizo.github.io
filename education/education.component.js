'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('education').
  component('education', {
    templateUrl: 'education/education.template.html',
    controller: function EducationController($http) {
      var self = this;
      
      $http.get('data/education.json').then(function(response) {
        self.studies = response.data;
      });
    }
  });
