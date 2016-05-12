'use strict';

export default angular.module('index.components', [
	require('./components/navbar/navbar.module').name,
	require('./components/single-quote/single-quote.module').name,
	require('./components/quote-list-item/quote-list-item.module').name,
]);
