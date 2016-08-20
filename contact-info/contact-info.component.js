'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('contactInfo').
  component('contactInfo', {
    templateUrl: 'contact-info/contact-info.template.html',
    controller: function ContactInfoController($http) {
      var self = this;
      
      $http.get('data/contact-info.json').then(function(response) {
        self.data = response.data;
        console.log(self.data);
      });
    }
  });
