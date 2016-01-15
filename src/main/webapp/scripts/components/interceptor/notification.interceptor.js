 'use strict';

angular.module('firstAppApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-firstAppApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-firstAppApp-params')});
                }
                return response;
            }
        };
    });
