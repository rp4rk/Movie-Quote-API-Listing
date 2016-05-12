'use strict';

import singlequoteTemplate from './single-quote.html';

function singlequoteComponent($log) {
	'ngInject';

  var directive = {
    restrict: 'E',
		scope: false,
    templateUrl: singlequoteTemplate,
    controller: ['$scope', 'quoteFactory', singlequoteController],
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;

  function singlequoteController ($scope, quoteFactory) {
	  $log.debug('singlequote init');

		// Set up rerolls
	  $scope.reroll = function() {
	    quoteFactory(
	      success => {
	        $scope.data = success;
	      },
	      error => {
	        console.log(error);
	      }
	    );
	  }
  };



}

export default singlequoteComponent;
