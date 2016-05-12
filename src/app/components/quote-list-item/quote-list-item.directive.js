'use strict';

import quoteListItemTemplate from './quote-list-item.html';

function quoteListItemComponent($log) {
	'ngInject';

  var directive = {
    restrict: 'E',
		scope: false,
    templateUrl: quoteListItemTemplate,
    controller: quoteListItemController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;

  function quoteListItemController () {
	  $log.debug('quoteListItem init');
  }

}

export default quoteListItemComponent;
