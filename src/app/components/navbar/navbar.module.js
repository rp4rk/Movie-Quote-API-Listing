'use strict';

import navbarDirective from './navbar.directive';
import './navbar.scss';

const navbarModule = angular.module('navbar-module', []);

navbarModule
  .directive('navbar', navbarDirective);

export default navbarModule;
