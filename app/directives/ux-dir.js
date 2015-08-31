(function() {
    'use strict';

    angular
        .module('uxApp')
        .directive('uxMember',uxMemberFn);

    uxMemberFn.$inject = [];
    function uxMemberFn() {
        return {
            scope: {
                member: '='
            },
            templateUrl: 'person-tmpl.html'
        }
    }
})();