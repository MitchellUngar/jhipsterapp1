'use strict';

angular.module('firstAppApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


