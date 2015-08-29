/**
 * Created by shreyas on 8/27/15.
 */

(function() {

    'use strict';

    angular.module('uxApp',[]);

    angular.module('uxApp').controller('MainController',MainController);

    MainController.$inject = ["$http"];

    function MainController($http) {
        var mainVm = this;

        mainVm.displayPerson = null;
        mainVm.displayImage = null;

        mainVm.hide = true;
        mainVm.hideLoadMessage = false;
        mainVm.hideDataDiv = true;

        mainVm.clicked = function(p) {
            mainVm.displayPerson = p;

            if(p.gender === 'male') {
                mainVm.displayImage = 'images/icon_male.png';
            } else if(p.gender === 'female') {
                mainVm.displayImage = 'images/icon_female.png';
            }

            mainVm.hide = false;
        };

        $http.get('http://private-a73e-aquentuxsociety.apiary-mock.com/members').then(
            function(response) {
                mainVm.people = response.data;
                mainVm.hideLoadMessage = true;
                mainVm.hideDataDiv = false;
                mainVm.searchInput = '';
            }
        );
        console.dir(mainVm.people);

    }

})();
