'use strict';

// Define the `phonecatApp` module
angular.module('resumeApp', [
  // ...which depends on the `phoneList` module
  'experience',
  'projects',
  'skills',
  'contactInfo',
  'education'
]);
