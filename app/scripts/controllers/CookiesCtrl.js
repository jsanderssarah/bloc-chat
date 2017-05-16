(function() {
    function CookiesCtrl(Room, $uibModalInstance, $cookies) {
        var cookie = this;
        cookie.close = function () {
            $uibModalInstance.dismiss();
        };
        cookie.createUsername = function (username) {
            console.log('Hello');
            $cookies.put('blocChatCurrentUser', cookie.username);
            $uibModalInstance.close();
        };
       
    }

    angular
        .module('blocChat')
        .controller('CookiesCtrl', ['Room', '$uibModalInstance', '$cookies', CookiesCtrl]);
})();        