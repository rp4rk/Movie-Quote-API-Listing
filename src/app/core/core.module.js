'use strict';

const shared = angular.module('core.shared', []);

require('./services/constants')(shared);
require('./services/quote.factory')(shared);

export default shared;
