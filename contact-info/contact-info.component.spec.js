'use strict';

describe('contactInfo', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('contactInfo'));

  // Test the controller
  describe('ContactInfoController', function() {

    it('should create a `phones` model with 3 phones', inject(function($componentController) {
      var ctrl = $componentController('contactInfo');

      expect(ctrl.data.length).toBe(3);
    }));

  });

});
