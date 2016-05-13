'use strict';

function MainController($log, $stateParams, API, $http, $scope, quoteFactory) {
  'ngInject';

  // Debugging
  $log.debug('Random being loaded!');
  $log.debug(API);

  // Fetch the data from the random endpoint
  quoteFactory(
    success => {
      $scope.data = success;
    },
    error => {
      console.log(error);
    }
  );

}

export default MainController;
