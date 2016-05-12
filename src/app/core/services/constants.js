'use strict';

export default function (app) {
    app
      .constant('ROUTE_ERRORS', {
        auth: 'Authorization has been denied.',
      })
      // API Details
      .constant('API', {
        url: 'http://movie-quotes-2.herokuapp.com/api/v1',
      });
}
