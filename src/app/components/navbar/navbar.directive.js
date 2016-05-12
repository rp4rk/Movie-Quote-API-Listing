'use strict';

import navbarTemplate from './navbar.html';

function navbarComponent($log) {
	'ngInject';

  var directive = {
    restrict: 'E',
    templateUrl: navbarTemplate,
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;

  function NavbarController () {
	  $log.debug('Navbar init');
  }

}

export default navbarComponent;
