(function() {
    function CookiesCtrl(Room, $uibModalInstance, $cookies) {
        var cookie = this;
        cookie.close = function () {
            $uibModalInstance.dismiss();
        };
        
       
       
    }

    angular
        .module('blocChat')
        .controller('CookiesCtrl', ['Room', '$uibModalInstance', '$cookies', CookiesCtrl]);
})();        