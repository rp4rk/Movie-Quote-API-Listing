'use strict';

function MainController($log, $stateParams, API, $http, $scope, quoteFactory) {
  'ngInject';

  // Debugging
  $log.debug('Random being loaded!');
  $log.debug(API);

  // Fetch the data from the random endpoint
  $http({
    method: 'GET',
    url: `${API.url}/quotes/random`
  })
    .then(
      success => {
        $scope.data = success.data;
      },
      error => {
        console.log(error);
      }
    );

}

export default MainController;
