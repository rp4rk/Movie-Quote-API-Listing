'use strict';

function MainSpecificController($log, $stateParams, API, $http, $scope, $state, quoteFactory) {
  'ngInject';

  // Check if we have a param, otherwise redirect to listTemplate
  if (!$stateParams.id)
    $state.go('listing');

  // Debugging
  $log.debug('Specific quote being loaded');
  $log.debug(API);
  $log.debug($stateParams)

  // Fetch the data from the random endpoint
  $http({
    method: 'GET',
    url: `${API.url}/quotes/${$stateParams.id}`
  })
    .then(
      success => {
        $log.debug(success.data);
        $scope.data = success.data;
      },
      error => {
        $log.debug(error);
        $state.go('listing');
      }
    );
}

export default MainSpecificController;
