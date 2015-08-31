(function() {

    angular
        .module('uxApp')
        .controller('MainController',MainController);

    MainController.$inject = ['dataService'];
    function MainController(dataService) {

        var mainVm = this;

        mainVm.hide = true;
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