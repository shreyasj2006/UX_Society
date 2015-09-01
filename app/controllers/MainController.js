/*
    The main controller of the app
 */

(function() {
    'use strict';

    angular
        .module('uxApp')
        .controller('MainController',MainControllerFn);

    MainControllerFn.$inject = ['dataService'];
    function MainControllerFn(dataService) {

        var mainVm = this;

        // Variables used to control what div's are shown to the user
        mainVm.hideMember = true;
        mainVm.hideLoadMessage = false;
        mainVm.hideDataDiv = true;

        dataService.getMembers().then(function(data) {
            mainVm.people = data;
            mainVm.hideLoadMessage = true;
            mainVm.hideDataDiv = false;
            mainVm.searchInput = '';
        }, function(err) {
            console.log(err);
        })
    }
})();