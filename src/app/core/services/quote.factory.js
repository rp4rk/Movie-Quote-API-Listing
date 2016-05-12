'use strict';

export default function (app) {
  app
    .factory('quoteFactory', quoteFactory);

    function quoteFactory ($http, API) {
      return function(resolve, reject) {
        $http({
          method: 'GET',
          url: `${API.url}/quotes/random`
        })
          .then(
            success => resolve(success.data),
            error => reject(data)
          );
      }
    }
}
