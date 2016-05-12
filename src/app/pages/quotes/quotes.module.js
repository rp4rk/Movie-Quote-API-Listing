'use strict';

import route from './quotes.route';

const quotesPageModule = angular.module('quotes-module', [
  'ui.router'
]);

quotesPageModule
    .config(route);

export default quotesPageModule;
