'use strict';

import singlequoteDirective from './single-quote.directive';
import './single-quote.scss';

const singlequoteModule = angular.module('single-quote-module', []);

singlequoteModule
  .directive('singlequote', singlequoteDirective);

export default singlequoteModule;
