'use strict';

import quoteListItemDirective from './quote-list-item.directive';
import './quote-list-item.scss';

const quoteListItemModule = angular.module('quote-list-item-module', []);

quoteListItemModule
  .directive('quotelistitem', quoteListItemDirective);

export default quoteListItemModule;
