'use strict';

// Templates
import singleTemplate from './pages/main/main.html';
import listTemplate from './pages/quotes/quotes.html';

// Controllers
import randomController from './pages/main/main.controller.js';
import specificController from './pages/main/main-specific.controller.js';
import listController from './pages/quotes/quotes.controller.js';

function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject';

  // Enable HTML5 state provision
  // $locationProvider.html5Mode(true)

  // Any unmatched URLs redirect to root
  $urlRouterProvider.otherwise('/');

  // State Management
  $stateProvider
    // We'll show a random quote when the page loads
    .state('random', {
      url: '/',
      templateUrl: singleTemplate,
      controller: randomController,
    })
    // Reuse the main template for single quotes
    .state('single', {
      url: '/quotes/:id',
      templateUrl: singleTemplate,
      controller: specificController,
    })
    // A full list of them on /quotes
    .state('listing', {
      url: '/quotes',
      templateUrl: listTemplate,
      controller: listController,
    })

}

export default angular
  .module('index.routes', [])
    .config(routeConfig);
