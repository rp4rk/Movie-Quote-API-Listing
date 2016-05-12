'use strict';

function QuotesController($log, $stateParams, API, $http, $scope) {
  'ngInject';

  // Debugging
  $log.debug('Listing quotes');
  $log.debug(API);

  // Fetch the data from the random endpoint
  $http({
    method: 'GET',
    url: `${API.url}/quotes/`
  })
    .then(
      success => {
        console.log(success.data);
        $scope.data = success.data;
      },
      error => {
        console.log(error);
      }
    )
}

export default QuotesController;
