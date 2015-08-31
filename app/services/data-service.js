(function() {
    'use strict';

    angular
        .module('uxApp')
        .service('dataService',dataService);

    dataService.inject = ['$q', '$http'];
    function dataService($q, $http) {
        var self = this;

        self.getMembers = function() {
            var defer = $q.defer();

            $http({
                method: 'GET',
                url: 'http://private-a73e-aquentuxsociety.apiary-mock.com/members'
            }).success(function(data){
                defer.resolve(data);
            }).error(function(err){
                defer.reject(err);
            });

            return defer.promise;
        };
    }
})();