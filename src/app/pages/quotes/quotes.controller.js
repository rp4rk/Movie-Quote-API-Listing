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
        $log.debug(success.data);
        $scope.data = success.data;
        // $scope.data is overridden in each list item scope, so set count
        $scope.count = success.data.length;
      },
      error => {
        $log.debug(error);
      }
    )
}

export default QuotesController;
