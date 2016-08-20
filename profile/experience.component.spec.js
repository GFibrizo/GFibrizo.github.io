'use strict';

describe('experience', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('experience'));

  // Test the controller
  describe('ExperienceController', function() {

    it('should create a `phones` model with 3 phones', inject(function($componentController) {
      var ctrl = $componentController('experience');

      expect(ctrl.jobs.length).toBe(3);
    }));

  });

});
