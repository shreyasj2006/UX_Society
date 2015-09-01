/*
    Directive to render information about a single user on the right side of the screen
 */

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