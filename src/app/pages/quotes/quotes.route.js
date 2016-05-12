'use strict';

import quotesTemplate from './quotes.html';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('quotes', {
      url: '/quotes/',
      templateUrl: quotesTemplate,
      controller: require('./quotes.controller')
      //controllerAs: 'main',
    });

}

export default routeConfig;
