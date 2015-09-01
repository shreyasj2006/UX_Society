/*
    Data service to get data
 */

(function() {
    'use strict';

    angular
        .module('uxApp')
        .service('dataService',dataServiceFn);

    dataServiceFn.inject = ['$q', '$http'];
    function dataServiceFn($q, $http) {
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